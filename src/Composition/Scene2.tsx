import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

import { z } from 'zod';
import Image from '../components/Image';
import { BackgroundProps } from '../backgrounds';
import { useTextSplitter } from '../lib/useTextSplitter';
import { HEIGHT, WIDTH } from '../lib/consts';
import { TitleTextFromRight } from '../components/animations/TitleTextFromRight';
import ExpandingDiamondShape from '../components/ExpandingDiamondShape';
import AnimatedLogo from '../components/AnimatedLogo';
import DiagonalSweep from '../components/DiagonalSweep';

export const scene2Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title: z.string(),
});
type Scene2Props = z.infer<typeof scene2Schema> & { background: BackgroundProps };

const Scene2: React.FC<Scene2Props> = (props) => {
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
        direction={'bottom-right'}
      >
        <DiagonalSweep masks={[{ width: 300, start: [1920, 1080], end: [0, 0] }]}>
          <Image img={props.img} />
        </DiagonalSweep>
      </ExpandingDiamondShape>
      <AbsoluteFill
        style={{
          left: WIDTH * 0.5,
          top: HEIGHT * 0.55,
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
          top: HEIGHT * 0.68,
          width: 600,
          zIndex: 5,
        }}
      >
        <TitleTextFromRight text={titleSplit.text} startAt={50} align="right" />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene2;
