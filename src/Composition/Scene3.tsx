import { AbsoluteFill } from 'remotion';
import { z } from 'zod';
import Image from '../components/Image';
import { BackgroundProps } from '../backgrounds';

export const scene3Schema = z.object({
  logo: z.string(),
  img: z.string(),
});
type Scene3Props = z.infer<typeof scene3Schema> & { background: BackgroundProps };

const Scene3: React.FC<Scene3Props> = (props) => {
  return (
    <AbsoluteFill>
      <Image img={props.img} />
    </AbsoluteFill>
  );
};

export default Scene3;
