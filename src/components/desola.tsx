import React, { useState } from 'react';

// ==========================================
// SELF-CONTAINED SVG ICONS
// ==========================================
const IconWand = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconDrafting = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const IconDownload = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const IconArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IconGraduationCap = () => (
  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const IconBrain = () => (
  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconCertificate = () => (
  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IconHandHoldingHeart = () => (
  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconHelmetSafety = () => (
  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a8 8 0 10-16 0v6a2 2 0 002 2z" />
  </svg>
);

const IconClapperboard = () => (
  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h18M3 16h18M3 12h18M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
  </svg>
);

const IconSend = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const IconMenu = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconX = () => (
  <svg className="w-6 h-6" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect  rx="4" fill="currentColor"/>
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconLinkedIn = () => (
  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const IconTikTok = () => (
  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.88-3.75-1.97-.1-.1-.18-.21-.26-.32v6.59c.01 4.1-2.91 7.74-6.95 8.16-4.57.5-8.77-2.73-9.28-7.31-.51-4.57 2.73-8.77 7.31-9.28 1.1-.12 2.2.06 3.23.51V0z"/>
  </svg>
);

const IconInstagram = () => (
  <svg className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const IconEnvelope = () => (
  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconPhone = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// ==========================================
// MAIN COMPONENT EXPORT
// ==========================================
type Theme = 'creator' | 'engineer';
type Toast = { id: string; message: string; type: 'info' | 'success' };

export default function App() {
  const [theme, setTheme] = useState<Theme>('creator');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // ------------------------------------------
  // TOAST HANDLERS
  // ------------------------------------------
  const showToast = (message: string, type: Toast['type'] = 'info') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto remove toast after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // ------------------------------------------
  // WORKSPACE THEME CONTROLLER
  // ------------------------------------------
  const handleThemeChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    showToast(`Workspace initialized in ${selectedTheme === 'creator' ? 'Creator Mode (Media Focus)' : 'Engineer Mode (Technical Blueprint)'}`, 'success');
  };

  // ------------------------------------------
  // CERTIFICATE CV TRIGGER
  // ------------------------------------------
  const handleCVGeneration = () => {
    showToast("Compiling Autodesk certificates & academic transcript data...", "info");
    setTimeout(() => {
      showToast("Download Initialized: Adesola_Adejumo_Portfolio_Package.pdf", "success");
    }, 2000);
  };

  // ------------------------------------------
  // CONTACT SUBMISSION FORM HANDLER
  // ------------------------------------------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast(`Encrypting communication bridge for ${formData.name}...`, "info");
    
    setTimeout(() => {
      showToast(`Success: Message dispatched to Adesola's inbox!`, "success");
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className={`min-h-screen relative flex flex-col font-inter transition-all duration-500 ${
      theme === 'engineer' ? 'bg-[#0A192F] text-[#64FFDA]' : 'bg-[#F9F9FB] text-slate-800'
    }`}>
      
      {/* Dynamic Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundSize: '24px 24px',
          backgroundImage: theme === 'engineer'
            ? 'linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px)'
            : 'radial-gradient(#CBD5E1 1px, transparent 1px)'
        }}
      />

      {/* TOAST NOTIFICATION CONTAINER */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-xl border text-xs shadow-2xl flex items-center space-x-3 max-w-sm pointer-events-auto transition-all duration-300 transform translate-y-0 ${
              toast.type === 'success'
                ? 'border-emerald-500/30 text-emerald-400 bg-slate-900/95'
                : 'border-sky-500/30 text-sky-400 bg-slate-900/95'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${toast.type === 'success' ? 'bg-emerald-400' : 'bg-sky-400'}`} />
            <span className="font-medium font-mono">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* NAVIGATION HEADER */}
      <header className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-all duration-500 ${
        theme === 'engineer' ? 'border-[#233554] bg-[#0A192F]/80' : 'border-slate-200 bg-[#F9F9FB]/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span 
              className="text-2xl font-black tracking-tight transition-all duration-500"
              style={{ fontFamily: theme === 'engineer' ? 'Space Grotesk' : 'Syne' }}
            >
              AVA
            </span>
            <span className={`h-2.5 w-2.5 rounded-full animate-pulse ${theme === 'engineer' ? 'bg-teal-400' : 'bg-orange-500'}`} />
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#summary" className="hover:text-orange-500 transition-colors">Scope</a>
            <a href="#skills" className="hover:text-orange-500 transition-colors">Matrix</a>
            <a href="#portfolio" className="hover:text-orange-500 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          {/* Interactive Mode Controls */}
          <div className="flex items-center space-x-3">
            
            {/* Embedded Header Theme Switcher pills */}
            <div className={`hidden sm:flex items-center p-1 rounded-full border ${
              theme === 'engineer' ? 'border-slate-700 bg-slate-900/50' : 'border-slate-300 bg-slate-200/50'
            }`}>
              <button 
                onClick={() => handleThemeChange('creator')}
                className={`p-1.5 rounded-full transition-all ${theme === 'creator' ? 'bg-orange-500 text-white shadow' : 'text-slate-400'}`}
                title="Creator Mode"
              >
                <IconWand />
              </button>
              <button 
                onClick={() => handleThemeChange('engineer')}
                className={`p-1.5 rounded-full transition-all ${theme === 'engineer' ? 'bg-cyan-500 text-slate-900 shadow' : 'text-slate-400'}`}
                title="Engineer Mode"
              >
                <IconDrafting />
              </button>
            </div>

            {/* Quick action CV Download */}
            <button 
              onClick={handleCVGeneration}
              className="hidden sm:flex items-center space-x-2 bg-slate-900 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
            >
              <IconDownload />
              <span>Download CV</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-500 transition"
            >
              {mobileMenuOpen ? <IconX /> : <IconMenu />}
            </button>

          </div>
        </div>

        {/* Mobile menu Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t py-4 px-6 space-y-4 transition-all duration-500 ${
            theme === 'engineer' ? 'bg-[#0A192F] border-[#233554]' : 'bg-[#F9F9FB] border-slate-200'
          }`}>
            <nav className="flex flex-col space-y-3 text-sm font-semibold">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">About</a>
              <a href="#summary" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">Scope</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">Matrix</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">Certifications</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-500">Contact</a>
            </nav>
            
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-col space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Viewport View:</span>
                <div className="flex space-x-2 bg-slate-200 dark:bg-slate-900 p-1 rounded-full">
                  <button 
                    onClick={() => { handleThemeChange('creator'); setMobileMenuOpen(false); }}
                    className={`px-3 py-1 rounded-full text-[10px] ${theme === 'creator' ? 'bg-orange-500 text-white' : 'text-slate-50'}`}
                  >
                    Creator
                  </button>
                  <button 
                    onClick={() => { handleThemeChange('engineer'); setMobileMenuOpen(false); }}
                    className={`px-3 py-1 rounded-full text-[10px] ${theme === 'engineer' ? 'bg-cyan-500 text-slate-900 font-bold' : 'text-slate-500'}`}
                  >
                    Engineer
                  </button>
                </div>
              </div>
              <button 
                onClick={() => { handleCVGeneration(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-lg text-xs flex items-center justify-center space-x-2"
              >
                <IconDownload />
                <span>Download CV Package</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className={`text-xs font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full ${
              theme === 'engineer' ? 'bg-cyan-950 text-cyan-400' : 'bg-orange-100 text-orange-500'
            }`}>
              ENGINEERING & DIGITAL CINEMATICS
            </span>
          </div>

          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none transition-all duration-500"
            style={{ fontFamily: theme === 'engineer' ? 'Space Grotesk' : 'Syne' }}
          >
            {theme === 'engineer' ? 'Engineering Precision.' : 'Building Structures.'}
            <br />
            <span className={theme === 'engineer' ? 'text-cyan-400' : 'text-orange-500'}>
              {theme === 'engineer' ? 'Modeling Media Matrices.' : 'Shaping Stories.'}
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed max-w-2xl transition-all duration-500" style={{ color: theme === 'engineer' ? '#8892B0' : '#475569' }}>
            Hi, I'm <strong className="font-bold">Adesola Victoria Adejumo</strong>. I engineer complex physical models with mathematical rigor while creating storytelling content that builds human connection.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#contact"
              className={`font-space font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 ${
                theme === 'engineer' ? 'bg-cyan-500 text-slate-900' : 'bg-orange-500 text-white'
              }`}
            >
              <span>Build Structural Connection</span>
              <IconArrowRight />
            </a>
            <a 
              href="#portfolio"
              className={`border-2 font-space font-bold px-7 py-3.5 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                theme === 'engineer' ? 'border-[#233554] hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'
              }`}
            >
              <IconClapperboard />
              <span>Watch Certifications</span>
            </a>
          </div>
        </div>

        {/* Right Side Adaptive Visual Canvas (Portrait Always Displayed Across Modes) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div 
            className={`w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden relative shadow-2xl border-2 transition-all duration-500 ${
              theme === 'engineer' ? 'border-[#233554] bg-[#112240]' : 'border-slate-300 bg-[#E2E8F0]'
            }`}
          >
            
            {/* Unified High-Resolution Portrait Image (Shown in both Creative and Engineering mode) */}
            <div 
              className="absolute inset-0 flex flex-col justify-end p-6 bg-cover bg-center transition-all duration-500 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')]"
            >
              {/* Theme Gradients */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                theme === 'engineer' 
                  ? 'bg-gradient-to-t from-slate-950 via-slate-900/60 to-[#0A192F]/40' 
                  : 'bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent'
              }`} />

              <div className="relative z-10 space-y-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded w-max uppercase tracking-wider font-mono ${
                  theme === 'engineer' ? 'bg-cyan-400 text-slate-950' : 'bg-orange-500 text-white'
                }`}>
                  {theme === 'engineer' ? 'ENGINEERING STRUCTURAL PROFILE' : 'CREATOR MEDIA SPACE'}
                </span>
                <h3 className="text-white font-bold text-xl font-space">Adesola Victoria Adejumo</h3>
                <p className="text-gray-300 text-xs flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2" />
                  Osun State University, Civil Candidate
                </p>
              </div>
            </div>

            {/* High-Tech Blueprint HUD Text Overlays (Rendered strictly inside Engineer Mode) */}
            {theme === 'engineer' && (
              <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 font-mono text-[9px] text-[#64FFDA] bg-cyan-950/20">
                <div className="flex justify-between">
                  <span>VECTOR_LOAD_SYS: ACTIVE</span>
                  <span>TENSIONAL_RATIO: 1.15kNp</span>
                </div>
                <div className="flex justify-between">
                  <span>UNIOSUN MODEL #2026</span>
                  <span>COORDINATES CALIBRATED</span>
                </div>
              </div>
            )}

          </div>

          {/* Core Framing Outlines */}
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-orange-500 pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-orange-500 pointer-events-none" />
        </div>

      </section>

      {/* PROFESSIONAL SUMMARY SECTION */}
      <section id="summary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className={`p-6 md:p-10 rounded-2xl border transition-all duration-500 relative overflow-hidden shadow-md bg-opacity-95 space-y-6 ${
          theme === 'engineer' ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Title Block */}
            <div className={`lg:col-span-4 border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-8 ${
              theme === 'engineer' ? 'border-[#233554]' : 'border-slate-200'
            }`}>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500 font-mono block mb-1">DESIGN SCOPE ABSTRACT</span>
              <h2 
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{ fontFamily: theme === 'engineer' ? 'Space Grotesk' : 'Syne' }}
              >
                Professional Summary
              </h2>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-orange-100 text-orange-500 dark:bg-orange-950/40">Infrastructure Design</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-600 dark:bg-cyan-950/40">Visual Storytelling</span>
              </div>
            </div>

            {/* Abstract Paragraph */}
            <div className="lg:col-span-8 space-y-5">
              <p className={`text-sm md:text-base leading-relaxed transition-all duration-500 ${
                theme === 'engineer' ? 'text-[#8892B0]' : 'text-slate-600'
              }`}>
                Aspiring civil engineering specialist blending structured infrastructure design principles with compelling visual narratives. Equipped with a background in structural CAD modeling, stress-strength analysis, and digital videography, I thrive in environments requiring rigorous engineering analysis, outstanding leadership, and modern digital communication. Driven by Gen-Z creative dynamics and LEAP Africa ethical project execution models.
              </p>

              {/* Added summary narrative block */}
              <div className={`text-sm leading-relaxed transition-all duration-500 border-l-4 pl-4 space-y-3 ${
                theme === 'engineer' ? 'text-[#8892B0] border-cyan-500' : 'text-slate-600 border-orange-500'
              }`}>
                <p className="font-semibold italic">In addition,</p>
                <p>
                  As a change maker under the Leap Africa's Youth Leadership Development Programme '26, I am focused on SDG 3 ~ Good health and well-being, specifically human mental health. Because of this focus, I use my voice on my socials to publish content addressing <span className="font-bold text-rose-500 font-sans">"My love"🩷</span>.
                </p>
                <p>
                  I am looking forward to building a Positive Lifestyle Community where we can all find a friend in each other, a shoulder to lean on, and a partner to hold supporting one another on the journey to becoming the best version of ourselves without a single moment of judgment on that path.
                </p>
              </div>

              {/* Numerical Indicators Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 font-mono text-[10px] sm:text-xs">
                <div className={`p-2.5 rounded border ${theme === 'engineer' ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-orange-500 font-bold block">01 / DISCIPLINE</span>
                  <span>Civil Engineering</span>
                </div>
                <div className={`p-2.5 rounded border ${theme === 'engineer' ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-cyan-500 font-bold block">02 / CORE MEDIA</span>
                  <span>Creative Video Director</span>
                </div>
                <div className={`p-2.5 rounded border ${theme === 'engineer' ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-indigo-400 font-bold block">03 / SDG TARGET</span>
                  <span>SDG 3 Mental Health</span>
                </div>
                <div className={`p-2.5 rounded border ${theme === 'engineer' ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-emerald-400 font-bold block">04 / ETHOS</span>
                  <span>Zero Judgement</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* HIGHLIGHT: LEAP AFRICA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900 text-white relative overflow-hidden leap-glow shadow-xl">
          
          {/* Neon lights backdrop */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-500 text-slate-900 text-[9px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">PRESTIGIOUS FELLOWSHIP</span>
                <span className="bg-orange-500 text-white text-[9px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">FELLOW COHORT '26</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-space text-white leading-tight">LEAP Africa Youth Leadership Development Fellow</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Empowered with elite leadership ethics, community development project design strategies, and team execution methodologies. Actively engineering local grassroots change initiatives spanning public health and structural environment mentoring in South-West Nigeria.
              </p>
            </div>

            <div className="flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl flex-shrink-0 w-full lg:w-auto">
              <div className="text-center lg:text-left font-mono">
                <span className="block text-[9px] uppercase tracking-widest text-cyan-400 font-bold">FELLOWSHIP STATUS</span>
                <span className="text-xs font-extrabold text-white flex items-center justify-center lg:justify-start gap-1.5 mt-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Active Cohort Class
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* THE EXPERIENCE MATRIX (GRID SETUP) */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-orange-500 font-mono block uppercase">EXPERIENCE CAPABILITIES & FOUNDATIONS</span>
          <h2 
            className="text-3xl font-black tracking-tight"
            style={{ fontFamily: theme === 'engineer' ? 'Space Grotesk' : 'Syne' }}
          >
            The Experience Matrix
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme === 'engineer' ? '#8892B0' : '#475569' }}>
            A precise synthesis displaying academic progression, practical modern certs, and dual design capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Academic Education Timeline */}
          <div className={`rounded-2xl p-6 border transition-all duration-500 shadow-sm ${
            theme === 'engineer' ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-sm font-bold mb-4 flex items-center space-x-2 border-b pb-3 ${
              theme === 'engineer' ? 'border-[#233554]' : 'border-slate-200'
            }`}>
              <IconGraduationCap />
              <span className="font-space">Education Profile</span>
            </h3>
            <div className="relative pl-4 border-l-2 border-slate-00 dark:border-slate-800 space-y-4">
              <div className="relative text-xs">
                <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-orange-400 border-2 border-white dark:border-slate-900" />
                <span className="text-[8px] font-bold text-slate-400 font-mono block">2021 — PRESENT</span>
                <p className="font-bold">B.Eng Civil Engineering</p>
                <p className="text-[10px] mt-0.5 text-slate-500">Osun State University (UNIOSUN)</p>
              </div>
              <div className="relative text-xs">
                <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900" />
                <span className="text-[8px] font-bold text-slate-400 font-mono block">GRADUATE</span>
                <p className="font-bold">Command Day Sec. School</p>
                <p className="text-[10px] mt-0.5 text-slate-500">High School leaving credential</p>
              </div>
              <div className="relative text-xs">
                <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900" />
                <p className="font-bold">Nickdel Girls' College</p>
                <p className="text-[10px] text-slate-500">Foundational Secondary Base</p>
              </div>
            </div>
          </div>

          {/* Card 2: Skill Metrix bars */}
          <div className={`rounded-2xl p-6 border transition-all duration-500 shadow-sm ${
            theme === 'engineer' ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-sm font-bold mb-4 flex items-center space-x-2 border-b pb-3 ${
              theme === 'engineer' ? 'border-[#233554]' : 'border-slate-200'
            }`}>
              <IconBrain />
              <span className="font-space">Dual Core Capabilities</span>
            </h3>
            <div className="space-y-4 text-xs">
              
              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Structural CAD & BIM</span>
                  <span className="text-orange-500">85%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Videography & Editing</span>
                  <span className="text-cyan-500">90%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Content Strategy</span>
                  <span className="text-indigo-400">80%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-400 h-full rounded-full" style={{ width: '80%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>LEAP PM & Ethics</span>
                  <span className="text-emerald-400">88%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: Accreditations Certs */}
          <div className={`rounded-2xl p-6 border transition-all duration-500 shadow-sm ${
            theme === 'engineer' ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-sm font-bold mb-4 flex items-center space-x-2 border-b pb-3 ${
              theme === 'engineer' ? 'border-[#233554]' : 'border-slate-200'
            }`}>
              <IconCertificate /> {/*fix*/}
              <span className="font-space">Accreditations</span>
            </h3>
            <ul className="space-y-3 text-xs">
              <li className={`flex items-center space-x-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition ${
                theme === 'engineer' ? 'bg-[#0A192F]' : 'bg-slate-50'
              }`}>
                <IconHelmetSafety />
                <div>
                  <strong className="block leading-tight">Civil Engineering</strong>
                  <span className="text-[9px] text-slate-600">Osun State University (UNIOSUN)</span>
                </div>
              </li>
              <li className={`flex items-center space-x-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition ${
                theme === 'engineer' ? 'bg-[#0A192F]' : 'bg-slate-50'
              }`}>
                <IconDrafting />
                <div>
                  <strong className="block leading-tight">Volunteer Service</strong>
                  <span className="text-[9px] text-slate-600">Game Changer Conference</span>
                </div>
              </li>
              <li className={`flex items-center space-x-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 transition ${
                theme === 'engineer' ? 'bg-[#0A192F]' : 'bg-slate-50'
              }`}>
                <IconCertificate />
                <div>
                  <strong className="block leading-tight">Sustainable Tech</strong>
                  <span className="text-[9px] text-slate-600">LEAP Africa,Exceutive Director</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 4: Action community out-reaches */}
          <div className={`rounded-2xl p-6 border transition-all duration-500 shadow-sm ${
            theme === 'engineer' ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200'
          }`}>
            <h3 className={`text-sm font-bold mb-4 flex items-center space-x-2 border-b pb-3 ${
              theme === 'engineer' ? 'border-[#233554]' : 'border-slate-200'
            }`}>
              <IconHandHoldingHeart />
              <span className="font-space">Grassroots Outreach</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className={`p-2.5 rounded ${theme === 'engineer' ? 'bg-[#0A192F]' : 'bg-slate-50'}`}>
                <span className="font-bold flex items-center gap-1.5 text-orange-500">
                  <span>🏬</span> Market Outreach
                </span>
                <p className="text-[10px] mt-0.5 text-slate-500 leading-relaxed">
                  Design and execute structural sanitation maps & public health safety templates.
                </p>
              </div>
              <div className={`p-2.5 rounded ${theme === 'engineer' ? 'bg-[#0A192F]' : 'bg-slate-50'}`}>
                <span className="font-bold flex items-center gap-1.5 text-cyan-500">
                  <span>🏫</span> Literacy Campaign
                </span>
                <p className="text-[10px] mt-0.5 text-slate-500 leading-relaxed">
                  Academic mentoring framework, career counseling, and book donations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO CERTIFICATIONS */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-bold tracking-widest text-orange-500 font-mono block uppercase">PORTFOLIO CREDENTIALS</span>
          <h2 
            className="text-3xl font-black tracking-tight"
            style={{ fontFamily: theme === 'engineer' ? 'Space Grotesk' : 'Syne' }}
          >
            Verified Professional Certifications
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme === 'engineer' ? '#8892B0' : '#475569' }}>
            A display of verified professional credentials, validating technical course completions and outstanding volunteer service.
          </p>
        </div>

        {/* Certificate Row using flex-wrap on mobile, responsive rows on tablet/desktop */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center w-full">
          
          {/* Certificate Card 1 (Direct PDF Embedding) */}
          <div className={`w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl border-2 transition-all duration-500 flex flex-col ${
            theme === 'engineer' ? 'bg-[#112240] border-cyan-500/30 text-[#64FFDA]' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 flex items-center justify-center">
              {/* <iframe 
                src="Adesola Adejumo - 2026-06-03.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                className="w-full h-full border-0 rounded-t-xl" 
                title="Adesola Adejumo - LEAP Sustainable Tech Certification"
              /> */}
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-[9px] font-bold font-mono px-2.5 py-1 rounded shadow pointer-events-none">
                AUTODESK & LEAP ACADEMY (PDF)
              </div>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-space">Sustainable Tech Certificate of Completion</h3>
                <p className="text-xs leading-relaxed opacity-80">
                  Issued by Microsoft Wootlab Foundation and LEAP Africa. Certifying foundational mastery in implementing eco-friendly software metrics, green technological scaling, and sustainability-aligned engineering project designs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/20 flex justify-between items-center text-[10px] font-mono">
                <span>CREDENTIAL ID: #iora2zt2bq</span>
              </div>
            </div>
          </div>

          {/* Certificate Card 2 (Direct PNG Image Rendering) */}
          <div className={`w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl border-2 transition-all duration-500 flex flex-col ${
            theme === 'engineer' ? 'bg-[#112240] border-cyan-500/30 text-[#64FFDA]' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="relative overflow-hidden aspect-[4/3] bg-cyan-950 flex items-center justify-center">
              {/* <img 
                src="image.png" 
                alt="Volunteer Service Certificate" 
                className="w-full h-full object-contain hover:scale-105 transition duration-500 rounded-t-xl"
              /> */}
              <div className="absolute top-3 left-3 bg-cyan-500 text-slate-900 text-[9px] font-bold font-mono px-2.5 py-1 rounded shadow pointer-events-none">
                THE GAME CHANGER CONFERENCE
              </div>
            </div>
            <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-space">Certificate of Volunteer Service (Rewired for Wealth)</h3>
                <p className="text-xs leading-relaxed opacity-80">
                  Presented by The Game Changer Conference in recognition of outstanding grassroots dedication and altruistic volunteer leadership, optimizing communal health and financial literacy models.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/20 flex justify-between items-center text-[10px] font-mono">
                <span>CREDENTIAL ID: #TGCC-VOL-2026</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* CONTACT & SOCIAL CONNECT WORKSPACE */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className={`rounded-2xl border transition-all duration-500 shadow-lg p-6 sm:p-10 ${
          theme === 'engineer' ? 'bg-[#112240] border-[#233554]' : 'bg-white border-slate-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left detail Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-orange-500 font-mono uppercase block">LET'S CONSTRUCT AN INTERNSHIP BRIEF</span>
              <h3 
                className="text-3xl font-black tracking-tight"
                style={{ fontFamily: theme === 'engineer' ? 'Space Grotesk' : 'Syne' }}
              >
                Connect & Propose Projects
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Open for civil engineering undergraduate internships, creative content & videography consultations, and high-impact project organizing under the LEAP Africa youth networks.
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider">Connect directly on professional streams:</h4>
                <div className="flex flex-wrap gap-2.5">
                  <a 
                    href="https://www.linkedin.com/in/adesola-adejumo-2800063a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-orange-500 text-white px-4 py-2.5 rounded-lg text-xs transition duration-300 w-full sm:w-auto"
                  >
                    <IconLinkedIn />
                    <span>LinkedIn: Adesola Adejumo</span>
                  </a>
                  <a 
                    href="mailto:adesoladjm@gmail.com"
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-orange-500 text-white px-4 py-2.5 rounded-lg text-xs transition duration-300 w-full sm:w-auto"
                  >
                    <IconEnvelope />
                    <span>Email: adesoladjm@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+2349033982721"
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-orange-500 text-white px-4 py-2.5 rounded-lg text-xs transition duration-300 w-full sm:w-auto"
                  >
                    <IconPhone />
                    <span>Phone: +234 903 398 2721</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@0moade_?_r=1&_t=ZS-97649p0x108" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-orange-500 text-white px-4 py-2.5 rounded-lg text-xs transition duration-300 w-full sm:w-auto"
                  >
                    <IconTikTok />
                    <span>TikTok: @0moade_</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/0moade_?utm_source=qr&igsh=MXBsOXlzdTRpemo4Zg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-800 hover:bg-orange-500 text-white px-4 py-2.5 rounded-lg text-xs transition duration-300 w-full sm:w-auto"
                  >
                    <IconInstagram />
                    <span>Instagram: @0moade_</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form column */}
            <div className={`lg:col-span-6 p-6 rounded-2xl border border-dashed ${
              theme === 'engineer' ? 'bg-[#0A192F] border-[#233554]' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="block text-xs font-bold uppercase tracking-widest text-orange-500 font-mono mb-4">
                COMMUNICATE PROJECT IDEAS
              </span>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                
                <div className="space-y-1.5">
                  <label className="block font-semibold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Adesola Victoria"
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:border-orange-500 transition ${
                      theme === 'engineer' ? 'bg-[#112240] border-[#233554] text-white' : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-semibold">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="adesoladjm@gmail.com"
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:border-orange-500 transition ${
                      theme === 'engineer' ? 'bg-[#112240] border-[#233554] text-white' : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-semibold">Message scope</label>
                  <textarea 
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I am looking to discuss an engineering layout, a video shoot, or a LEAP proposal..."
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:border-orange-500 transition ${
                      theme === 'engineer' ? 'bg-[#112240] border-[#233554] text-white' : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white hover:bg-orange-500 font-bold py-3.5 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
                >
                  <IconSend />
                  <span>SEND IDEA</span>
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`mt-auto py-8 border-t text-xs text-center transition-all duration-500 ${
        theme === 'engineer' ? 'border-[#233554] text-[#8892B0]' : 'border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p>© 2026 Adesola Victoria Adejumo. Built with structural engineering integrity & design pride.</p>
        </div>
      </footer>

    </div>
  );
}