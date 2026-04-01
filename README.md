# social-comments

Web component to show comments from Mastodon, Bluesky, and Threads unified in one list, sorted chronologically.

Forked from [@oom/mastodon-comments](https://github.com/oom-components/mastodon-comments) by [Oscar Otero](https://github.com/oscarotero), with Threads support added.

- No dependencies
- Light: ~350 lines of code
- Follows the **progressive enhancement strategy**
- Built with modern JavaScript: ES6 modules and custom elements

## Usage

### HTML

Pass URLs or shortcodes for whichever platforms you want:

```html
<your-comments
  mastodon="https://mastodon.social/@you/123456789"
  bluesky="https://bsky.app/profile/you.bsky.social/post/abc123"
  threads="https://www.threads.net/@you/post/Abc123XyZ"
>
  No comments yet.
</your-comments>
```

### JS

Register the custom element with whatever name you prefer:

```js
import SocialComments from "@codybrom/social-comments/src/comments.js";

customElements.define("your-comments", SocialComments);
```

### CSS

Import the CSS from the original package or write your own:

```css
@import "@oom/mastodon-comments/src/styles.css";
```

## Threads support

Threads requires an authenticated API token, so comments can't be fetched directly from the browser. You need a small server-side proxy that holds your credentials.

### The `threads` attribute

Pass the full URL of your Threads post. The component automatically parses the shortcode and the author's username from the URL:

```
https://www.threads.net/@you/post/Abc123XyZ
```

A bare shortcode also works as a fallback, but you'll need to set `threads-owner` separately in that case.

### The `threads-owner` attribute

Your Threads username (without `@`). Replies from this account are filtered out. When `threads` is a full URL, the username is parsed automatically — this attribute is only needed when passing a bare shortcode.

### The `threads-api` attribute

The URL of your proxy endpoint. Defaults to `/api/threads-comments`. Override if your proxy lives elsewhere:

```html
<your-comments
  threads="Abc123XyZ"
  threads-api="https://api.example.com/threads-proxy"
>
</your-comments>
```

### Setting up the proxy

The proxy receives `GET /api/threads-comments?shortcode=<shortcode>` and returns an array of reply objects from the Threads API.

An example [Cloudflare Pages Function](https://developers.cloudflare.com/pages/functions/) is included in [`examples/cloudflare-pages/threads-comments.ts`](./examples/cloudflare-pages/threads-comments.ts). Copy it to `functions/api/threads-comments.ts` in your Pages project and set these environment variables in the Cloudflare dashboard:

| Variable | Description |
|---|---|
| `THREAD_TOKEN` | Threads long-lived access token |
| `THREADS_ACCOUNT_ID` | Your numeric Threads account ID |
| `THREADS_USERNAME` | Your Threads username (for filtering) |

To get these values, create a [Meta for Developers](https://developers.facebook.com/apps/) app with the Threads API product. The long-lived token is valid for 60 days and can be refreshed programmatically.

## Verified badges

Threads accounts with `is_verified: true` get a blue checkmark badge rendered next to their username.

## All attributes

| Attribute | Description |
|---|---|
| `mastodon` or `src` | URL of a Mastodon/Pleroma post |
| `bluesky` | URL of a Bluesky post |
| `threads` | Full URL of a Threads post (username parsed automatically) |
| `threads-owner` | Threads username to exclude (auto-parsed from URL; only needed for bare shortcodes) |
| `threads-api` | Proxy endpoint URL (default: `/api/threads-comments`) |
| `cache` | Cache TTL in seconds for Mastodon/Bluesky responses |
| `token` | Mastodon API token (for private instances) |

## Cache

Use the `cache` attribute to cache Mastodon and Bluesky API responses. Threads responses are cached by your proxy's `Cache-Control` header.

```html
<your-comments cache="60" mastodon="...">
  No comments yet.
</your-comments>
```

## Customization

Override `renderComment` in a subclass to customize the HTML:

```js
import SocialComments from "@codybrom/social-comments/src/comments.js";

class CustomComments extends SocialComments {
  renderComment(comment) {
    // comment.source is "mastodon", "pleroma", "bluesky", or "threads"
    // comment.isVerified is true for verified Threads accounts
    return `<div>${comment.author.name}: ${comment.content}</div>`;
  }
}

customElements.define("your-comments", CustomComments);
```

## Credits

- Original `mastodon-comments` component by [Oscar Otero](https://github.com/oscarotero) / [oom-components](https://github.com/oom-components)
- Bluesky support originally contributed by [Andy](https://pixelde.su/)
- Threads support by [Cody Bromley](https://github.com/codybrom)
- Icons: [Phosphor Icons](https://phosphoricons.com/), [Simple Icons](https://simpleicons.org/), [Font Awesome Free](https://fontawesome.com/) (CC BY 4.0)
