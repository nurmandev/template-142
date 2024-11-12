import { AbsoluteFill } from 'remotion';

import { z } from 'zod';
import Image from '../components/Image';
import { BackgroundProps } from '../backgrounds';

export const scene4Schema = z.object({
  logo: z.string(),
  img: z.string(),
});

type Scene4Props = z.infer<typeof scene4Schema> & {
  background: BackgroundProps;
};

const Scene4: React.FC<Scene4Props> = (props) => {
  return (
    <AbsoluteFill>
      <Image img={props.img} />
    </AbsoluteFill>
  );
};

export default Scene4;
