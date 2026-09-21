'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scale?: number;
  withBlur?: boolean;
  className?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  scale = 1,
  withBlur = false,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale: scale !== 1 ? scale : undefined,
        filter: withBlur ? 'blur(6px)' : undefined,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: withBlur ? 'blur(0px)' : undefined,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Editorial cubic bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MotionStagger: React.FC<{
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}> = ({ children, staggerDelay = 0.08, className = '' }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionChild: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className = '', yOffset = 20 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, scale: 0.985 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full py-1 ${className}`}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="section-divider-glow"
      />
    </div>
  );
};
