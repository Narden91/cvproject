import React, { useState, useEffect, useCallback, useRef } from 'react';
import './InteractiveAiBackground.css';

interface Particle {
  id: string;
  x: number;
  y: number;
  radius: number;
  opacity: number;
  vx: number; // velocity x
  vy: number; // velocity y
}

interface Ripple {
  id: string;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  createdAt: number;
}

const InteractiveAiBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const generateParticle = useCallback((x?: number, y?: number): Particle => {
    const id = Math.random().toString(36).substring(2, 9);
    return {
      id,
      x: x ?? Math.random() * dimensions.width,
      y: y ?? Math.random() * dimensions.height,
      radius: Math.random() * 2 + 1, // 1-3px radius
      opacity: Math.random() * 0.5 + 0.2, // 0.2-0.7 opacity
      vx: (Math.random() - 0.5) * 0.3, // Slow drift
      vy: (Math.random() - 0.5) * 0.3,
    };
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    
    // Initialize particles based on current dimensions
    setParticles(Array.from({ length: 70 }, () => generateParticle()));
    
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticle]); // generateParticle is now stable due to useCallback with dimensions

  const handleClick = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newRipple: Ripple = {
      id: Math.random().toString(36).substring(2, 9),
      x,
      y,
      radius: 0,
      maxRadius: 100 + Math.random() * 50, // Larger ripples
      opacity: 0.8,
      createdAt: Date.now(),
    };
    setRipples(prev => [...prev, newRipple]);
    
    // Add a few particles at click location
    const newParticles = Array.from({ length: 5 }, () => generateParticle(x, y));
    setParticles(prev => [...prev, ...newParticles]);
  }, [generateParticle]);

  useEffect(() => {
    let animationFrameId: number;
    const updateAnimation = () => {
      setParticles(prevParticles =>
        prevParticles.map(p => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;

          if (newX < 0 || newX > dimensions.width) p.vx *= -1;
          if (newY < 0 || newY > dimensions.height) p.vy *= -1;
          
          newX = Math.max(0, Math.min(dimensions.width, newX));
          newY = Math.max(0, Math.min(dimensions.height, newY));

          return { ...p, x: newX, y: newY };
        })
      );

      setRipples(prevRipples => 
        prevRipples.map(r => ({
          ...r,
          radius: r.radius + 2, // Faster expansion
          opacity: Math.max(0, r.opacity - 0.015) // Faster fade out
        })).filter(r => r.opacity > 0 && r.radius < r.maxRadius)
      );
      
      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions.width, dimensions.height]); // Rerun on dimension change

  return (
    <svg
      ref={svgRef}
      onClick={handleClick}
      className="interactive-ai-background"
    >
      {ripples.map(r => (
        <circle
          key={r.id}
          cx={r.x}
          cy={r.y}
          r={r.radius}
          opacity={r.opacity}
          className="ripple"
        />
      ))}
      {particles.map(p => (
        <circle
          key={p.id}
          cx={p.x}
          cy={p.y}
          r={p.radius}
          opacity={p.opacity}
          className="particle"
        />
      ))}
    </svg>
  );
};

export default InteractiveAiBackground;
