import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: 'left' | 'center';
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  title,
  subtitle,
  kicker,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-10 ${isCenter ? 'text-center' : 'text-left'}`}>
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-widest text-[#254F8E] font-medium mb-2"
        >
          {kicker}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-block"
      >
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0D1E36] font-semibold tracking-tight">
          {title}
        </h2>
        {/* Animated decorative accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`h-0.5 bg-[#254F8E]/40 mt-2 ${
            isCenter ? 'origin-center w-20 mx-auto' : 'origin-left w-16'
          }`}
        />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
