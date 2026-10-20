import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Pendiente de confirmar: usuario de Instagram.
export const BRAND = {
  wordmark: "NOKO",
  titleSmall: "NOW SERVING",
  titleBig: "MONO TITI",
  handle: "@NOKO",
};

// Colores medidos en el vídeo de referencia (estilo.md §4).
export const COLORS = {
  cream: "#F7D5BC",
  red: "#C0392B",
};

export const FONT_FAMILY = "Bowlby One";

loadFont({
  family: FONT_FAMILY,
  url: staticFile("fonts/bowlby-one-latin-400-normal.woff2"),
});
