import React, { PropsWithChildren, useMemo } from 'react';
import { AbsoluteFill, Easing, interpolate } from 'remotion';
import Clip from './Cilp';

export type CustomShapeChangeProps = {
  width: number;
  height: number;
  frame: number;
  direction: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none';
};

const ExpandingDiamondShape: React.FC<PropsWithChildren<CustomShapeChangeProps>> = ({
  children,
  width,
  height,
  frame,
  direction,
}) => {
  const fillColor = '#bb0050';
  const gradientColor = 'linear-gradient(180deg, #79005e 50%, #16135e 100%)';

  // Calculate the maximum size that the diamond should reach
  const size = useMemo(() => Math.min(width, height), [width, height]);
  let centerX1,
    centerX2,
    centerX3,
    centerX4,
    centerX5,
    centerX6,
    centerY1,
    centerY2,
    centerY3,
    centerY4,
    centerY5,
    centerY6;

  switch (direction) {
    case 'bottom-right':
      centerX1 = width - size / 3.5;
      centerX2 = width - size / 6;
      centerX3 = -size / 7;
      centerX4 = -size / 5;
      centerX5 = width - size / 4.5;
      centerX6 = width - size / 4.5;
      centerY1 = height;
      centerY2 = height;
      centerY3 = -size / 7;
      centerY4 = -size / 5;
      centerY5 = -size / 2.5;
      centerY6 = -size / 2;
      break;

    case 'bottom-left':
      centerX1 = size / 3.5;
      centerX2 = size / 6;
      centerX3 = width + size / 7;
      centerX4 = width + size / 7;
      centerX5 = size / 6;
      centerX6 = size / 7;
      centerY1 = height;
      centerY2 = height;
      centerY3 = -size / 7;
      centerY4 = -size / 4;
      centerY5 = -size / 2.5;
      centerY6 = -size / 2;
      break;

    case 'top-right':
      centerX1 = width - size / 3.5;
      centerX2 = width - size / 6;
      centerX3 = -size / 7;
      centerX4 = -size / 7;
      centerX5 = width - size / 4;
      centerX6 = width - size / 4;
      centerY1 = height / 8 - size / 8;
      centerY2 = height / 8 - size / 8;
      centerY3 = height + size / 7;
      centerY4 = height + size / 4;
      centerY5 = height + size / 2.5;
      centerY6 = height + size / 2;
      break;

    case 'top-left':
      centerX1 = size / 3.5;
      centerX2 = size / 6;
      centerX3 = width + size / 7;
      centerX4 = width + size / 7;
      centerX5 = size / 6;
      centerX6 = size / 6;
      centerY1 = -height + size;
      centerY2 = -height + size;
      centerY3 = height + size / 9;
      centerY4 = height + size / 5;
      centerY5 = height + size / 2.5;
      centerY6 = height + size / 2;
      break;

    case 'none':
      centerX1 = -height * 10;
      centerX2 = -height * 10;
      centerX3 = -height * 10;
      centerX4 = -height * 10;
      centerX5 = -height * 10;
      centerX6 = -height * 10;
      centerY1 = -height * 10;
      centerY2 = -height * 10;
      centerY3 = -height * 10;
      centerY4 = -height * 10;
      centerY5 = -height * 10;
      centerY6 = -height * 10;
      break;

    default:
      centerX1 = 0;
      centerX2 = 0;
      centerX3 = 0;
      centerX4 = 0;
      centerX5 = 0;
      centerX6 = 0;
      centerY1 = 0;
      centerY2 = 0;
      centerY3 = 0;
      centerY4 = 0;
      centerY5 = 0;
      centerY6 = 0;
      break;
  }

  return (
    <AbsoluteFill>
      <AbsoluteFill>{children}</AbsoluteFill>
      <Clip
        centerX={centerX1}
        centerY={centerY1}
        frame={frame}
        size={size}
        clips={[{ color: fillColor, delay: 0.1 }, { delay: 0.2 }, { color: fillColor, delay: 0.3 }]}
      >
        {children}
      </Clip>
      <Clip
        centerX={centerX2}
        centerY={centerY2}
        frame={frame}
        size={size}
        clips={[
          { color: gradientColor, delay: 0.4 },
          { color: fillColor, delay: 0.5 },
          { color: gradientColor, delay: 0.6 },
        ]}
      >
        {children}
      </Clip>
      <Clip
        centerX={centerX3}
        centerY={centerY3}
        frame={frame}
        size={size}
        clips={[{ color: fillColor, delay: 0.1 }, { delay: 0.2 }, { color: fillColor, delay: 0.3 }]}
      >
        {children}
      </Clip>
      <Clip
        centerX={centerX4}
        centerY={centerY4}
        frame={frame}
        size={size}
        clips={[
          { color: '#16135e', delay: 0.4 },
          { color: fillColor, delay: 0.5 },
          { color: '#16135e', delay: 0.6 },
        ]}
      >
        {children}
      </Clip>
      <Clip
        centerX={centerX5}
        centerY={centerY5}
        frame={frame}
        size={size}
        clips={[
          { color: '#16135eb5', delay: 0.1 },
          { delay: 0.2 },
          { color: '#16135eb5', delay: 0.3 },
        ]}
      >
        {children}
      </Clip>
      <Clip
        centerX={centerX6}
        centerY={centerY6}
        frame={frame}
        size={size}
        clips={[{ color: '#16135e', delay: 0.1 }, { delay: 0.2 }, { color: '#16135e', delay: 0.3 }]}
      >
        {children}
      </Clip>
    </AbsoluteFill>
  );
};

export default ExpandingDiamondShape;
