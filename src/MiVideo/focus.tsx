import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { FocusKeyframe } from "./shots";

// Desenfoque del fondo de la referencia (plano 3): el objeto nítido y todo lo
// demás desenfocado. Debajo, el plano entero desenfocado; encima, el plano
// nítido recortado con una elipse de borde suave que sigue al objeto.
const BLUR_PX = 16;
// La elipse se dibuja algo más grande que el objeto y se funde hacia fuera.
const MASK_SCALE = 0.62;
const MASK_SOLID = "62%";

export const FocusedVideo: React.FC<{
  src: string;
  trimBefore: number;
  filter: string;
  keyframes: FocusKeyframe[];
}> = ({ src, trimBefore, filter, keyframes }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const times = keyframes.map((k) => k.t * fps);
  const at = (key: "cx" | "cy" | "w" | "h") =>
    interpolate(
      frame,
      times,
      keyframes.map((k) => k[key]),
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
    );
  const mask = `radial-gradient(ellipse ${at("w") * MASK_SCALE}% ${
    at("h") * MASK_SCALE
  }% at ${at("cx")}% ${at("cy")}%, black ${MASK_SOLID}, transparent 100%)`;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Video
          src={src}
          trimBefore={trimBefore}
          muted
          // Escalado para que el borde del desenfoque no deje marco.
          style={{ filter: `${filter} blur(${BLUR_PX}px)`, scale: "1.06" }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ maskImage: mask, WebkitMaskImage: mask }}>
        <Video src={src} trimBefore={trimBefore} muted style={{ filter }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
