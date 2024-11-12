import { AbsoluteFill } from 'remotion';
import { z } from 'zod';
import { BackgroundProps } from '../backgrounds';
import Image from '../components/Image';

export const scene5Schema = z.object({
  logo: z.string(),
  img: z.string(),
});

type Scene5Props = z.infer<typeof scene5Schema> & { background: BackgroundProps };

const Scene5: React.FC<Scene5Props> = (props) => {
  return (
    <AbsoluteFill>
      <Image img={props.img} />
    </AbsoluteFill>
  );
};

export default Scene5;
