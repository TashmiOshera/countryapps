import React from 'react';

// Single animated star component
const AnimatedStar = ({ index }) => {
  // Randomize initial position, size, duration, and animation delays
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const size = Math.random() * 2 + 1;
  const driftX = Math.random() * 12 - 6; // -6 to +6 px
  const driftY = Math.random() * 10 - 5; // -5 to +5 px
  const duration = Math.random() * 3 + 3; // 3s to 6s
  const delay = Math.random() * 3; // 0s to 3s
  const pulse = Math.random() * 0.5 + 0.75; // 0.75 to 1.25

  return (
    <span
      className="absolute rounded-full bg-white opacity-70 animate-star-twinkle"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s, ${duration * 1.2}s, ${duration * 1.5}s`,
        animationDelay: `${delay}s, ${delay / 2}s, ${delay / 3}s`,
        animationName: `star-twinkle, star-drift-${index}, star-pulse-${index}`,
        zIndex: 1,
      }}
    />
  );
};

// Generate unique keyframes for each star's drift and pulse
const StarFieldStyles = Array.from({ length: 70 }).map((_, i) => {
  const driftX = Math.random() * 12 - 6;
  const driftY = Math.random() * 10 - 5;
  const pulse = Math.random() * 0.5 + 0.75;
  return `
    @keyframes star-drift-${i} {
      0% { transform: translate(0, 0); }
      100% { transform: translate(${driftX}px, ${driftY}px); }
    }
    @keyframes star-pulse-${i} {
      0%, 100% { transform: scale(1);}
      50% { transform: scale(${pulse});}
    }
  `;
}).join('\n');

const StarField = ({ count = 70 }) => (
  <>
    <style>{`
      @keyframes star-twinkle {
        0%, 100% { opacity: 0.7;}
        50% { opacity: 0.2;}
      }
      ${StarFieldStyles}
    `}</style>
    <div className="absolute inset-0 pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => (
        <AnimatedStar key={i} index={i} />
      ))}
    </div>
  </>
);

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-start overflow-hidden"
      style={{ backgroundImage: "url('/images/Home1.png')" }}
    >
      {/* Animated Star Field */}
      <StarField count={70} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none z-10" />

      {/* Main Content */}
      <div className="z-20 flex flex-col items-center w-full mt-24 md:mt-32 relative">
        {/* Animated Heading */}
        <h1
          className="text-6xl md:text-7xl font-extrabold text-white tracking-tight text-center mb-4 drop-shadow-xl font-mono animate-fadeInDown"
          style={{
            letterSpacing: "0.04em",
            fontFamily: "'Montserrat', 'Poppins', 'Segoe UI', 'Arial', sans-serif"
          }}
        >
          <span className="inline-block align-middle mr-3 text-7xl md:text-8xl animate-bounce-slow">🌍</span>
          Country Explorer
        </h1>
        {/* Subheading */}
        <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-8 text-center max-w-2xl animate-fadeInUp delay-200">
          Explore the world’s countries by name, region, or language.<br />
          Begin your journey of discovery and inspiration.
        </p>
        {/* Animated CTA Button - moved further down, still centered */}
        <div className="flex justify-center w-full mt-20">
          <a
            href="#explore"
            className="inline-block rounded-full px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 hover:from-blue-600 hover:to-pink-500 text-white text-lg font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300 animate-glow"
          >
            Explore Now
          </a>
        </div>
        {/* Tagline with fade-in */}
        <div className="mt-10 text-white/60 text-base text-center italic animate-fadeInUp delay-500">
          Where will your curiosity take you today?
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-18px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 18px 4pxrgb(222, 173, 199), 0 0 0 0 #fff0;}
          50% { box-shadow: 0 0 32px 10pxrgb(177, 170, 199), 0 0 0 0 #fff0;}
          100% { box-shadow: 0 0 18px 4px #f472b6, 0 0 0 0 #fff0;}
        }
        .animate-glow {
          animation: glow 2.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Home;
