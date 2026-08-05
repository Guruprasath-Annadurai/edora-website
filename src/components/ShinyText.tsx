import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  baseColor?: string;
  shineColor?: string;
  /** Full sweep duration in seconds */
  speed?: number;
  /** Gradient angle in degrees */
  angle?: number;
  className?: string;
}

export default function ShinyText({
  text,
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
  speed = 3,
  angle = 100,
  className = '',
}: ShinyTextProps) {
  const gradient = `linear-gradient(${angle}deg, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%)`;

  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: '300% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{ backgroundPosition: ['200% 0%', '-100% 0%'] }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
}
