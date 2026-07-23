// Mono Editorial theme tokens.
// Two complete, working palettes: Paper (light, default) and Ink (dark).
// `shared` holds typography + layout tokens that don't change with mode.

const shared = {
  // Typography
  fontSerif: "'Spectral', Georgia, 'Times New Roman', serif",
  fontSans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace",
  // Layout
  maxWidth: "1080px",
  radius: "2px",
  // Motion
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  fast: "160ms",
  base: "260ms",
};

// Paper - warm off-white, ink text. The default, modest editorial look.
export const lightTheme = {
  ...shared,
  name: "paper",
  bg: "#faf9f6",
  surface: "#ffffff",
  surfaceAlt: "#f3f1ea",
  text: "#1a1a1a",
  textMuted: "#5b5b5b",
  hairline: "#e4e1d8",
  accent: "#1a1a1a",
  onAccent: "#faf9f6",

  // Legacy aliases (kept so not-yet-redesigned components still render in
  // the new palette). Removed once every section is migrated.
  text_primary: "#1a1a1a",
  text_secondary: "#5b5b5b",
  card: "#ffffff",
  card_light: "#f3f1ea",
  primary: "#1a1a1a",
  button: "#1a1a1a",
  white: "#ffffff",
  black: "#1a1a1a",
  bgLight: "#ffffff",
};

// Ink - quiet dark mode, inverted.
export const darkTheme = {
  ...shared,
  name: "ink",
  bg: "#111111",
  surface: "#1a1a1a",
  surfaceAlt: "#161616",
  text: "#ededed",
  textMuted: "#9a9a9a",
  hairline: "#2a2a2a",
  accent: "#ededed",
  onAccent: "#111111",

  text_primary: "#ededed",
  text_secondary: "#9a9a9a",
  card: "#1a1a1a",
  card_light: "#161616",
  primary: "#ededed",
  button: "#ededed",
  white: "#ededed",
  black: "#111111",
  bgLight: "#1a1a1a",
};
