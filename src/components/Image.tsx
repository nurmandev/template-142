import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface ImageProps {
  img: string;
}

const Image = ({ img }: ImageProps) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Using interpolate for translate animation
  const translateY = interpolate(
    frame,
    [0, 30], // Starting at frame 0 and ending at frame 30
    [100, 0], // From -200px (off-screen) to 0px (in position)
    { extrapolateRight: 'clamp' } // Prevents the value from exceeding the final position
  );

  // Using interpolate for scale animation
  const scale = interpolate(
    frame,
    [30, durationInFrames], // Starting at frame 0 and ending at frame 30
    [1.1, 1.3], // Scaling from 1 to 1.5
    { extrapolateRight: 'clamp' } // Clamps scale at 1.5
  );

  return (
    <Img
      src={img}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% top',
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    />
  );
};

export default Image;
