import { AbsoluteFill } from 'remotion';

import { z } from 'zod';
import Image from '../components/Image';
import { BackgroundProps } from '../backgrounds';

export const scene2Schema = z.object({
  logo: z.string(),
  img: z.string(),
});
type Scene2Props = z.infer<typeof scene2Schema> & { background: BackgroundProps };

const Scene2: React.FC<Scene2Props> = (props) => {
  return (
    <AbsoluteFill>
      <Image img={props.img} />
    </AbsoluteFill>
  );
};

export default Scene2;
