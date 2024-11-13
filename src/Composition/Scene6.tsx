import { AbsoluteFill, Img } from 'remotion';
import { z } from 'zod';
import { BackgroundProps } from '../backgrounds';
import { Background } from '../components/Background';
import Overlay from '../components/Overlay';
import AnimatedLogo from '../components/AnimatedLogo';
import { TitleTextFromRight } from '../components/animations/TitleTextFromRight';
import { useTextSplitter } from '../lib/useTextSplitter';
import { FC } from 'react';

export const scene6Schema = z.object({
  logo: z.string(),
  img: z.string(),
  title1: z.string(),
  title2: z.string(),
});

type Scene6Props = z.infer<typeof scene6Schema> & { background: BackgroundProps };

const Scene6: React.FC<Scene6Props> = (props) => {
  const title1Split = useTextSplitter({
    text: props.title1.toUpperCase(),
    fontSize: 90,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 2,
    maxWidth: 600,
  });

  const title2Split = useTextSplitter({
    text: props.title2.toUpperCase(),
    fontSize: 90,
    fontWeight: '600',
    letterSpacing: '6px',
    maxLines: 2,
    maxWidth: 600,
  });

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

        <AbsoluteFill
          style={{
            ...title1Split.style,
            color: 'white',
            width: 600,
            zIndex: 5,
          }}
        >
          <TitleTextFromRight text={title1Split.text} startAt={50} align="left" />
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene6;
