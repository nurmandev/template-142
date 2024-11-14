import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';
import Image from '../components/Image';
import { BackgroundProps } from '../backgrounds';
import ExpandingDiamondShape from '../components/ExpandingDiamondShape';
import { HEIGHT, WIDTH } from '../lib/consts';
import { useTextSplitter } from '../lib/useTextSplitter';
import { TitleTextFromRight } from '../components/animations/TitleTextFromRight';
import AnimatedLogo from '../components/AnimatedLogo';
import DiagonalSweep from '../components/DiagonalSweep';

export const scene4Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title: z.string(),
});
type Scene4Props = z.infer<typeof scene4Schema> & { background: BackgroundProps };

const Scene4: React.FC<Scene4Props> = (props) => {
  const frame = useCurrentFrame();
  const titleSplit = useTextSplitter({
    text: props.title.toUpperCase(),
    fontSize: 90,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 2,
    maxWidth: 600,
  });

  const animateFrame = interpolate(frame, [0, 50], [0, 1], {
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill>
      <ExpandingDiamondShape
        width={WIDTH}
        height={HEIGHT}
        frame={animateFrame}
        direction={'top-right'}
      >
        <DiagonalSweep masks={[{ width: 300, start: [1920, 0], end: [0, 1080] }]}>
          <Image img={props.img} />
        </DiagonalSweep>
      </ExpandingDiamondShape>

      <AbsoluteFill
        style={{
          left: WIDTH * 0.4,
          top: HEIGHT * 0.35,
          zIndex: 5,
        }}
      >
        <AnimatedLogo scale={0.2} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          ...titleSplit.style,
          color: 'white',
          left: WIDTH * 0.67,
          top: HEIGHT * 0.05,
          width: 600,
          zIndex: 5,
        }}
      >
        <TitleTextFromRight text={titleSplit.text} startAt={50} align="right" />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene4;
