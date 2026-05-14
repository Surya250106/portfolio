import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-outfit font-bold text-white tracking-tighter mb-4 md:mb-0">
          Dev<span className="text-blue-500">.</span>Portfolio
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Alex Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
