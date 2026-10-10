import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { Target, UserCheck, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-[#EDE5D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Heading */}
        <AnimatedHeading
          kicker="Executive Summary"
          title="Objective & Professional Profile"
          subtitle="A dedicated Human Resources management student committed to organizational excellence, continuous learning, and data-informed people management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
          
          {/* Card 1: Career Objective */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-xl bg-[#FBF9F5] border border-[#EDE5D8] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#254F8E]/10 flex items-center justify-center text-[#254F8E] mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#0D1E36] font-semibold mb-3">
                Career Objective
              </h3>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                &ldquo;To gain advance experience in Human Resources, develop my professional skills, and contribute positively to an organization while learning and growing as a management student.&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#EDE5D8]/80 text-xs text-slate-500 font-medium">
              Goal &middot; Human Resource Specialization & Organizational Growth
            </div>
          </motion.div>

          {/* Card 2: Professional Overview */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-xl bg-[#FBF9F5] border border-[#EDE5D8] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#254F8E]/10 flex items-center justify-center text-[#254F8E] mb-5">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#0D1E36] font-semibold mb-3">
                About Me
              </h3>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Motivated management student interested in HR and people management, with hands-on experience in HR activities, research, and data analysis. Recognized as a quick learner with strong communication, teamwork, creativity, and discipline.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#EDE5D8]/80 text-xs text-slate-500 font-medium">
              Approach &middot; People-Centric Mindset with Analytical Precision
            </div>
          </motion.div>

        </div>

        {/* 3 Core Pillars Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#FAF7F2] border border-[#EDE5D8]">
            <Compass className="w-5 h-5 text-[#254F8E] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#0D1E36]">People & Culture</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Fostering an inclusive workplace culture with clear communication and empathy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#FAF7F2] border border-[#EDE5D8]">
            <Sparkles className="w-5 h-5 text-[#254F8E] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#0D1E36]">Data & Survey Analytics</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                Structured data collection, employee feedback analysis, and accurate reporting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-[#FAF7F2] border border-[#EDE5D8]">
            <ShieldCheck className="w-5 h-5 text-[#254F8E] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#0D1E36]">Corporate Discipline</h4>
              <p className="text-xs text-slate-600 mt-1 leading-normal">
                High accountability, meticulous record-keeping, and coordination with senior staff.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
