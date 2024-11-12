import { AbsoluteFill, Img } from 'remotion';
import { z } from 'zod';
import Circle from '../components/Circle';
import { BackgroundProps } from '../backgrounds';
import { Background } from '../components/Background';
import Overlay from '../components/Overlay';
import AnimatedLogo from '../components/AnimatedLogo';

export const scene6Schema = z.object({
  logo: z.string(),
  img: z.string(),
});

type Scene6Props = z.infer<typeof scene6Schema> & { background: BackgroundProps };

const Scene6: React.FC<Scene6Props> = (props) => {
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

export default Scene6;
