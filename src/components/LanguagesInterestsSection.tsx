import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { Languages, Palette, Music, Sparkles, Check, Heart } from 'lucide-react';

export const LanguagesInterestsSection: React.FC = () => {
  const languages = [
    {
      name: 'English',
      level: 'Professional Working Proficiency',
      description: 'Used extensively for business reports, academic documentation, and formal presentations.',
      fluency: 'Full Professional',
    },
    {
      name: 'Hindi',
      level: 'Fluent / Conversational',
      description: 'Comfortable in verbal interactions, employee rapport, and widespread regional communication.',
      fluency: 'Fluent',
    },
    {
      name: 'Marathi',
      level: 'Native / Bilingual',
      description: 'Native tongue, optimal for local stakeholder coordination, cultural rapport, and regional operations.',
      fluency: 'Native',
    },
  ];

  const interests = [
    {
      name: 'Mandala Art',
      category: 'Visual & Fine Arts',
      description: 'Creating symmetrical geometric patterns requiring high focus, patience, spatial balance, and mindfulness.',
      icon: Palette,
      highlight: 'Cultivates extreme attention to detail and patience.',
    },
    {
      name: 'Dance',
      category: 'Performing Arts',
      description: 'Expressive movement and stage performance that develops coordination, rhythm, team choreography, and confidence.',
      icon: Sparkles,
      highlight: 'Strengthens teamwork, discipline, and stage presence.',
    },
    {
      name: 'Singing',
      category: 'Vocal Arts',
      description: 'Vocal music exploration fostering acoustic appreciation, pitch control, emotional resonance, and creative expression.',
      icon: Music,
      highlight: 'Enhances creative expression and auditory attentiveness.',
    },
  ];

  return (
    <section id="interests" className="py-16 sm:py-20 bg-white border-y border-[#EDE5D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Heading */}
        <AnimatedHeading
          kicker="Multilingual & Co-Curricular"
          title="Languages & Creative Pursuits"
          subtitle="Effective multilingual communication capabilities paired with mindfulness, discipline, and arts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-8">
          
          {/* Left Column: Languages Known */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#EDE5D8]">
              <Languages className="w-5 h-5 text-[#254F8E]" />
              <h3 className="font-serif text-2xl font-semibold text-[#0D1E36]">
                Languages Known
              </h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-[#FBF9F5] border border-[#EDE5D8] hover:border-[#254F8E]/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h4 className="font-serif text-xl font-bold text-[#0D1E36]">
                      {lang.name}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-xs bg-[#EDE5D8] text-[#0D1E36]">
                      {lang.fluency}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#254F8E] mb-2">
                    {lang.level}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Personal Interests */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#EDE5D8]">
              <Heart className="w-5 h-5 text-[#254F8E]" />
              <h3 className="font-serif text-2xl font-semibold text-[#0D1E36]">
                Personal Interests
              </h3>
            </div>

            <div className="space-y-4">
              {interests.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-xl bg-[#FBF9F5] border border-[#EDE5D8] hover:border-[#254F8E]/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#DDD0BC] flex items-center justify-center text-[#254F8E] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-serif text-xl font-bold text-[#0D1E36]">
                            {interest.name}
                          </h4>
                          <span className="text-[11px] text-slate-500 uppercase tracking-wider">
                            {interest.category}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {interest.description}
                        </p>

                        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#254F8E] font-medium">
                          <Check className="w-3.5 h-3.5" />
                          <span>{interest.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
