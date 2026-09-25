# Release Studio

**Turn release notes into a clear, shareable card.** Paste Markdown or import a public GitHub release, choose from 16 distinct layouts, review the extracted highlights, then download a 1200 × 630 PNG or SVG.

[Open the live app](https://hakanbabus.github.io/release-studio/) · [Türkçe](README.tr.md) · [How to contribute](CONTRIBUTING.md) · [MIT License](LICENSE)

[![Deploy to GitHub Pages](https://github.com/HakanBabus/release-studio/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/HakanBabus/release-studio/actions/workflows/deploy-pages.yml)

## Why Release Studio?

Release pages are good at listing changes. Release Studio makes the important changes easy to share as an image. It is a small static website with no account, backend, analytics, or third-party runtime dependencies. Release text is processed in the browser and is not saved by the app.

## Use it

1. Paste Markdown notes, choose **GitHub URL** to fetch a public release or start from a repository README, or select **Try an example**.
2. Check the project name, version, title, summary, and up to three highlights. Edit any of them directly under **Fine-tune your card**.
3. Choose a style, switch between light and dark, adjust its accent color, then download **PNG** or **SVG**.

### Import from GitHub

Paste any of these public URL formats into the **GitHub URL** tab:

- Repository: `https://github.com/owner/repo` (imports its latest published release)
- Latest release: `https://github.com/owner/repo/releases/latest`
- Specific release: `https://github.com/owner/repo/releases/tag/v1.2.3`
- GitHub API: `https://api.github.com/repos/owner/repo/releases/latest` or `/releases/tags/v1.2.3`

The browser requests GitHub's public Releases API only after you press **Fetch notes**. A repository URL such as `https://github.com/owner/repo` first looks for its latest published release. If there is none, Release Studio loads that public repository's README and lets you choose up to three sections. You can also use **Pick from README sections** at any time. Selected text is copied into the Markdown editor, where you can edit it before exporting; if the README has no headings, the full README is opened for editing. README files over 1 MB are not imported.

Private repositories and draft releases are not available. GitHub may rate-limit anonymous requests; if that happens, wait for the time shown or paste the Markdown notes instead. No personal access token is needed or accepted.

The parser uses the first non-section heading as the title, the first paragraph as the summary, and the first three ordered or unordered list items as highlights. It recognizes a version such as `v1.4.0` in the title. Any additional list items are counted and stay in the source notes. If a heading is missing, the title defaults to “Release update”.

Markdown is treated as text. Headings, lists, links, emphasis, inline code, and simple HTML tags are handled safely for this card format; the app does not render arbitrary HTML.

## Run locally

No package install or build step is required. You can open `site/index.html` directly, or serve the site from the repository root:

```powershell
python -m http.server 8000 --directory site
```

Then visit [http://localhost:8000](http://localhost:8000).

## Privacy and exports

- Pasted notes and imported release or README text stay in the current browser tab; the app does not upload them elsewhere or store them in local storage.
- When you explicitly fetch a GitHub URL, your browser contacts `api.github.com` for public release or README content. GitHub receives that request from your network; no request is made to a Release Studio server.
- The site loads no remote fonts, scripts, or images.
- PNG and SVG exports are rendered locally at **1200 × 630 px**.
- Export needs a browser with SVG image and Canvas support. If PNG rendering fails, SVG export remains available.

## Publish with GitHub Pages

The included workflow deploys the contents of `site/` when code is pushed to `main`, and can also be started manually.

For the first deployment, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. After that, pushes to `main` publish automatically. Check the **Actions** tab for deployment progress; GitHub shows the live URL under **Settings → Pages**.

## Contributing

Bug reports, accessibility feedback, and small improvements are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. For security concerns, see [SECURITY.md](SECURITY.md).

## License

Release Studio is available under the [MIT License](LICENSE).
