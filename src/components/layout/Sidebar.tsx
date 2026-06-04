"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/models", icon: "model_training", label: "Models" },
    { href: "/", icon: "recommend", label: "Recommendations" },
    { href: "/analytics", icon: "monitoring", label: "Analytics" },
    { href: "/sources", icon: "database", label: "Feature Store" },
    { href: "/dashboard", icon: "settings", label: "Settings" },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-background/80 backdrop-blur-xl border-r border-primary-container/20 shadow-[0_0_20px_rgba(210,240,0,0.1)] flex flex-col py-8 z-50">
      <div className="px-6 mb-12 flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-surface-container overflow-hidden relative border border-primary-container/30 hover-glow-heavy">
          <img
            alt="AI Persona Avatar"
            className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsV_6LTRABzLUMTZFQ4HOjRML5SfhVBIqjRJsRQeQbEUocQiaVx4y66vjo8HkqfSCKaCkdSL9tgq7AG2hm_QnhXw5HO9kYIs6CialEFOBjtVKI7Z3lXHbs3cPFOiK3Kqr_PxQcU33eLsGTM2O_n0fxt6idcp7OOtmyJB686vRPMDh1HPbi1otUVsTakvhrs57jtojnTm2xBzpBVDvbKULbqxKiApGiipcMZcfVj-EoEMNq5AGOcSkGkDqFOTsU5xOUB-VTG_q6Gwo"
          />
          <div className="absolute inset-0 bg-primary-container/20 mix-blend-color"></div>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md text-primary-container tracking-tighter">RECO.AI</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant/70 tracking-widest mt-1">v3.1.0-rc</p>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col gap-2 px-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href}
              href={link.href} 
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-label-bold text-label-bold transition-all duration-300 ease-out active:scale-95 btn-animated ${
                isActive 
                  ? "text-on-primary-container bg-primary-container/20 border-r-4 border-primary-container neon-glow-primary hover-glow-heavy" 
                  : "text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10"
              }`}
            >
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
      
      <div className="px-4 mt-auto mb-6">
        <button className="w-full bg-primary-container text-on-primary-container font-label-bold text-label-bold py-4 rounded-full neon-glow-primary btn-animated hover-glow-heavy flex items-center justify-center gap-2">
          Train Model
          <span className="material-symbols-outlined text-[18px]">psychology</span>
        </button>
      </div>
      
      <div className="flex flex-col gap-2 px-2">
        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-on-surface-variant/60 hover:text-primary-container transition-colors rounded-lg hover:bg-primary-container/10 font-label-sm text-label-sm btn-animated">
          <span className="material-symbols-outlined text-[16px]">help_center</span>
          Documentation
        </Link>
        <Link href="#" className="flex items-center gap-4 px-4 py-2 text-on-surface-variant/60 hover:text-primary-container transition-colors rounded-lg hover:bg-primary-container/10 font-label-sm text-label-sm btn-animated">
          <span className="material-symbols-outlined text-[16px]">api</span>
          API Reference
        </Link>
      </div>
    </aside>
  );
}
