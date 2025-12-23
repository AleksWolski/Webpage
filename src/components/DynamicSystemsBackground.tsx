import React from 'react';

const DynamicSystemsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-40" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-primary/30 rotate-45 animate-float animation-delay-200 opacity-30" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float animation-delay-400" />
      <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-accent/20 rounded-lg animate-float animation-delay-600 opacity-40" />
      
      {/* SVG curves representing dynamic systems / signal flow */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(186 100% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(186 100% 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(186 100% 50%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(200 100% 45%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(200 100% 45%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(200 100% 45%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Sinusoidal curves representing continuous-time signals */}
        <path
          d="M0,400 Q150,300 300,400 T600,400 T900,400 T1200,400"
          fill="none"
          stroke="url(#curveGradient1)"
          strokeWidth="2"
          className="animate-pulse-glow"
        />
        <path
          d="M0,350 Q200,250 400,350 T800,350 T1200,350"
          fill="none"
          stroke="url(#curveGradient2)"
          strokeWidth="1.5"
          className="animate-pulse-glow animation-delay-400"
        />
        <path
          d="M0,450 Q100,550 200,450 T400,450 T600,450 T800,450 T1000,450 T1200,450"
          fill="none"
          stroke="url(#curveGradient1)"
          strokeWidth="1"
          className="animate-pulse-glow animation-delay-800"
          opacity="0.6"
        />
        
        {/* Data points */}
        <circle cx="300" cy="400" r="4" fill="hsl(186 100% 50%)" opacity="0.5" className="animate-pulse-glow" />
        <circle cx="600" cy="400" r="4" fill="hsl(186 100% 50%)" opacity="0.5" className="animate-pulse-glow animation-delay-200" />
        <circle cx="900" cy="400" r="4" fill="hsl(186 100% 50%)" opacity="0.5" className="animate-pulse-glow animation-delay-400" />
      </svg>
    </div>
  );
};

export default DynamicSystemsBackground;
