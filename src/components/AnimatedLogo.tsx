import { Easing, interpolate, useCurrentFrame } from 'remotion';

const AnimatedLogo = ({ scale = 1 }) => {
  const frame = useCurrentFrame();

  const topAnimationProgress = interpolate(
    frame,
    [20, 45], // Animation duration frames
    [-25, 50], // Movement from -50px (off-screen) to 50px (centered)
    { extrapolateRight: 'clamp', easing: Easing.out(Easing.ease) }
  );

  // Interpolate for the bottom arc animation
  const bottomAnimationProgress = interpolate(
    frame,
    [20, 45], // Animation duration frames
    [175, 50], // Movement from 150px (off-screen) to 50px (centered)
    { extrapolateRight: 'clamp', easing: Easing.out(Easing.ease) }
  );

  // Interpolate for the center circle vertical translation
  const centerCircleAnimationProgress = interpolate(
    frame,
    [10, 40], // Animation frames delayed slightly compared to top/bottom arcs
    [-200, 0], // Movement from -200px (off-screen) to 0px (centered)
    { extrapolateRight: 'clamp' }
  );

  // Interpolate for the center circle scale
  const scaleAnimationProgress = interpolate(
    frame,
    [10, 40], // Scale animation frame range
    [0, 1], // Scaling from 0 to 1 (full size)
    { extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        position: 'relative',
        opacity: scaleAnimationProgress,
        transform: `scale(${scale})`,
      }}
    >
      <svg width="500" height="600" style={{ position: 'absolute', top: 0 }}>
        {/* Define paths for the text */}
        <defs>
          <path id="topArc" d="M 50,250 A 200,200 0 0,1 450,250" />
          <path id="bottomArc" d="M 10,300 A 210,210 0 0,0 490,300" />
        </defs>

        {/* Text following the top arc */}
        <text fill="#ff0000" fontSize="60" fontWeight="bold">
          <textPath href="#topArc" textAnchor="middle" startOffset={`${topAnimationProgress}%`}>
            COUNTRY
          </textPath>
        </text>

        {/* Text following the bottom arc */}
        <text fill="#ff0000" fontSize="60" fontWeight="bold" letterSpacing="8px" wordSpacing="10px">
          <textPath
            href="#bottomArc"
            textAnchor="middle"
            startOffset={`${bottomAnimationProgress}%`}
          >
            OVER PARTY
          </textPath>
        </text>
      </svg>

      {/* Circle and center text */}
      <div
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          backgroundColor: '#001662',
          position: 'absolute',
          top: 70,
          left: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
          fontSize: '120px',
          fontWeight: '800',
          transform: `translateY(${centerCircleAnimationProgress}px)`,
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="white"
          opacity={scaleAnimationProgress}
        >
          <polygon points="12,2 15,9 22,9 17,13 19,20 12,16 5,20 7,13 2,9 9,9" />
        </svg>
        <div
          style={{
            backgroundColor: '#001662',
            padding: '0 10px',
            borderRadius: 10,
            transform: `scale(${scaleAnimationProgress})`,
          }}
        >
          McGRATH
        </div>
        <div
          style={{
            color: 'white',
            fontSize: '90px',
            fontWeight: '600',
            opacity: scaleAnimationProgress,
          }}
        >
          USA
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
