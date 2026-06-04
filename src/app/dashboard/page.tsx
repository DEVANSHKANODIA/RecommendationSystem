export default function Dashboard() {
  return (
    <>
      {/* Hero Section: Priority Recommendations */}
      <section className="mb-section-gap">
        <div className="glass-panel rounded-xl p-8 relative overflow-hidden group hover-glow-heavy transition-all duration-500 border border-outline/20 hover:border-primary-container/50">
          {/* Atmospheric Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-container/40 transition-all duration-700"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/10 border border-tertiary-fixed/30 text-tertiary-fixed font-label-sm text-label-sm mb-4">
                <span className="material-symbols-outlined text-sm">warning</span>
                Model Drift Detected
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-4 text-primary-container neon-text-glow">Collaborative Filtering Degraded</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 opacity-90">
                Precision@10 has dropped by 4.2% over the last 12 hours due to an influx of new items (Cold Start). Re-training the embedding layers can recover accuracy. Immediate deployment recommended.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary px-8 py-3 rounded-full font-label-bold text-label-bold flex items-center gap-2 btn-animated hover-glow-heavy">
                  <span className="material-symbols-outlined">model_training</span>
                  Retrain Model
                </button>
                <button className="px-8 py-3 rounded-full border border-secondary-container text-secondary-container font-label-bold text-label-bold hover:bg-secondary-container/10 transition-all btn-animated hover-glow-secondary-heavy">
                  Analyze Drift
                </button>
              </div>
            </div>
            {/* Visual representation of logic */}
            <div className="relative h-64 md:h-full min-h-[300px] border border-primary-container/20 rounded-lg overflow-hidden bg-black/40 group-hover:border-primary-container/50 transition-all duration-500">
              <img
                alt="Abstract visualization of a neural network"
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtD25flNr6NPGlaT2uoD1983ZrBX4bShYHdqYpMNsmGmMpeJVwgHs8i5oXH2gYepn67LBqR4x79kn4D-OLruZQyt4FPdA5p-kJaqQ5IuPXirj7fqW2T9k6KdxYFJPF2W-m7Pw6go8dQHZT_y8OX9-TpISP4wgjb8fjhlm5Rxlj3Zx8SqxoRD4LHmhHT1MyjWq2gvgbWV_z_E3M6sMAowBq2IW6t6rH-1D_Fj08FUnKqxvDN1wDddgZ5_1xbjO0r4uwziUPBTDBvHY"
              />
              {/* Overlay grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(210,240,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(210,240,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Data Streams (Span 2) */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline-md text-headline-md text-inverse-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">data_exploration</span>
              Active Recommendation Streams
            </h3>
            <button className="text-on-surface-variant hover:text-primary-container transition-colors btn-animated">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Stream Card 1 */}
            <div className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-secondary-container/50 transition-all hover-glow-secondary-heavy border border-outline/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-[40px] group-hover:bg-secondary-container/30 transition-all duration-500"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-widest">Candidate Generation API</p>
                  <h4 className="font-headline-md text-headline-md text-primary group-hover:text-secondary-container transition-colors">12,450 req/s</h4>
                </div>
                <span className="material-symbols-outlined text-secondary-container group-hover:-translate-y-1 group-hover:scale-110 transition-transform">bolt</span>
              </div>
              <div className="h-16 mt-4 relative">
                {/* Faux Chart using gradients */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-secondary-container/20 to-transparent group-hover:from-secondary-container/40 transition-colors duration-500"></div>
                <svg className="w-full h-full text-secondary-container group-hover:drop-shadow-[0_0_8px_#fe00fe] transition-all" preserveAspectRatio="none" viewBox="0 0 100 30">
                  <polyline fill="none" points="0,30 20,20 40,25 60,10 80,15 100,5" stroke="currentColor" strokeWidth="2"></polyline>
                </svg>
              </div>
            </div>
            {/* Stream Card 2 */}
            <div className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-tertiary-fixed/50 transition-all hover-glow-heavy border border-outline/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed/10 rounded-full blur-[40px] group-hover:bg-tertiary-fixed/30 transition-all duration-500"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-widest">Feature Retrieval (Redis L2)</p>
                  <h4 className="font-headline-md text-headline-md text-primary group-hover:text-tertiary-fixed transition-colors">3.2M req/s</h4>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed group-hover:rotate-180 transition-transform duration-700">sync</span>
              </div>
              <div className="h-16 mt-4 relative">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-tertiary-fixed/20 to-transparent group-hover:from-tertiary-fixed/40 transition-colors duration-500"></div>
                <svg className="w-full h-full text-tertiary-fixed group-hover:drop-shadow-[0_0_8px_#7df4ff] transition-all" preserveAspectRatio="none" viewBox="0 0 100 30">
                  <polyline fill="none" points="0,20 20,25 40,15 60,10 80,5 100,2" stroke="currentColor" strokeWidth="2"></polyline>
                </svg>
              </div>
            </div>
          </div>
          {/* List format within panel */}
          <div className="glass-panel rounded-lg mt-4 border border-outline/20">
            <div className="p-4 border-b border-white/5 font-label-bold text-label-bold text-on-surface-variant grid grid-cols-12 gap-4">
              <div className="col-span-5">CANDIDATE SOURCE</div>
              <div className="col-span-3">STATUS</div>
              <div className="col-span-4 text-right">METRICS</div>
            </div>
            <div className="divide-y divide-gradient-to-r from-transparent via-white/10 to-transparent">
              <div className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="col-span-5 font-body-md text-body-md text-inverse-surface flex items-center gap-3 group-hover:text-primary-container transition-colors">
                  <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)] group-hover:animate-ping"></span>
                  Vector Search (Milvus)
                </div>
                <div className="col-span-3">
                  <span className="px-2 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm">INDEXING</span>
                </div>
                <div className="col-span-4 font-body-md text-body-md text-right text-on-surface-variant">12.4M Vectors</div>
              </div>
              <div className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="col-span-5 font-body-md text-body-md text-inverse-surface flex items-center gap-3 group-hover:text-secondary-container transition-colors">
                  <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_var(--color-secondary-container)] group-hover:animate-pulse"></span>
                  Matrix Factorization (CF)
                </div>
                <div className="col-span-3">
                  <span className="px-2 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-label-sm text-label-sm">TRAINING</span>
                </div>
                <div className="col-span-4 font-body-md text-body-md text-right text-on-surface-variant">Epoch 12/50</div>
              </div>
              <div className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="col-span-5 font-body-md text-body-md text-inverse-surface flex items-center gap-3 group-hover:text-tertiary-fixed transition-colors">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed shadow-[0_0_8px_var(--color-tertiary-fixed)]"></span>
                  Popular Items Fallback
                </div>
                <div className="col-span-3">
                  <span className="px-2 py-1 rounded-full bg-tertiary-fixed/10 text-tertiary-fixed font-label-sm text-label-sm">CACHED</span>
                </div>
                <div className="col-span-4 font-body-md text-body-md text-right text-on-surface-variant">TTL: 2m</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions (Side Panel) */}
        <section className="space-y-6">
          <h3 className="font-headline-md text-headline-md text-inverse-surface flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary-container">bolt</span>
            Quick Actions
          </h3>
          <div className="flex flex-col gap-4">
            <button className="glass-panel p-4 rounded-lg flex items-center justify-between group hover:border-primary-container/50 transition-all text-left border border-outline/20 hover-glow-heavy btn-animated">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-black transition-all shadow-[0_0_15px_rgba(210,240,0,0)] group-hover:shadow-[0_0_15px_rgba(210,240,0,0.4)] group-hover:rotate-180 duration-500">
                  <span className="material-symbols-outlined">restart_alt</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-inverse-surface">Retrain Full Model</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Start full epoch cycle</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors group-hover:translate-x-1">chevron_right</span>
            </button>
            <button className="glass-panel p-4 rounded-lg flex items-center justify-between group hover:border-secondary-container/50 transition-all text-left border border-outline/20 hover-glow-secondary-heavy btn-animated">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary-container group-hover:bg-secondary-container group-hover:text-black transition-all shadow-[0_0_15px_rgba(254,0,254,0)] group-hover:shadow-[0_0_15px_rgba(254,0,254,0.4)] group-hover:scale-110 duration-300">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-inverse-surface">Deploy to Production</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Promote staging model to prod</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary-container transition-colors group-hover:translate-x-1">chevron_right</span>
            </button>
            <button className="glass-panel p-4 rounded-lg flex items-center justify-between group hover:border-tertiary-fixed/50 transition-all text-left border border-outline/20 hover-glow-heavy btn-animated">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed/10 flex items-center justify-center text-tertiary-fixed group-hover:bg-tertiary-fixed group-hover:text-black transition-all shadow-[0_0_15px_rgba(125,244,255,0)] group-hover:shadow-[0_0_15px_rgba(125,244,255,0.4)] group-hover:animate-pulse">
                  <span className="material-symbols-outlined">data_object</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-inverse-surface">Flush Feature Cache</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Clear Redis L2 Cache</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary-fixed transition-colors group-hover:translate-x-1">chevron_right</span>
            </button>
          </div>
          {/* System Status Mini Card */}
          <div className="glass-panel p-6 rounded-lg mt-8 relative overflow-hidden group hover:border-primary-container/50 transition-all hover-glow-heavy border border-outline/20">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-container/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
            <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-widest">Inference Engine Health</h4>
            <div className="text-center">
              <div className="inline-block relative">
                {/* Circular Progress Faux */}
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-white/10" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="text-primary-container drop-shadow-[0_0_5px_rgba(210,240,0,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(210,240,0,0.8)] transition-all" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset="10" strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-headline-md text-headline-md text-primary group-hover:scale-110 transition-transform">
                  99%
                </div>
              </div>
              <p className="font-label-sm text-label-sm text-primary-container mt-2 neon-text-glow">Optimal</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
