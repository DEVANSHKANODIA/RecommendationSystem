export default function Feed() {
  return (
    <>
      {/* Header & Filters */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tighter">
            For You: <span className="text-gradient font-black">Recommendations</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Real-time inference engine. Generating personalized vectors based on historical engagement and collaborative filtering.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="px-5 py-2 rounded-full bg-tertiary-container text-on-tertiary-container font-label-bold text-label-bold shadow-[0_0_15px_rgba(125,244,255,0.3)] border border-tertiary-container/50 btn-animated hover-glow-heavy">
            Trending
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container border border-outline/30 text-on-surface-variant hover:border-secondary-container hover:text-secondary-container transition-all font-label-bold text-label-bold btn-animated">
            Collaborative Filtering
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container border border-outline/30 text-on-surface-variant hover:border-secondary-container hover:text-secondary-container transition-all font-label-bold text-label-bold btn-animated">
            Content-Based
          </button>
          <button className="px-5 py-2 rounded-full bg-surface-container border border-outline/30 text-on-surface-variant hover:border-secondary-container hover:text-secondary-container transition-all font-label-bold text-label-bold flex items-center gap-2 btn-animated">
            Cold Start (Exploration)
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          </button>
        </div>
      </section>

      {/* Bento Grid / Masonry Layout */}
      <section className="grid grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Hero Card (Span 8) */}
        <article className="col-span-12 lg:col-span-8 row-span-2 glass-card rounded-xl p-1 relative overflow-hidden group cursor-pointer transition-all duration-500 hover-glow-heavy border border-outline/20 hover:border-primary-container">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
          <img
            alt="AI Recommended Visual"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQT_e8sYh3G5FNCZWsfyLJLtM_gMYwcLmgs5QUCPfubkvS--aaW9k1iT_ka5QaGUg2o-emVTan_oAvRJz8FN3t3ibNuqzCNcSEhJIKsEz54iaQ_QNuU2xNSCeHHkEvIACFXbRWV45ImtgsgCRGiQobXQs7pcXRX5M0Fh31EOnKrYHc7TGjY_w4MWB3Cs2zQt4OiLe3XcY4pg_Dn3nIFIbtvYS7Ce6nxeSI2xO_nPtePtc_piZtxYGyqNuBLra3WRD2GvSnWFneFV0"
          />
          <div className="relative z-20 h-full flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 bg-surface-container/80 backdrop-blur-md rounded-full font-label-sm text-label-sm text-primary-container border border-primary-container/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span> Top Pick for User_982
              </span>
              <button className="w-10 h-10 rounded-full bg-surface-container/50 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-secondary-container transition-colors btn-animated hover-glow-secondary-heavy">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight group-hover:text-primary-container transition-colors">Neural Embedding Framework v2</h3>
              <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-2 text-primary-container">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Relevance Score: 99.8%
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">trending_up</span>
                  Expected CTR: 14.2%
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">category</span>
                  Category: AI Tools
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary Card (Span 4) */}
        <article className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 glass-card rounded-xl p-5 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden hover-glow-secondary-heavy border border-outline/20 hover:border-secondary-container">
          <div className="absolute right-0 top-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-3xl group-hover:bg-secondary-container/30 transition-all duration-700"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-outline/20 group-hover:bg-secondary-container/20 transition-colors">
              <span className="material-symbols-outlined text-secondary-container text-2xl group-hover:animate-spin">model_training</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">Active Model</span>
          </div>
          <div className="relative z-10">
            <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Neural Collaborative Filtering</h4>
            <div className="flex items-center justify-between">
              <span className="font-body-md text-body-md text-on-surface-variant">Training epoch 45/50...</span>
              <span className="font-label-bold text-label-bold text-secondary-container">90%</span>
            </div>
            <div className="w-full h-1 bg-surface-container mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-secondary-container w-[90%] shadow-[0_0_10px_#fe00fe] animate-pulse"></div>
            </div>
          </div>
        </article>

        {/* Tertiary Data Card (Span 4) */}
        <article className="col-span-12 md:col-span-6 lg:col-span-4 row-span-1 glass-card rounded-xl p-5 flex flex-col justify-between group hover-glow-heavy border border-outline/20 hover:border-tertiary-container transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary-container">ssid_chart</span>
              <h4 className="font-label-bold text-label-bold text-on-surface">Feature Importance</h4>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-2 h-24 mt-4">
            <div className="w-full bg-tertiary-container/20 h-[40%] rounded-t-sm group-hover:bg-tertiary-container/40 transition-all duration-500"></div>
            <div className="w-full bg-tertiary-container/20 h-[60%] rounded-t-sm group-hover:bg-tertiary-container/40 transition-all duration-500 delay-75"></div>
            <div className="w-full bg-tertiary-container/20 h-[30%] rounded-t-sm group-hover:bg-tertiary-container/40 transition-all duration-500 delay-100"></div>
            <div className="w-full bg-tertiary-container/60 h-[80%] rounded-t-sm group-hover:bg-tertiary-container transition-all duration-300 shadow-[0_0_10px_#7df4ff] scale-105"></div>
            <div className="w-full bg-tertiary-container/20 h-[50%] rounded-t-sm group-hover:bg-tertiary-container/40 transition-all duration-500 delay-150"></div>
            <div className="w-full bg-tertiary-container/20 h-[90%] rounded-t-sm group-hover:bg-tertiary-container/40 transition-all duration-500 delay-200"></div>
          </div>
          <div className="mt-4 pt-4 border-t border-outline/10 flex justify-between font-label-sm text-label-sm">
            <span className="text-on-surface-variant">Top Factor</span>
            <span className="text-tertiary-container font-label-bold">User History</span>
          </div>
        </article>

        {/* Small Text/Log Card (Span 4) */}
        <article className="col-span-12 lg:col-span-4 row-span-1 glass-card rounded-xl p-5 hover-glow-heavy border border-outline/20 hover:border-primary-container transition-all">
          <h4 className="font-label-bold text-label-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">terminal</span> Inference Stream
          </h4>
          <ul className="flex flex-col gap-3 font-body-md text-body-md text-sm text-on-surface-variant font-mono">
            <li className="flex gap-3 border-b border-outline/10 pb-2 hover:text-primary-container transition-colors cursor-pointer">
              <span className="text-primary-container opacity-70">[14:02:01]</span>
              <span>Req #4421 served: 12 items</span>
            </li>
            <li className="flex gap-3 border-b border-outline/10 pb-2 hover:text-primary-container transition-colors cursor-pointer">
              <span className="text-primary-container opacity-70">[14:02:04]</span>
              <span className="text-secondary-container">WARN: Cold start detected for User_91</span>
            </li>
            <li className="flex gap-3 hover:text-primary-container transition-colors cursor-pointer">
              <span className="text-primary-container opacity-70">[14:02:11]</span>
              <span>Fallback to Popularity Model... OK</span>
            </li>
          </ul>
        </article>

        {/* Additional Image Card (Span 8) */}
        <article className="col-span-12 lg:col-span-8 row-span-1 glass-card rounded-xl p-1 relative overflow-hidden group cursor-pointer hover-glow-heavy border border-outline/20 hover:border-tertiary-container transition-all duration-500">
          <div className="absolute inset-0 bg-background/60 z-10 group-hover:bg-background/30 transition-colors duration-700"></div>
          <img
            alt="Cybernetic core interface"
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjHpCJpl_7K1S6NcLq39jZHDCn8YCdW4ZyQgl5ciniHpKuW1havJsWoqVjv9MhFdn4sdl4Z7SPJNaq-h1MIIkgD8yPqApc5ZCv-R4uIbPHKYpZqN6Rf2trwrOGakFCPuGh7g_vhypUZbg0vvNfOjMBcXL2VDEa7SsulIfWfqvB7eWTBSFuvK1w0eMhObfVRh95maUb_dCCr8RvvSJFSkpeoC6XFUe6OpnoFYN12syN8LEyt-1-9WU99skIiq3pPrz4nuw3XFMMm8k"
          />
          <div className="relative z-20 h-full p-6 flex items-center justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-tertiary-container transition-colors">Embedding Space Generation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Mapping 10 million items into dense vector representations for faster approximate nearest neighbor search.</p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container/80 backdrop-blur-md px-6 py-4 rounded-xl border border-outline/20 group-hover:border-tertiary-container/50 transition-colors">
              <div className="text-center">
                <div className="font-headline-md text-headline-md text-tertiary-container">256-D</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant mt-1">Vector Size</div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
