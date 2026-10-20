import { Composition } from "remotion";
import { MiVideo } from "./MiVideo";
import { getTimeline } from "./MiVideo/shots";

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MiVideo"
      component={MiVideo}
      durationInFrames={getTimeline(FPS).durationInFrames}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
