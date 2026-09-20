import React from "react";
import { Navbar } from "./Navbar";

interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0B0908] text-[#F3EEE8] relative overflow-x-hidden selection:bg-[#E69A3A] selection:text-[#0B0908]">
      {/* Ambient background lighting */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E69A3A]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#A86F2C]/15 rounded-full blur-[160px]" />
      </div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default PageShell;
