import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND, COLORS, FONT_FAMILY } from "./brand";

const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

export const InstagramIcon: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect
        x={2}
        y={2}
        width={20}
        height={20}
        rx={6}
        stroke={color}
        strokeWidth={2}
      />
      <circle cx={12} cy={12} r={4.5} stroke={color} strokeWidth={2} />
      <circle cx={17.5} cy={6.5} r={1.3} fill={color} />
    </svg>
  );
};

// Gráfico de apertura: visible 0–0,5 s y fundido de 0,3 s (estilo.md §4).
export const OpeningGraphic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0.5 * fps, 0.8 * fps], [1, 0], clamp);
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 72,
          color: COLORS.red,
          opacity,
          letterSpacing: 2,
          // Centro en y = 948 px, como el sombrero de la referencia.
          marginTop: 2 * (948 - 960),
        }}
      >
        {BRAND.wordmark}
      </div>
    </AbsoluteFill>
  );
};

// Marca de agua: arriba a la derecha hasta switchAt, luego abajo a la izquierda.
export const Watermark: React.FC<{ switchAt: number; hideAt: number }> = ({
  switchAt,
  hideAt,
}) => {
  const frame = useCurrentFrame();
  if (frame >= hideAt) {
    return null;
  }
  const topRight = frame < switchAt;
  return (
    <div
      style={{
        position: "absolute",
        ...(topRight
          ? { top: 150, right: 60, alignItems: "flex-end" }
          : { top: 1440, left: 30, alignItems: "flex-start" }),
        display: "flex",
        flexDirection: "column",
        gap: 6,
        opacity: 0.8,
      }}
    >
      <InstagramIcon size={30} color="white" />
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          color: "white",
          letterSpacing: 1,
        }}
      >
        {BRAND.handle}
      </div>
    </div>
  );
};

// Bloque de título centrado (estilo.md §4).
export const TitleBlock: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        opacity,
        fontFamily: FONT_FAMILY,
        color: COLORS.cream,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 40, lineHeight: 1 }}>{BRAND.titleSmall}</div>
      <div style={{ fontSize: 122, lineHeight: 1.05 }}>{BRAND.titleBig}</div>
    </AbsoluteFill>
  );
};

// Título sobre la mesa vacía: fundido de 0,2 s.
export const TitleFadeIn: React.FC<{ startSec: number }> = ({ startSec }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(
    frame,
    [startSec * fps, (startSec + 0.2) * fps],
    [0, 1],
    clamp,
  );
  return <TitleBlock opacity={opacity} />;
};

// Cierre: fondo oscurecido un 58 %, título al 25 %, logo de Instagram y usuario.
export const EndCardOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const darken = interpolate(frame, [0, 0.2 * fps], [0, 0.58], clamp);
  const titleOpacity = interpolate(frame, [0, 0.2 * fps], [1, 0.25], clamp);
  const handleOpacity = interpolate(
    frame,
    [0.4 * fps, 0.5 * fps],
    [0, 1],
    clamp,
  );
  const iconColor = interpolateColors(
    frame,
    [0.6 * fps, 1.2 * fps, 1.8 * fps, 2.4 * fps, 2.9 * fps],
    ["#FFFFFF", "#F56040", "#C13584", "#833AB4", "#FFFFFF"],
  );
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: "black", opacity: darken }} />
      <TitleBlock opacity={titleOpacity} />
      <div
        style={{
          position: "absolute",
          top: 935 - 45,
          left: 540 - 45,
        }}
      >
        <InstagramIcon size={90} color={iconColor} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1040,
          width: "100%",
          textAlign: "center",
          fontFamily: FONT_FAMILY,
          fontSize: 22,
          color: "white",
          opacity: handleOpacity,
          letterSpacing: 1,
        }}
      >
        {BRAND.handle}
      </div>
    </AbsoluteFill>
  );
};
