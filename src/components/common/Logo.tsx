import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, light = false }) => {
  const color = light ? '#ffffff' : '#0f1e40';
  const accent = '#3b82f6';

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke={color} strokeWidth="1.5" />
        <path 
          d="M12 28L20 10L28 28" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M16 22H24" 
          stroke={accent} 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
        <path 
          d="M12 28C14.5 26 17.5 26 20 28C22.5 30 25.5 30 28 28" 
          stroke={accent} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
        <span style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          letterSpacing: '0.1rem',
          color: color 
        }}>
          LUMINA
        </span>
        <span style={{ 
          fontFamily: 'var(--font-accent)', 
          fontSize: '0.65rem', 
          letterSpacing: '0.4rem', 
          color: accent,
          fontWeight: '700'
        }}>
          AZURE
        </span>
      </div>
    </div>
  );
};

export default Logo;
