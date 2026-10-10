import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { GraduationCap, Award, BookOpen, Calendar, Building2 } from 'lucide-react';

interface AcademicRecord {
  course: string;
  courseFull: string;
  year: string;
  institute: string;
  score: string;
  scoreType: string;
  status: 'Pursuing' | 'Completed';
  highlight?: boolean;
}

export const EducationSection: React.FC = () => {
  const records: AcademicRecord[] = [
    {
      course: 'PGDM',
      courseFull: 'Post Graduate Diploma in Management',
      year: 'In Progress',
      institute: 'Institute of Management Development & Research, Pune IMDR ®',
      score: 'Pursuing',
      scoreType: 'Management Program',
      status: 'Pursuing',
      highlight: true,
    },
    {
      course: 'Graduation',
      courseFull: "Bachelor's Degree Program",
      year: '2026',
      institute: 'M.E.S Senior College',
      score: '8.14',
      scoreType: 'CGPA',
      status: 'Completed',
      highlight: true,
    },
    {
      course: 'HSC',
      courseFull: 'Higher Secondary Certificate (Grade XII)',
      year: '2023',
      institute: 'Sir Parshurambhau College',
      score: '69.8%',
      scoreType: 'Percentage',
      status: 'Completed',
    },
    {
      course: 'SSC',
      courseFull: 'Secondary School Certificate (Grade X)',
      year: '2021',
      institute: 'Sinhgad Spring Dale Public School',
      score: '83.4%',
      scoreType: 'Percentage',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-y border-[#EDE5D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Heading */}
        <AnimatedHeading
          kicker="Formal Qualifications"
          title="Academic Credentials"
          subtitle="Progressive academic journey in management studies and foundational commerce education."
        />

        {/* Desktop & Tablet View: Refined Editorial Table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-[#EDE5D8] bg-white shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#EDE5D8] text-xs font-semibold text-[#0D1E36] tracking-wider uppercase">
                <th className="py-4 px-6">Course / Degree</th>
                <th className="py-4 px-6">Institute / University</th>
                <th className="py-4 px-6 text-center">Year of Passing</th>
                <th className="py-4 px-6 text-right">CGPA / %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE5D8]">
              {records.map((item, idx) => (
                <motion.tr
                  key={item.course}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className={`hover:bg-[#FCFAF6] transition-colors ${
                    item.highlight ? 'bg-[#FCFAF6]/60' : ''
                  }`}
                >
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-[#254F8E]/10 flex items-center justify-center text-[#254F8E] shrink-0 font-serif font-bold text-sm">
                        {item.course}
                      </div>
                      <div>
                        <div className="font-serif text-lg font-semibold text-[#0D1E36]">
                          {item.course}
                        </div>
                        <div className="text-xs text-slate-500 font-normal">
                          {item.courseFull}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-5 px-6">
                    <div className="text-sm font-medium text-slate-800">
                      {item.institute}
                    </div>
                    {item.course === 'PGDM' && (
                      <span className="text-xs text-[#254F8E] font-medium">
                        Deccan Education Society (DES)
                      </span>
                    )}
                  </td>

                  <td className="py-5 px-6 text-center">
                    <span className="font-mono tabular-nums text-sm font-medium text-slate-700 px-2.5 py-1 bg-[#F5F0E8] rounded-xs border border-[#DDD0BC]">
                      {item.year}
                    </span>
                  </td>

                  <td className="py-5 px-6 text-right">
                    <div className="font-serif text-lg font-bold text-[#0D1E36]">
                      {item.score}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      {item.scoreType}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Responsive Clean Cards */}
        <div className="md:hidden space-y-4">
          {records.map((item, idx) => (
            <motion.div
              key={item.course}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-[#FCFAF6] border border-[#EDE5D8] space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-[#254F8E]/10 flex items-center justify-center text-[#254F8E] font-serif font-bold text-sm">
                    {item.course}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#0D1E36]">
                      {item.course}
                    </h3>
                    <p className="text-xs text-slate-500">{item.courseFull}</p>
                  </div>
                </div>

                <span className="font-mono tabular-nums text-xs font-semibold px-2 py-0.5 bg-[#EDE5D8] rounded-xs text-[#0D1E36]">
                  {item.year}
                </span>
              </div>

              <div className="pt-2 border-t border-[#EDE5D8]/70 flex flex-col gap-1 text-xs">
                <div className="text-slate-800 font-medium">
                  {item.institute}
                </div>
                {item.course === 'PGDM' && (
                  <div className="text-[#254F8E]">
                    Deccan Education Society
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[#EDE5D8]/70 flex items-center justify-between text-xs">
                <span className="text-slate-500">{item.scoreType}</span>
                <span className="font-serif font-bold text-base text-[#0D1E36]">
                  {item.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#254F8E]" />
            <span>Institutional Affiliation &middot; DES IMDR® Pune</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#254F8E]" />
            <span>Graduation Score: 8.14 CGPA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
