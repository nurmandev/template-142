import { Easing, interpolate, useCurrentFrame } from 'remotion';

export const TitleTextFromRight = ({
  text,
  startAt = 0,
  align = 'left',
}: {
  text: string;
  startAt?: number;
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}) => {
  const frame = useCurrentFrame();
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, lineIndex) => (
        <p
          key={lineIndex}
          style={{
            margin: 0,
            letterSpacing: 5,
            position: 'relative',
            whiteSpace: 'nowrap',
            textAlign: align,
          }}
        >
          {line.split('').map((char, charIndex) => {
            const delay = 3;
            const startFrame = startAt + charIndex * delay;
            const opacity = interpolate(frame, [startFrame, startFrame + delay + 2], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.out(Easing.ease),
            });

            return (
              <span
                key={`char-${lineIndex}-${charIndex}`}
                style={{
                  opacity,
                }}
              >
                {char}
              </span>
            );
          })}
          {lineIndex < lines.length - 1 && <br />}
        </p>
      ))}
    </>
  );
};
