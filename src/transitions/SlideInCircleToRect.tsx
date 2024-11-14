import type { TransitionPresentationComponentProps } from '@remotion/transitions';
import type { TransitionPresentation } from '@remotion/transitions';
import React, { useMemo } from 'react';
import { AbsoluteFill, interpolate } from 'remotion';
import ExpandingDiamondShape from '../components/ExpandingDiamondShape';

export type CustomShapeChangeProps = {
  width: number;
  height: number;
  direction: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none';
};

const ExpandingDiamondTransition: React.FC<
  TransitionPresentationComponentProps<CustomShapeChangeProps>
> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const { width, height, direction = 'none' } = passedProps;

  // Unique clip path IDs for each SVG
  const [clipId1, clipId2, clipId3] = useMemo(
    () => [`clip-${Math.random()}`, `clip-${Math.random()}`, `clip-${Math.random()}`],
    []
  );

  // Calculate size and border radius
  const size = useMemo(() => Math.sqrt(width ** 2 + height ** 2), [width, height]);
  const borderRadius = size / 5;

  let from1, from2, from3;

  switch (direction) {
    case 'bottom-left':
      from1 = height;
      from2 = height + 300;
      from3 = height + 1000;
      break;

    case 'bottom-right':
      from1 = height;
      from2 = height + 300;
      from3 = height + 1000;
      break;

    case 'top-left':
      from1 = -height * 2;
      from2 = -height * 2 - 300;
      from3 = -height * 2 - 1000;
      break;

    case 'top-left':
      from1 = -height * 2;
      from2 = -height * 2 - 300;
      from3 = -height * 2 - 1000;
      break;

    default:
      from1 = height;
      from2 = height + 300;
      from3 = height + 1000;
      break;
  }

  // Calculate translateY for each shape
  const translateY1 = interpolate(presentationProgress, [0, 0.5], [from1, -height / 2], {
    extrapolateRight: 'clamp',
  });
  const translateY2 = interpolate(presentationProgress, [0, 0.5], [from2, -height / 2], {
    extrapolateRight: 'clamp',
  });
  const translateY3 = interpolate(presentationProgress, [0, 0.5], [from3, -height / 2], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      {presentationDirection === 'exiting' && (
        <AbsoluteFill>
          <ExpandingDiamondShape
            width={width}
            height={height}
            frame={presentationProgress}
            direction={direction}
          >
            {children}
          </ExpandingDiamondShape>
        </AbsoluteFill>
      )}

      <AbsoluteFill style={{ clipPath: `url(#${clipId1})` }}>
        {presentationDirection === 'entering' && children}
        <svg width="100%" height="100%">
          <defs>
            <clipPath id={clipId1}>
              <rect
                x={width / 2 - size / 4 + translateY1}
                y={translateY1}
                width={size}
                height={size}
                rx={borderRadius}
                ry={borderRadius}
                transform={`rotate(45, ${width / 2}, ${height / 2})`}
              />
            </clipPath>
          </defs>
        </svg>
      </AbsoluteFill>

      <AbsoluteFill style={{ clipPath: `url(#${clipId2})`, zIndex: 1 }}>
        {presentationDirection === 'exiting' && children}
        <svg width="100%" height="100%">
          <defs>
            <clipPath id={clipId2}>
              <rect
                x={width / 2 - size / 4 + translateY2}
                y={translateY2}
                width={size}
                height={size}
                rx={borderRadius}
                ry={borderRadius}
                transform={`rotate(45, ${width / 2}, ${height / 2})`}
              />
            </clipPath>
          </defs>
        </svg>
      </AbsoluteFill>

      <AbsoluteFill style={{ clipPath: `url(#${clipId3})`, zIndex: 1 }}>
        {presentationDirection === 'entering' && children}
        <svg width="100%" height="100%">
          <defs>
            <clipPath id={clipId3}>
              <rect
                x={width / 2 - size / 4 + translateY3}
                y={translateY3}
                width={size}
                height={size}
                rx={borderRadius}
                ry={borderRadius}
                transform={`rotate(45, ${width / 2}, ${height / 2})`}
              />
            </clipPath>
          </defs>
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default ExpandingDiamondTransition;

export const customExpandingDiamondTransition = (
  props: CustomShapeChangeProps
): TransitionPresentation<CustomShapeChangeProps> => {
  return { component: ExpandingDiamondTransition, props };
};
