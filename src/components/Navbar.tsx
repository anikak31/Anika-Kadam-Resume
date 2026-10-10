import React, { useState } from 'react';
import { Menu, X, Printer, Send } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Interests', href: '#interests' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EDE5D8] transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark in serif */}
        <a
          href="#overview"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0D1E36] hover:text-[#254F8E] transition-colors whitespace-nowrap shrink-0"
        >
          Anika S. Kadam
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#0D1E36] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#254F8E]/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action and Print */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={handlePrint}
            title="Print or Save PDF"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-[#EDE5D8] rounded-md hover:border-[#254F8E] hover:text-[#0D1E36] transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#254F8E]" />
            <span>Print PDF</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#0D1E36] hover:bg-[#1B3B6B] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handlePrint}
            aria-label="Print resume"
            className="p-2 text-slate-700 bg-white border border-[#EDE5D8] rounded-md hover:text-[#0D1E36]"
          >
            <Printer className="w-4 h-4 text-[#254F8E]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 text-[#0D1E36] hover:bg-[#EDE5D8]/50 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EDE5D8] bg-[#FBF9F5] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#EDE5D8]/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#EDE5D8] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#0D1E36] rounded-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
