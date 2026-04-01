/**
 * Cloudflare Pages Function: Threads Comments Proxy
 *
 * Resolves a Threads post shortcode to a numeric media ID and returns
 * replies from the Threads API. Required because the Threads API needs
 * an authenticated token that cannot be exposed in client-side code.
 *
 * Deploy to: functions/api/threads-comments.ts in your Cloudflare Pages project
 *
 * Environment variables (set in Cloudflare Pages dashboard):
 *   THREAD_TOKEN        - Your Threads API long-lived access token
 *   THREADS_ACCOUNT_ID  - Your Threads numeric account ID
 *   THREADS_USERNAME    - Your Threads username (to filter out your own replies)
 *
 * Usage: GET /api/threads-comments?shortcode=<post-shortcode>
 */

const THREADS_API = "https://graph.threads.net/v1.0";

const REPLY_FIELDS = [
  "id",
  "media_product_type",
  "media_type",
  "permalink",
  "username",
  "text",
  "timestamp",
  "has_replies",
  "is_verified",
  "profile_picture_url",
  "is_reply",
  "is_reply_owned_by_me",
  "hide_status",
].join(",");

interface Env {
  THREAD_TOKEN: string;
  THREADS_ACCOUNT_ID: string;
  THREADS_USERNAME: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const shortcode = url.searchParams.get("shortcode");

  if (!shortcode) {
    return Response.json(
      { error: "shortcode parameter required" },
      { status: 400 },
    );
  }

  const token = context.env.THREAD_TOKEN;
  const accountId = context.env.THREADS_ACCOUNT_ID;
  const username = context.env.THREADS_USERNAME;

  if (!token || !accountId) {
    return Response.json({ error: "server misconfigured" }, { status: 500 });
  }

  try {
    const mediaId = await resolveShortcode(shortcode, accountId, token);
    if (!mediaId) {
      return Response.json({ error: "post not found" }, { status: 404 });
    }

    const allReplies = await fetchReplies(mediaId, token);
    const replies = allReplies.filter((r) => r.username !== username);

    return Response.json(replies, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (err) {
    return Response.json(
      { error: "failed to fetch comments", detail: String(err) },
      { status: 502 },
    );
  }
};

async function resolveShortcode(
  shortcode: string,
  accountId: string,
  token: string,
): Promise<string | null> {
  const url = new URL(`${THREADS_API}/${accountId}/threads`);
  url.searchParams.set("fields", "id,shortcode,permalink");
  url.searchParams.set("access_token", token);
  url.searchParams.set("limit", "50");

  let cursor: string | undefined;

  for (let page = 0; page < 5; page++) {
    if (cursor) url.searchParams.set("after", cursor);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Threads API error: ${res.status}`);

    const data = (await res.json()) as {
      data: Array<{ id: string; shortcode?: string; permalink?: string }>;
      paging?: { cursors?: { after?: string } };
    };

    for (const post of data.data) {
      if (post.shortcode === shortcode) return post.id;
      if (post.permalink?.includes(shortcode)) return post.id;
    }

    cursor = data.paging?.cursors?.after;
    if (!cursor) break;
  }

  return null;
}

async function fetchReplies(
  mediaId: string,
  token: string,
): Promise<Array<Record<string, unknown>>> {
  const url = new URL(`${THREADS_API}/${mediaId}/conversation`);
  url.searchParams.set("fields", REPLY_FIELDS);
  url.searchParams.set("access_token", token);
  url.searchParams.set("reverse", "false");

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Threads API error: ${res.status}`);

  const data = (await res.json()) as {
    data: Array<Record<string, unknown>>;
  };

  return data.data || [];
}
