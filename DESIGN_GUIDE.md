# Ousach Capital design guide

This guide governs additions to the site. Use `css/site.css` as the implementation reference. When an approved visual change introduces a reusable pattern, update the stylesheet and this guide together.

## Visual direction

Keep the page light and spacious. White and pale blue carry the surfaces, near-black carries the headings, slate gives the brand its colour, and gold marks small points of emphasis. The sphere supplies most of the visual depth. Use open rows with fine horizontal rules for related content. Reserve pill shapes for controls and circular frames for team portraits. Avoid card grids, side-accent borders, text shadows, heavy drop shadows, and decorative artwork unrelated to the sphere.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| `--white` | `#FFFFFF` | Main background, header and button text |
| `--ink` | `#121518` | Headings, wordmark and primary button fill |
| `--muted` | `#4F606B` | Body copy, role descriptions and eyebrow labels |
| `--slate` | `#41657A` | “capital.” in the hero, link hover and focus outline |
| `--gold` | `#ECB338` | Eyebrow rules and the first mandate and core-sector dividers |
| `--gold-text` | `#77520D` | Small numbers, “Core focus” and the footer arrow |
| `--blue` | `#E9F4F8` | Full-width introductions section |
| `--blue-light` | `#F4F9FC` | Full-width approach section |
| `--line` | `#D8E4EA` | Row separators and secondary-control borders |

Use dark gold for small text and bright gold for accents. Existing component-specific colours include `#A77313` on the wordmark dot, `#FFD570` on the primary button arrow, `#25485C` on primary-button hover and `#EAF0F3` on the header divider. Reuse palette tokens for new UI. The hero gradient layers `#E5F2F8` and `#F2F8FB` over white fading to `#F7FBFD`, with the radial highlight behind the artwork at 75% across and 38% down.

## Typography

Use locally hosted Poppins in normal style, weights 400, 500, 600 and 700. Arial and the system sans-serif stack serve as fallbacks. Preserve British spelling and the casing of **iGaming**.

| Element | Treatment |
| --- | --- |
| Body | 1rem at 400, with 1.65 line height |
| Hero lead | 1–1.14rem with 1.76 line height and a 29rem maximum width |
| Hero headline | 3.15–6.65rem on wide screens, weight 700, .99 line height and −.072em tracking. Keep “No-nonsense” in ink and “capital.” in slate on its own line |
| Section heading | 2.25–4.45rem, 1.05 line height, −.059em tracking |
| Row heading | 1.12–1.36rem, weight 600. iGaming uses 1.9–2.75rem |
| Row copy | .9rem in muted slate |
| Eyebrow | .67rem, 600, uppercase and .16em tracking, with a 1.8rem × 2px gold rule. Use the existing 01–04 numbers for the four principal sections |
| Wordmark | “Ousach.” at weight 700 with tight tracking. Set “Capital” underneath in small, widely spaced capitals |

## Layout and hierarchy

- Use the shared `.wrap` with a 73rem maximum and fluid gutters of 1.25–4.75rem. Main sections use 3.6–7.5rem of vertical padding.
- On desktop, divide the hero into equal columns. Place the headline, lead and single primary button on the left and the sphere on the right. Follow with the three-column mandate strip.
- Use the shared 0.9:1.1 section grid for Focus, Approach and People. Put the title and lead in the narrower left column and the content rows on the right. Use the full-width pale blue surface on Approach, with white surrounding Focus and People.
- Give iGaming the gold divider, “Core focus” label, larger heading and supporting copy. Group Defence & dual-use technology, Education technology and Healthcare technology under “Other areas.” Keep those rows to an icon and title.
- Keep the final **04 How to connect** section centred, with an outer width capped at 46rem and body copy capped at 36rem. The heading is “Introductions welcome.” The top navigation contains Focus, Approach and People.
- At 900px, the hero headline scales down and the fixed hero minimum height gives way to content. At 720px and below, centre and stack the hero, switch the mandate strip to two columns and stack the main section grids. CSS and the mobile menu script share the 720px breakpoint.

## Artwork and portraits

| Asset | Role and treatment |
| --- | --- |
| `hero-sphere.webp` | Main visual. Preserve the square source and full sphere silhouette. Display at up to 32rem wide on desktop and 19rem on mobile, over the blue glow |
| `igaming.webp` | Small 2.5rem inline icon alongside the iGaming title. Preserve its current size and treatment |
| `defence.webp`, `education.webp`, `healthcare.webp` | Secondary sector icons. Preserve their lighter, smaller appearance. Their columns are 4.75rem on desktop and 3.8rem on mobile, with .80 scale and filters of .8 saturation and 1.18 brightness |
| `favicon.svg` | Browser-tab brand mark |

Use the existing artwork as the visual reference for new illustrations. Match the sphere’s depth, soft lighting and restrained slate, blue and gold accents. Keep new secondary icons at comparable optical size and avoid letting them compete with the iGaming row. Keep square export canvases and update HTML dimensions if source dimensions change.

The team uses **AO** and **KT** placeholders. Each frame is circular, 6.25–8rem wide, with a 4px metallic ring. The ring uses a conic gradient of cool silver-blue and slate with warm gold highlights. The inner disc uses a pale radial gradient, slate initials and a subtle inset outline. Keep the outer ring and circular crop if headshots are approved later. Keep names and titles adjacent to the frames, and style the LinkedIn mark in the site's slate gradient.

## Interaction and accessibility

- Use the dark `.button` pill for the hero CTA, with a gold arrow and slate hover fill. Use underlining on navigation and profile links for hover feedback.
- Retain the skip link, landmark elements, heading order and visible 3px slate focus outlines. Use empty alt text on decorative artwork alongside its text label.
- On mobile, the menu exposes its state through `aria-expanded`. Selecting a section moves keyboard focus to that section. Escape closes the menu and returns focus to its button. The navigation stays available when JavaScript is disabled.
- Smooth scrolling respects reduced-motion preferences. Keep any future animation subtle and provide reduced-motion behaviour.

## Review before shipping

1. Compare the page at 1440px and 390px, then check 320px and both sides of the 720px breakpoint. Look for horizontal overflow, headline clipping, inconsistent row spacing and an oversized mobile sphere.
2. Check that iGaming reads as the primary focus, the three secondary icons stay visually lighter and smaller, and both team frames remain circular.
3. Test keyboard tab order, visible focus, the skip link, mobile menu close behaviour and all anchors. Check the page with reduced motion and JavaScript disabled.
4. Confirm that local fonts and all assets load, the hero reads “EARLY STAGE INVESTMENTS,” and the last section reads “04 How to connect.”
