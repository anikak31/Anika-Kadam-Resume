import React, { useState } from 'react';
import { X, Send, Linkedin, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setOrganization('');
    setEmail('');
    setSubject('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1E36]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FBF9F5] rounded-xl border border-[#EDE5D8] shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-500 hover:text-[#0D1E36] hover:bg-[#EDE5D8]/50 rounded-md transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#254F8E] font-semibold">
                Professional Inquiries
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1E36] mt-1">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Reach out for Human Resources internships, management projects, or corporate collaborations.
              </p>
            </div>

            {/* LinkedIn Quick Connect */}
            <div className="mb-6 p-4 rounded-lg bg-white border border-[#EDE5D8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#254F8E]/10 flex items-center justify-center text-[#254F8E]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0D1E36]">LinkedIn Profile</div>
                  <div className="text-xs text-slate-500">Connect directly with Anika Kadam</div>
                </div>
              </div>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-[#0D1E36] bg-[#F5F0E8] hover:bg-[#EDE5D8] rounded-md transition-colors border border-[#DDD0BC]"
              >
                View Profile
              </a>
            </div>

            {/* Inquiries Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#EDE5D8] rounded-md focus:outline-hidden focus:border-[#254F8E] focus:ring-1 focus:ring-[#254F8E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. HR Solutions Ltd"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#EDE5D8] rounded-md focus:outline-hidden focus:border-[#254F8E] focus:ring-1 focus:ring-[#254F8E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#EDE5D8] rounded-md focus:outline-hidden focus:border-[#254F8E] focus:ring-1 focus:ring-[#254F8E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Opportunity / Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="HR Internship / Role"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#EDE5D8] rounded-md focus:outline-hidden focus:border-[#254F8E] focus:ring-1 focus:ring-[#254F8E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your opportunity or inquiry..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#EDE5D8] rounded-md focus:outline-hidden focus:border-[#254F8E] focus:ring-1 focus:ring-[#254F8E] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2 text-xs font-medium text-white bg-[#0D1E36] hover:bg-[#1B3B6B] rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#0D1E36]">
              Message Received
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <strong className="text-[#0D1E36]">{name}</strong>. Your note regarding &ldquo;{subject}&rdquo; has been logged. Anika will review and connect shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2 text-xs font-medium text-white bg-[#0D1E36] hover:bg-[#1B3B6B] rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
