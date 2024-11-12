import { spring, useCurrentFrame } from 'remotion';

const AnimatedLogo = () => {
  const frame = useCurrentFrame();

  const topAnimationProgress = spring({
    frame: frame - 20,
    fps: 50,
    from: -50, // Start position (off-screen)
    to: 50, // End position (centered on the arc)
    config: {
      damping: 15,
    },
  });

  const bottomAnimationProgress = spring({
    frame: frame - 20,
    fps: 50,
    from: 150, // Start position (off-screen)
    to: 50, // End position (centered on the arc)
    config: {
      damping: 15,
    },
  });

  const centerCircleAnimationProgress = spring({
    frame: frame - 10,
    fps: 50,
    from: -200, // Start from off-screen above
    to: 0, // End at its intended position
    config: { damping: 12 },
  });

  const scaleAnimationProgress = spring({
    frame: frame - 10,
    fps: 50,
    from: 0, // Start from off-screen above
    to: 1, // End at its intended position
    config: { damping: 12 },
  });

  return (
    <div
      style={{
        position: 'relative',
        opacity: scaleAnimationProgress,
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
        <div style={{ color: 'white', fontSize: '100px', opacity: scaleAnimationProgress }}>
          USA
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
