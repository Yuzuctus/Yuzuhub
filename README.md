# YuzuHub

The editorial ecosystem directory for **Yuzuctus**.

## Live

[yuzuctus.fr](https://yuzuctus.fr)

## Experience

- Bilingual editorial overview of Yuzuctus projects and experiments
- Direct routes to Osurea, YuzuSkins and social profiles
- Light and dark themes with reduced-motion support
- A [credits page](https://yuzuctus.fr/credits/) with each artist’s own profiles and a voluntary credit for the VPS provider, Echo-Host

## Design system

YuzuHub uses the shared **Agrume v3** kit (`Personnel/Redesign/Agrume_Design`),
the single design of yuzuctus.fr, skins.yuzuctus.fr and FM.Yuzuctus.
`agrume/css/` (fonts, tokens, base, components) and `agrume/fonts/` (IBM Plex)
are **verbatim copies**: never edit them here; change the kit, then recopy.
Site-only rules live in `css/site.css` and use kit tokens only.

Check the copy after any update (exit code 0 = identical):

```sh
node ../Redesign/Agrume_Design/check-parity.mjs agrume/css
```

`.gitattributes` forces LF on `agrume/**` so `autocrlf` cannot break parity.

## Tech

- Pure HTML / CSS / JS — no framework
- Hosted on Cloudflare Pages

## Credits

- **Art by**: [KouriHase](https://x.com/Kourihase), [Mazuko](https://vgen.co/Mazuko), and [Joa](https://x.com/dreepies).
- **VPS provider**: [Echo-Host](https://echo-host.net/). The credits page identifies the referral link as an affiliate link.

The static profile links live in `credits/index.html`; each artist can have a different set of links. French and English copy, including page metadata, lives in `js/app.js`. Site-specific layout is in `css/site.css`. Both pages share the language and theme preferences.
