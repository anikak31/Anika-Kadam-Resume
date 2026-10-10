/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesInterestsSection } from './components/LanguagesInterestsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-slate-800 font-sans selection:bg-[#0D1E36] selection:text-[#FBF9F5]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 print-page">
        {/* Hero Section with Serif Heading and Portrait Card */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Professional Summary & Career Objective */}
        <AboutSection />

        {/* Work & Internship Experience */}
        <ExperienceSection />

        {/* Academic Credentials Table / Responsive Cards */}
        <EducationSection />

        {/* Technical Proficiencies & HR Competencies */}
        <SkillsSection />

        {/* Languages Known & Creative Personal Pursuits */}
        <LanguagesInterestsSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Connect & Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
