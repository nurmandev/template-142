import React, { PropsWithChildren } from 'react';
import { AbsoluteFill, Easing, interpolate } from 'remotion';

export type CustomShapeChangeProps = {
  size: number;
  frame: number;
  centerX: number;
  centerY: number;
  clips: { color?: string; delay: number }[];
};

const Clip: React.FC<PropsWithChildren<CustomShapeChangeProps>> = ({
  children,
  size,
  frame,
  centerX,
  centerY,
  clips,
}) => {
  // Calculate the maximum size that the diamond should reach
  const borderRadius = size / 4;

  const opacity = interpolate(frame, [0, 0.1], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.ease),
  });
  return (
    <AbsoluteFill>
      {clips.map((clip) => {
        const clipId = `clip-${Math.random()}`;

        const animatedSize = interpolate(frame, [clip.delay, 1], [size / 5, size], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.ease),
        });
        return (
          <AbsoluteFill
            key={clipId}
            style={{
              clipPath: `url(#${clipId})`,
              background: clip.color || 'none',
              zIndex: 2,
              opacity,
            }}
          >
            {!clip.color && children}
            <svg width="100%" height="100%">
              <defs>
                <clipPath id={clipId}>
                  <rect
                    x={centerX - animatedSize / 2}
                    y={centerY - animatedSize / 2}
                    width={animatedSize}
                    height={animatedSize}
                    rx={borderRadius}
                    ry={borderRadius}
                    transform={`rotate(45, ${centerX}, ${centerY})`}
                  />
                </clipPath>
              </defs>
            </svg>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};

export default Clip;
