import { AbsoluteFill, Img } from 'remotion';
import { z } from 'zod';
import { Background } from '../components/Background';
import { BackgroundProps } from '../backgrounds';
import Overlay from '../components/Overlay';
import AnimatedLogo from '../components/AnimatedLogo';

export const scene1Schema = z.object({
  logo: z.string(),
  img: z.string(),
});
type Scene1Props = z.infer<typeof scene1Schema> & { background: BackgroundProps };

const Scene1: React.FC<Scene1Props> = (props) => {
  return (
    <AbsoluteFill>
      <Background {...props.background} />
      <AbsoluteFill>
        <Img src={props.img} />
      </AbsoluteFill>
      <Overlay />
      <AbsoluteFill
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translate(-15%,-25%)',
        }}
      >
        <AnimatedLogo />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene1;
