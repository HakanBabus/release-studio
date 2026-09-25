# Contributing

Thanks for helping improve Release Studio. Small, focused changes are easiest to review.

## Local setup

The app is plain HTML, CSS, and JavaScript. It has no package install or build step.

```powershell
python -m http.server 8000 --directory site
```

Open <http://localhost:8000> and try the example, Markdown parsing, public GitHub latest/tag imports, README section selection and no-release fallback, URL error states, field edits, all preset filters, both themes, the accent picker, and PNG/SVG downloads. Check a narrow mobile viewport as well.

## Before opening a pull request

- Keep release text in the browser; do not add analytics, remote fonts, or an upload endpoint without discussing the privacy impact.
- Keep the layout usable on narrow screens and ensure new controls have labels, keyboard focus, and clear status feedback.
- Run `node --check site/app.js` and `git diff --check`.
- Update both `README.md` and `README.tr.md` when user-facing behavior or setup changes.
- Describe the user problem, the change, and how you checked it. Include before/after screenshots for visual changes when possible.

## Scope

The first release focuses on one editable 1200 × 630 card, including optional imports from public GitHub releases and README sections. Account systems, authenticated or private GitHub access, hosted share links, and collaborative editing are outside the current MVP.
