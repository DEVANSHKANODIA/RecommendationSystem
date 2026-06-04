export default function Analytics() {
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-variant/50 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-label-sm text-label-sm uppercase tracking-widest">Model Metrics</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Inference Status: Optimal</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-background tracking-tighter">Model <span className="text-primary-container neon-text-primary">Performance</span></h2>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-secondary text-secondary font-label-bold text-label-bold hover:bg-secondary/10 transition-colors uppercase flex items-center gap-2 btn-animated hover-glow-secondary-heavy">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Parameters
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container text-on-background border border-surface-variant hover:border-primary-container font-label-bold text-label-bold transition-colors uppercase flex items-center gap-2 btn-animated hover-glow-heavy">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </button>
        </div>
      </div>

      {/* Primary Chart Area (Accuracy Over Time) */}
      <section className="w-full glass-panel rounded-xl p-8 relative overflow-hidden group hover-glow-heavy transition-all duration-500 border border-outline/20 hover:border-primary-container/50">
        {/* Highlight line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-container via-primary-container to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-background">Precision@K Over Time</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time CTR and validation accuracy for active recommender.</p>
          </div>
          <div className="text-right">
            <div className="font-headline-lg text-headline-lg text-primary-container neon-text-primary group-hover:scale-105 transition-transform origin-right">94.2%</div>
            <div className="font-label-sm text-label-sm text-secondary uppercase tracking-widest flex items-center justify-end gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +1.1% Delta
            </div>
          </div>
        </div>

        {/* Simulated Glowing Chart Area */}
        <div className="w-full h-80 relative">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-t border-on-surface-variant w-full h-0"></div>
            <div className="border-t border-on-surface-variant w-full h-0"></div>
            <div className="border-t border-on-surface-variant w-full h-0"></div>
            <div className="border-t border-on-surface-variant w-full h-0"></div>
            <div className="border-t border-on-surface-variant w-full h-0"></div>
          </div>
          {/* SVG Line */}
          <svg className="w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 1000 300">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#d2f000" stopOpacity="0.4"></stop>
                <stop offset="100%" stopColor="#d2f000" stopOpacity="0"></stop>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur result="coloredBlur" stdDeviation="4"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path d="M0,250 C100,220 200,280 300,180 C400,80 500,200 600,120 C700,40 800,90 900,40 L1000,20 L1000,300 L0,300 Z" fill="url(#chartGradient)" className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"></path>
            <path className="path-animate group-hover:stroke-[6px] transition-all duration-500" d="M0,250 C100,220 200,280 300,180 C400,80 500,200 600,120 C700,40 800,90 900,40 L1000,20" fill="none" filter="url(#glow)" stroke="#d2f000" strokeWidth="4"></path>
            {/* Data Points */}
            <circle cx="300" cy="180" fill="#131313" filter="url(#glow)" r="6" stroke="#d2f000" strokeWidth="3" className="group-hover:r-[8px] transition-all"></circle>
            <circle cx="600" cy="120" fill="#131313" filter="url(#glow)" r="6" stroke="#d2f000" strokeWidth="3" className="group-hover:r-[8px] transition-all"></circle>
            <circle cx="900" cy="40" fill="#131313" filter="url(#glow)" r="6" stroke="#d2f000" strokeWidth="3" className="group-hover:r-[8px] transition-all"></circle>
          </svg>
        </div>
        {/* X Axis Labels */}
        <div className="flex justify-between mt-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          <span>T-00:00</span>
          <span>T-04:00</span>
          <span>T-08:00</span>
          <span>T-12:00</span>
          <span>T-16:00</span>
        </div>
      </section>

      {/* Secondary Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Neural Optimization (Radial Gauge) */}
        <div className="glass-panel glass-panel-orchid rounded-xl p-6 relative group hover:border-secondary/50 transition-all hover-glow-secondary-heavy border border-outline/20">
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-secondary opacity-80 group-hover:w-16 transition-all duration-500"></div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary group-hover:rotate-180 transition-transform duration-700">memory</span>
            <h4 className="font-label-bold text-label-bold text-on-background uppercase">CF Precision</h4>
          </div>
          <div className="flex justify-center items-center relative h-40">
            <svg className="w-32 h-32 transform -rotate-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="40" stroke="#353534" strokeDasharray="251.2" strokeDashoffset="0" strokeWidth="8"></circle>
              <circle className="neon-glow-secondary drop-shadow-[0_0_10px_rgba(254,0,254,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(254,0,254,1)] transition-all" cx="50" cy="50" fill="none" r="40" stroke="#fe00fe" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline-md text-headline-md text-secondary text-shadow-[0_0_10px_rgba(254,0,254,0.5)] group-hover:scale-110 transition-transform">76%</span>
            </div>
          </div>
          <div className="text-center mt-4 font-label-sm text-label-sm text-on-surface-variant">Embedding convergence stable.</div>
        </div>

        {/* User Affinity (Bars) */}
        <div className="glass-panel rounded-xl p-6 relative group hover:border-primary-container/50 transition-all hover-glow-heavy border border-outline/20">
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary-container opacity-80 group-hover:w-16 transition-all duration-500"></div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary-container group-hover:scale-110 transition-transform">groups</span>
            <h4 className="font-label-bold text-label-bold text-on-background uppercase">User Segment CTR</h4>
          </div>
          <div className="space-y-5">
            <div className="group/bar cursor-pointer">
              <div className="flex justify-between font-label-sm text-label-sm mb-2 group-hover/bar:text-primary-container transition-colors">
                <span className="text-on-background">Segment Alpha (Power Users)</span>
                <span className="text-primary-container font-bold">14.2%</span>
              </div>
              <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-[88%] shadow-[0_0_10px_rgba(210,240,0,0.8)] group-hover/bar:bg-white transition-colors"></div>
              </div>
            </div>
            <div className="group/bar cursor-pointer">
              <div className="flex justify-between font-label-sm text-label-sm mb-2 group-hover/bar:text-primary-container transition-colors">
                <span className="text-on-background">Segment Beta (Casual)</span>
                <span className="text-primary-container font-bold">8.4%</span>
              </div>
              <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-[64%] opacity-80 group-hover/bar:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="group/bar cursor-pointer">
              <div className="flex justify-between font-label-sm text-label-sm mb-2 group-hover/bar:text-secondary transition-colors">
                <span className="text-on-background">Cold Start Users</span>
                <span className="text-secondary font-bold">2.1%</span>
              </div>
              <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[21%] shadow-[0_0_10px_rgba(254,0,254,0.8)] group-hover/bar:bg-white transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Context Awareness (Progress Indicators) */}
        <div className="glass-panel rounded-xl p-6 relative flex flex-col justify-between group hover:border-surface-variant hover:bg-surface-variant/20 transition-all border border-outline/20">
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-on-surface-variant opacity-80 group-hover:w-16 transition-all duration-500"></div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white transition-colors">radar</span>
            <h4 className="font-label-bold text-label-bold text-on-background uppercase">Inference Health</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="bg-surface-container/50 border border-surface-variant rounded-lg p-4 flex flex-col justify-center items-center text-center group-hover:border-primary-container/30 transition-colors">
              <span className="material-symbols-outlined text-[32px] text-primary-container mb-2 group-hover:scale-110 transition-transform">language</span>
              <span className="font-headline-md text-headline-md text-on-background">12.4k</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Req/s</span>
            </div>
            <div className="bg-surface-container/50 border border-surface-variant rounded-lg p-4 flex flex-col justify-center items-center text-center group-hover:border-secondary/30 transition-colors">
              <span className="material-symbols-outlined text-[32px] text-secondary mb-2 group-hover:scale-110 transition-transform">speed</span>
              <span className="font-headline-md text-headline-md text-on-background">48ms</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">p99 Latency</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
