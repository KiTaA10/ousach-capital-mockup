# Ousach Capital website

1. Extract the ZIP.
2. In VS Code, choose **File → Open Folder** and open `Ousach_Capital_Website`.
3. Open `index.html` in a browser. For live reload, use the VS Code Live Server extension if installed. You can also run `python3 -m http.server 8000` from the VS Code terminal and open [localhost:8000](http://localhost:8000).

The site uses plain HTML, CSS and JavaScript. Fonts and images are local. There is no dependency install or build step. To deploy, publish the folder to a static host with `index.html` at the root and keep the relative paths intact.

| Path | Purpose |
| --- | --- |
| `index.html` | Page copy, sections, navigation and metadata |
| `css/site.css` | Colour tokens, typography, components and breakpoints |
| `js/site.js` | Mobile menu, breakpoint handling and keyboard focus |
| `assets/images/` | Hero artwork, sector icons and favicon |
| `assets/fonts/` | Poppins WOFF2 files and the SIL Open Font License |
| `DESIGN_GUIDE.md` | Design rules and review checklist for future development |

Use the design guide alongside the stylesheet when adding sections or replacing artwork. The source contains the approved hero and final section labels and the circular team placeholders.
