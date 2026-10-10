import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap, ArrowDown, Linkedin, CheckCircle2, Building, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="overview" className="relative pt-8 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      {/* Subtle decorative background tints */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#EDE5D8]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 bg-[#254F8E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline / Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#254F8E] font-semibold bg-[#EDE5D8]/60 px-3 py-1 rounded-sm border border-[#DDD0BC]"
            >
              <span>Human Resources & Management</span>
              <span aria-hidden="true">·</span>
              <span>Pune, India</span>
            </motion.div>

            {/* Main Headline with Serif Elegance & Headings Animation */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D1E36] font-semibold tracking-tight leading-[1.12]"
              >
                Anika S. Kadam
              </motion.h1>

              {/* Subheading / Academic Status */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-lg sm:text-xl text-[#1B3B6B] italic mt-2.5"
              >
                PGDM Candidate at DES IMDR® Pune &middot; Management & HR Specialist
              </motion.p>
            </div>

            {/* Executive Bio / Lead Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl"
            >
              Motivated management student interested in HR and people management, with hands-on experience in corporate HR operations, workforce research, and data analysis. A disciplined, creative communicator driven to create positive organizational value.
            </motion.p>

            {/* Unboxed Metadata Strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 pt-2 pb-1"
            >
              <div className="flex items-center gap-1.5 font-medium text-[#0D1E36]">
                <GraduationCap className="w-4 h-4 text-[#254F8E]" />
                <span>8.14 CGPA Graduation</span>
              </div>
              <span className="text-[#DDD0BC]" aria-hidden="true">&bull;</span>
              <div className="flex items-center gap-1.5 font-medium text-[#0D1E36]">
                <Briefcase className="w-4 h-4 text-[#254F8E]" />
                <span>HR Intern @ Rite Water Solutions</span>
              </div>
              <span className="text-[#DDD0BC]" aria-hidden="true">&bull;</span>
              <div className="flex items-center gap-1.5 font-medium text-[#0D1E36]">
                <CheckCircle2 className="w-4 h-4 text-[#254F8E]" />
                <span>Trilingual: English, Hindi, Marathi</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0D1E36] hover:bg-[#1B3B6B] rounded-md transition-colors shadow-xs"
              >
                <span>View Experience</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#education"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#0D1E36] bg-white border border-[#DDD0BC] hover:border-[#0D1E36] rounded-md transition-colors shadow-xs"
              >
                <span>Academics</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#254F8E] hover:text-[#0D1E36] transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn / Inquire</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Minimalist Executive Monogram & Overview Card (Photo-Free) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-xs border border-[#EDE5D8] p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Subtle architectural background watermark accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF7F2] rounded-bl-full pointer-events-none -z-0 border-b border-l border-[#EDE5D8]/50" />

              {/* Monogram Seal & Header */}
              <div className="relative z-10 flex items-center justify-between pb-5 border-b border-[#EDE5D8]">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-lg bg-[#0D1E36] text-[#FBF9F5] flex items-center justify-center font-serif text-2xl font-bold tracking-wider shadow-xs border border-[#1B3B6B]">
                    AK
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#254F8E] font-semibold">
                      Curriculum Vitae
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0D1E36]">
                      Anika S. Kadam
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs px-2.5 py-1 bg-[#F5F0E8] text-[#0D1E36] font-medium rounded-xs border border-[#DDD0BC]">
                    Management
                  </span>
                </div>
              </div>

              {/* Key Highlights List */}
              <div className="relative z-10 py-5 space-y-3.5 border-b border-[#EDE5D8]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#EDE5D8] flex items-center justify-center text-[#254F8E] shrink-0 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#0D1E36]">Post Graduate Studies (PGDM)</div>
                    <div className="text-slate-600">Deccan Education Society IMDR® Pune</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#EDE5D8] flex items-center justify-center text-[#254F8E] shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#0D1E36]">Graduation &middot; 8.14 CGPA</div>
                    <div className="text-slate-600">M.E.S Senior College (Batch of 2026)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#EDE5D8] flex items-center justify-center text-[#254F8E] shrink-0 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#0D1E36]">Corporate Experience</div>
                    <div className="text-slate-600">HR Intern at Rite Water Solutions</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#EDE5D8] flex items-center justify-center text-[#254F8E] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#0D1E36]">Key Competencies</div>
                    <div className="text-slate-600">HRIS &middot; Surveys &middot; Data Analysis &middot; Event Management</div>
                  </div>
                </div>
              </div>

              {/* Footer row of card */}
              <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-[#0D1E36]">
                  <span className="w-2 h-2 rounded-full bg-[#254F8E]" />
                  Available for Opportunities
                </span>
                <span className="font-serif italic text-slate-500">Pune, Maharashtra</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
