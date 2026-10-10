import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { Briefcase, Building, CheckCircle2, Calendar, FileSpreadsheet, Users, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const bulletPoints = [
    {
      title: 'Employee Records & HR Data Administration',
      description: 'Maintained and regularly updated accurate employee records, personnel files, and centralized HR data repositories.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Survey Activities & Data Collection',
      description: 'Assisted in comprehensive data collection initiatives and workforce survey activities to gather employee sentiment and metrics.',
      icon: Layers,
    },
    {
      title: 'Event Planning & Engagement Coordination',
      description: 'Supported the end-to-end planning and logistics of company employee engagement events and engagement activities.',
      icon: Users,
    },
    {
      title: 'Corporate Discipline & Workplace Culture',
      description: 'Gained practical in-depth understanding of corporate governance, organizational hierarchy, and professional workplace standards.',
      icon: CheckCircle2,
    },
    {
      title: 'Cross-Functional & Senior Communication',
      description: 'Developed confidence in professional executive communication, cross-departmental alignment, and coordinating with senior management.',
      icon: CheckCircle2,
    },
    {
      title: 'Daily HR Operations & People Management',
      description: 'Gained hands-on immersion in day-to-day HR workflows, lifecycle support, attendance verification, and employee query handling.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Heading */}
        <AnimatedHeading
          kicker="Work History"
          title="Internship Experience"
          subtitle="Real-world corporate exposure in Human Resources operations, record management, and talent engagement."
        />

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-xl border border-[#EDE5D8] p-6 sm:p-10 shadow-xs"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#EDE5D8]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0D1E36] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#0D1E36] font-semibold">
                  HR Intern
                </h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-[#254F8E] font-medium">
                  <Building className="w-4 h-4" />
                  <span>Rite Water Solutions</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-slate-500 gap-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F0E8] text-[#0D1E36] font-medium rounded-sm border border-[#DDD0BC]">
                <Calendar className="w-3.5 h-3.5 text-[#254F8E]" />
                <span>Internship Experience</span>
              </div>
              <span>Human Resources & People Management</span>
            </div>
          </div>

          {/* Key Deliverables & Responsibilities Grid */}
          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-5">
              Key Contributions &amp; Operational Learnings
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {bulletPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-[#FCFAF6] border border-[#EDE5D8]/70 hover:border-[#254F8E]/30 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#EDE5D8]/60 flex items-center justify-center text-[#254F8E] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-[#0D1E36]">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Professional Takeaways Highlight */}
          <div className="mt-8 p-5 rounded-lg bg-[#FAF7F2] border border-[#DDD0BC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-700">
              <span className="font-semibold text-[#0D1E36]">Core Exposure Acquired:</span>{' '}
              HRIS Records &middot; Employee Data Structuring &middot; Event Coordination &middot; Workplace Protocol &middot; Team Collaboration
            </div>
            <div className="text-xs font-serif italic text-[#254F8E] shrink-0">
              Deccan Education Society IMDR® Aligned
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
