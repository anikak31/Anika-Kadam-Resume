import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import {
  FileSpreadsheet,
  FileText,
  Presentation,
  Cloud,
  Database,
  Search,
  Users2,
  CalendarCheck,
  Scale,
  Clock,
  Compass,
  MessageSquare,
  SlidersHorizontal,
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'technical' | 'competency';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'technical' | 'competency'>('all');

  const skills: SkillItem[] = [
    // Technical Skills
    {
      name: 'MS Excel',
      category: 'technical',
      description: 'Data entry, spreadsheet formatting, formulas, filtering, and HR records auditing.',
      icon: FileSpreadsheet,
    },
    {
      name: 'MS Word',
      category: 'technical',
      description: 'Document drafting, HR letters, policy manuals, formal reports, and memos.',
      icon: FileText,
    },
    {
      name: 'PowerPoint',
      category: 'technical',
      description: 'Designing structured presentation decks for onboarding, training, and summaries.',
      icon: Presentation,
    },
    {
      name: 'Google Workspace',
      category: 'technical',
      description: 'Collaborative Docs, Sheets, Slides, Forms, Drive organization, and shared workspaces.',
      icon: Cloud,
    },
    {
      name: 'Data Collection & Analysis',
      category: 'technical',
      description: 'Gathering quantitative and qualitative HR metrics, analyzing workforce patterns.',
      icon: Database,
    },
    {
      name: 'Survey Tools',
      category: 'technical',
      description: 'Creating employee feedback forms, pulse questionnaires, and response synthesis.',
      icon: SlidersHorizontal,
    },
    {
      name: 'Basic HRIS',
      category: 'technical',
      description: 'Foundational understanding of employee information systems, attendance, and records.',
      icon: Users2,
    },
    {
      name: 'Internet & Online Research',
      category: 'technical',
      description: 'Market talent benchmarking, industry HR compliance, and structured web sourcing.',
      icon: Search,
    },

    // Competencies
    {
      name: 'Event/Activity Coordination',
      category: 'competency',
      description: 'Planning logistics, agendas, and active participant engagement for corporate sessions.',
      icon: CalendarCheck,
    },
    {
      name: 'Conflict Resolution',
      category: 'competency',
      description: 'Objective listening, diplomatic mediation, and maintaining harmonious team dynamics.',
      icon: Scale,
    },
    {
      name: 'Time Management',
      category: 'competency',
      description: 'Prioritizing competing academic and HR deliverables under tight deadlines.',
      icon: Clock,
    },
    {
      name: 'Leadership',
      category: 'competency',
      description: 'Inspiring peers, driving initiative, accountability, and proactive problem solving.',
      icon: Compass,
    },
    {
      name: 'Communication',
      category: 'competency',
      description: 'Articulate verbal and written communication across teams, seniors, and external stakeholders.',
      icon: MessageSquare,
    },
  ];

  const filteredSkills = skills.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Heading */}
        <AnimatedHeading
          kicker="Capabilities & Tools"
          title="Skills & Core Competencies"
          subtitle="A combination of specialized digital tooling and interpersonal leadership proficiencies."
        />

        {/* Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EDE5D8]/60 rounded-lg max-w-fit mb-8 border border-[#DDD0BC]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-white text-[#0D1E36] shadow-xs'
                : 'text-slate-600 hover:text-[#0D1E36]'
            }`}
          >
            All Skills ({skills.length})
          </button>
          <button
            onClick={() => setActiveFilter('technical')}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'technical'
                ? 'bg-white text-[#0D1E36] shadow-xs'
                : 'text-slate-600 hover:text-[#0D1E36]'
            }`}
          >
            Technical &amp; Software ({skills.filter((s) => s.category === 'technical').length})
          </button>
          <button
            onClick={() => setActiveFilter('competency')}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'competency'
                ? 'bg-white text-[#0D1E36] shadow-xs'
                : 'text-slate-600 hover:text-[#0D1E36]'
            }`}
          >
            HR Competencies ({skills.filter((s) => s.category === 'competency').length})
          </button>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              const isTech = skill.category === 'technical';

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-xl p-5 border border-[#EDE5D8] hover:border-[#254F8E]/40 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#EDE5D8] flex items-center justify-center text-[#254F8E] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        {isTech ? 'Technical' : 'Competency'}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-semibold text-[#0D1E36]">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#EDE5D8]/70 flex items-center justify-between text-[11px] text-[#254F8E]">
                    <span className="font-medium">Applied in HR &amp; Academics</span>
                    <span className="text-slate-400">&bull;</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
