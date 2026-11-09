import localFont from "next/font/local";

/**
 * Polices auto-hébergées (paquets @fontsource) : aucune dépendance à Google Fonts
 * au build, et rien n'est chargé depuis un serveur tiers par les visiteurs.
 */
// A · Velours (thème par défaut, polices préchargées)
const italiana = localFont({
  src: "../../node_modules/@fontsource/italiana/files/italiana-latin-400-normal.woff2",
  variable: "--font-italiana",
  display: "swap",
});
const cormorant = localFont({
  src: [
    { path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
const jost = localFont({
  src: [
    { path: "../../node_modules/@fontsource/jost/files/jost-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/jost/files/jost-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jost",
  display: "swap",
});

// B · Cherry Pop
const anton = localFont({ src: "../../node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2", variable: "--font-anton", display: "swap", preload: false });
const dmSans = localFont({
  src: [
    { path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-dmsans",
  display: "swap",
  preload: false,
});
const pinyon = localFont({ src: "../../node_modules/@fontsource/pinyon-script/files/pinyon-script-latin-400-normal.woff2", variable: "--font-pinyon", display: "swap", preload: false });

// C · Carnet
const caslon = localFont({
  src: [
    { path: "../../node_modules/@fontsource/libre-caslon-text/files/libre-caslon-text-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/libre-caslon-text/files/libre-caslon-text-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-caslon",
  display: "swap",
  preload: false,
});
const spaceMono = localFont({
  src: [
    { path: "../../node_modules/@fontsource/space-mono/files/space-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/space-mono/files/space-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-spacemono",
  display: "swap",
  preload: false,
});

export const fontVariables = [italiana, cormorant, jost, anton, dmSans, pinyon, caslon, spaceMono]
  .map((font) => font.variable)
  .join(" ");
