// Forked from @oom/mastodon-comments@0.3.2
// Original: https://github.com/oom-components/mastodon-comments
// Threads support added by Cody Bromley <https://github.com/codybrom>

// © https://phosphoricons.com/
export const icons = {
  reblog: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="24"><polyline points="200 88 224 64 200 40"/><path d="M32,128A64,64,0,0,1,96,64H224"/><polyline points="56 168 32 192 56 216"/><path d="M224,128a64,64,0,0,1-64,64H32"/></svg>`,
  favourite: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"/></svg>`,
  author: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor" class="comment-author"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`,
  verified: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512" fill="#0095F6" style="display:inline-block;vertical-align:middle;margin-left:2px"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`,

  // @ https://simpleicons.org/
  mastodon: `<svg role="img" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>`,

  pleroma: `<svg role="img" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pleroma</title><path d="M6.36 0A1.868 1.868 0 004.49 1.868V24h5.964V0zm7.113 0v12h4.168a1.868 1.868 0 001.868-1.868V0zm0 18.036V24h4.168a1.868 1.868 0 001.868-1.868v-4.096Z"/></svg>`,

  bluesky: `<svg role="img" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>`,

  // Font Awesome Free 6.7.2 - CC BY 4.0 - https://fontawesome.com
  threads: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"/></svg>`,
};

export default class SocialComments extends HTMLElement {
  comments = {};

  async connectedCallback() {
    const lang = this.closest("[lang]")?.lang || navigator.language || "en";

    this.dateTimeFormatter = new Intl.DateTimeFormat(lang, {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const mastodon = this.getAttribute("mastodon") || this.getAttribute("src");
    const bluesky = this.getAttribute("bluesky");
    const threads = this.getAttribute("threads");
    const threadsOwner = this.getAttribute("threads-owner");
    const threadsApi =
      this.getAttribute("threads-api") || "/api/threads-comments";

    await Promise.all([
      mastodon && this.#fetchMastodon(new URL(mastodon)),
      bluesky && this.#fetchBluesky(new URL(bluesky)),
      threads && this.#fetchThreads(threads, threadsOwner, threadsApi),
    ]);

    this.refresh();
  }

  refresh() {
    const comments = [
      ...(this.comments.mastodon || []),
      ...(this.comments.bluesky || []),
      ...(this.comments.threads || []),
    ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    if (comments.length) {
      this.innerHTML = "";
      this.render(this, comments);
    }
  }

  async #fetchThreads(shortcode, owner, apiEndpoint) {
    try {
      const res = await fetch(`${apiEndpoint}?shortcode=${shortcode}`);
      if (!res.ok) return;
      const replies = await res.json();

      this.comments.threads = replies
        .filter((r) => r.hide_status !== "HIDDEN")
        .filter((r) => !owner || r.username !== owner)
        .map((r) => ({
          id: r.id,
          isMine: false,
          isVerified: !!r.is_verified,
          source: "threads",
          url: r.permalink || `https://www.threads.net/@${r.username}`,
          parent: null,
          createdAt: new Date(r.timestamp),
          content: escapeHtml(r.text || ""),
          author: {
            name: `@${r.username}`,
            handler: "",
            url: `https://www.threads.net/@${r.username}`,
            avatar: r.profile_picture_url || "",
            alt: r.username,
          },
          boosts: 0,
          likes: 0,
          replies: [],
        }));
    } catch {
      // Silently fail — Threads proxy may not be configured
    }
  }

  async #fetchBluesky(url) {
    const { pathname } = url;

    const [, handle, rkey] = pathname.match(
      /\/profile\/([\w\.]+)\/post\/(\w+)/,
    );

    if (!handle || !rkey) {
      return;
    }

    const options = {
      ttl: Number(this.getAttribute("cache") || 0),
    };

    const didData = await fetchJSON(
      `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${handle}`,
      options,
    );
    const uri = `at://${didData.did}/app.bsky.feed.post/${rkey}`;

    this.comments.bluesky = dataFromBluesky(
      await fetchJSON(
        `https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=${uri}`,
        options,
      ),
    );
  }

  async #fetchMastodon(url) {
    const { origin, pathname } = url;
    let id;

    const source = pathname.includes("/notice/") ? "pleroma" : "mastodon";

    if (source === "pleroma") {
      [, id] = pathname.match(/^\/notice\/([^\/?#]+)/);
    } else {
      [, id] = pathname.match(/\/(\d+)$/);
    }

    if (!id) {
      return;
    }

    const token = this.getAttribute("token");
    const options = {
      ttl: Number(this.getAttribute("cache") || 0),
    };
    if (token) {
      options.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    const user = url.pathname.split("/")[1];
    const author = `${user}@${url.hostname}`;

    const comments = dataFromMastodon(
      await fetchJSON(
        new URL(`${origin}/api/v1/statuses/${id}/context`),
        options,
      ),
      author,
      source,
    );

    this.comments.mastodon = comments.filter(
      (comment) => comment.parent === id,
    );
  }

  render(container, replies) {
    const ul = document.createElement("ul");

    for (const reply of replies) {
      const comment = document.createElement("li");
      comment.innerHTML = this.renderComment(reply);

      if (reply.replies.length) {
        this.render(comment, reply.replies);
      }
      ul.appendChild(comment);
    }

    container.appendChild(ul);
  }

  renderComment(comment) {
    const hasAvatar = comment.author.avatar;
    const avatarHtml = hasAvatar
      ? `<img class="comment-avatar" src="${comment.author.avatar}" alt="${comment.author.alt}'s avatar" width="200" height="200">`
      : "";

    const verifiedHtml = comment.isVerified ? icons.verified : "";
    const handlerHtml = comment.author.handler
      ? `<em class="comment-useraddress">${comment.author.handler}</em>`
      : "";

    return `
        <article class="comment" id="comment-${comment.id}">
          <footer class="comment-footer">
            <a href="${comment.author.url}" class="comment-user">
              ${avatarHtml}
              ${comment.isMine ? icons.author : ""}
              <strong class="comment-username">
                ${comment.author.name}${verifiedHtml}
              </strong>
              ${handlerHtml}
            </a>
            <a href="${comment.url}" class="comment-address">
              <time class="comment-time" title="${comment.createdAt.toISOString()}">
                ${this.dateTimeFormatter.format(comment.createdAt)}
                ${icons[comment.source]}
              </time>
            </a>
          </footer>
          <div class="comment-body">
            ${comment.content}

            <p class="comment-counts">
              ${comment.boosts ? `<span>${icons.reblog} ${comment.boosts}</span>` : ""}
              ${comment.likes ? `<span>${icons.favourite} ${comment.likes}</span>` : ""}
            </p>
          </div>
        </article>
      `;
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatEmojis(html, emojis) {
  emojis.forEach(({ shortcode, static_url, url }) => {
    html = html.replace(
      `:${shortcode}:`,
      `<picture>
        <source srcset="${url}" media="(prefers-reduced-motion: no-preference)">
        <img src="${static_url}" alt=":${shortcode}:" title=":${shortcode}:" width="16" height="16">
      </picture>`,
    );
  });
  return html;
}

async function fetchJSON(url, options = {}) {
  const headers = new Headers();

  if (options.headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      headers.set(key, value);
    }
  }

  if (typeof caches === "undefined") {
    return await (await fetch(url, { headers })).json();
  }

  const cache = await caches.open("social-comments");
  let cached = await cache.match(url);

  if (cached && options.ttl) {
    const cacheTime = new Date(cached.headers.get("x-cached-at"));
    const diff = Date.now() - cacheTime.getTime();

    if (diff <= options.ttl * 1000) {
      return await cached.json();
    }
  }

  try {
    const response = await fetch(url, { headers });
    const body = await response.json();

    cached = new Response(JSON.stringify(body));
    cached.headers.set("x-cached-at", new Date());
    cached.headers.set("content-type", "application/json; charset=utf-8");
    await cache.put(url, cached);
    return body;
  } catch {
    if (cached) {
      return await cached.json();
    }
  }
}

function dataFromMastodon(data, author, source) {
  const comments = new Map();

  for (const comment of data.descendants) {
    if (comment.visibility !== "public") {
      continue;
    }

    const { account } = comment;
    const handler = `@${account.username}@${new URL(account.url).hostname}`;
    comments.set(comment.id, {
      id: comment.id,
      isMine: author === handler,
      source,
      url: comment.url,
      parent: comment.in_reply_to_id,
      createdAt: new Date(comment.created_at),
      content: formatEmojis(comment.content, comment.emojis),
      author: {
        name: formatEmojis(account.display_name, account.emojis),
        handler,
        url: account.url,
        avatar: account.avatar_static,
        alt: account.display_name,
      },
      boosts: comment.reblogs_count,
      likes: comment.favourites_count,
      replies: [],
    });
  }

  for (const comment of comments.values()) {
    if (comment.parent && comments.has(comment.parent)) {
      comments.get(comment.parent).replies.push(comment);
    }
  }

  return Array.from(comments.values());
}

function dataFromBluesky(data) {
  const { thread } = data;

  return blueskyComments(
    thread.post.author.did,
    thread.post.cid,
    thread.replies,
  );
}

function blueskyComments(author, parent, comments) {
  return comments.map((reply) => {
    const { post, replies } = reply;
    const rkey = post.uri.split("/").pop();
    return {
      id: post.cid,
      isMine: post.author.did === author,
      source: "bluesky",
      url: `https://bsky.app/profile/${post.author.handle}/post/${rkey}`,
      parent,
      createdAt: new Date(post.record.createdAt),
      content: post.record.text,
      author: {
        name: post.author.displayName,
        handler: post.author.handle,
        url: `https://bsky.app/profile/${post.author.handle}`,
        avatar: post.author.avatar,
        alt: post.author.displayName,
      },
      boosts: post.repostCount,
      likes: post.likeCount,
      replies: blueskyComments(author, post.cid, replies || []),
    };
  });
}
