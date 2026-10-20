import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  Freeze,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { FocusedVideo } from "./focus";
import {
  EndCardOverlay,
  OpeningGraphic,
  TitleFadeIn,
  Watermark,
} from "./overlays";
import { getTimeline, TITLE_IN_FINAL_SHOT, type ShotType } from "./shots";

const SOURCE = staticFile("mivideo.mp4");

// Etalonado por tipo de plano (estilo.md §8). contrast + brightness levanta los
// negros a ~25 (luma) sin bajar los blancos; el producto se desatura hasta la
// saturación de la referencia y se calienta un poco con sepia.
// Filtros CSS en lugar de @remotion/effects: no necesitan GPU al renderizar.
const GRADE: Record<ShotType, string> = {
  A: "contrast(0.9) brightness(1.06) saturate(0.95)",
  B: "contrast(0.9) brightness(1.06) saturate(0.55) sepia(0.08)",
};

export const MiVideo: React.FC = () => {
  const { fps } = useVideoConfig();
  const { shots, endCard } = getTimeline(fps);
  const finalShot = shots[shots.length - 1];
  const lastSourceFrame = Math.round(
    finalShot.srcStart * fps + finalShot.durationInFrames - 1,
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {shots.map((shot) => (
        <Sequence
          key={shot.name}
          name={shot.name}
          from={shot.from}
          durationInFrames={shot.durationInFrames}
        >
          {shot.focus ? (
            <FocusedVideo
              src={SOURCE}
              trimBefore={Math.round(shot.srcStart * fps)}
              filter={GRADE[shot.type]}
              keyframes={shot.focus}
            />
          ) : (
            <Video
              src={SOURCE}
              trimBefore={Math.round(shot.srcStart * fps)}
              muted
              style={{ filter: GRADE[shot.type] }}
            />
          )}
        </Sequence>
      ))}

      <Sequence
        name="Título"
        from={finalShot.from}
        durationInFrames={finalShot.durationInFrames}
      >
        <TitleFadeIn startSec={TITLE_IN_FINAL_SHOT} />
      </Sequence>

      <Sequence
        name="Cierre"
        from={endCard.from}
        durationInFrames={endCard.durationInFrames}
      >
        <Freeze frame={0}>
          <Video
            src={SOURCE}
            trimBefore={lastSourceFrame}
            muted
            style={{ filter: `${GRADE.B} saturate(0.2)` }}
          />
        </Freeze>
        <EndCardOverlay />
      </Sequence>

      <Sequence
        name="Gráfico de apertura"
        durationInFrames={Math.round(0.8 * fps)}
      >
        <OpeningGraphic />
      </Sequence>

      <Watermark switchAt={Math.round(8.6 * fps)} hideAt={endCard.from} />
    </AbsoluteFill>
  );
};
