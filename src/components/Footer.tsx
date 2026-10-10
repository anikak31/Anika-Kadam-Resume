import React from 'react';
import { ArrowUp, Printer, Send } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D1E36] text-[#EDE5D8] py-12 border-t border-[#1B3B6B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1B3B6B]/60">
          
          {/* Brand info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold text-white tracking-tight">
              Anika S. Kadam
            </h3>
            <p className="font-serif italic text-sm text-[#DDD0BC] mt-1">
              Human Resources Management &middot; IMDR® Pune
            </p>
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#1B3B6B] hover:bg-[#254F8E] text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#DDD0BC]" />
              <span>Print Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#F5F0E8] hover:bg-[#EDE5D8] text-[#0D1E36] font-medium transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Inquiring Note</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#1B3B6B] hover:bg-[#254F8E] text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet copyright & note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#DDD0BC]/70">
          <p>
            &copy; {new Date().getFullYear()} Anika S. Kadam. All rights reserved.
          </p>
          <p className="font-sans text-[11px]">
            Clean &amp; Minimalist Portfolio &middot; Blue, Beige &amp; White Theme
          </p>
        </div>
      </div>
    </footer>
  );
};
