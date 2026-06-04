export default function FeatureStore() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-variant/50 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary-container font-label-sm text-label-sm mb-4">
            <span className="material-symbols-outlined text-sm">database</span>
            Unified Feature Store
          </div>
          <h1 className="font-display-md text-display-md text-inverse-surface tracking-tight mb-2">Feature Retrieval</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Manage online and offline parity for high-scale feature retrieval. Track caching latency and feature freshness.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Fan-out QPS</p>
            <p className="font-headline-md text-headline-md text-secondary-container">3.2M</p>
          </div>
          <div className="text-right">
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">P99 Latency</p>
            <p className="font-headline-md text-headline-md text-primary-container">12ms</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature Categories */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-headline-md text-headline-md text-inverse-surface flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary-container">category</span>
            Feature Categories
          </h3>
          
          {/* Item Features */}
          <div className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-primary-container/50 transition-all hover-glow-heavy border border-outline/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-[40px] group-hover:bg-primary-container/30 transition-all duration-500"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary-container">Item Features</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">E.g., `product_category`, `avg_review_rating_24h`</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary-container font-label-sm text-label-sm">High Cache Hit</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Cardinality</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">Low (4.2M)</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Freshness</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">Stale-ok (2m)</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Retrieval</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">L1 In-Process</p>
              </div>
            </div>
          </div>

          {/* User Features */}
          <div className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-secondary-container/50 transition-all hover-glow-secondary-heavy border border-outline/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-[40px] group-hover:bg-secondary-container/30 transition-all duration-500"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-secondary-container">User Features</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">E.g., `user_favorite_categories`, `site_spend_past_month`</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-label-sm text-label-sm">Dynamic</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Cardinality</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">High (125M)</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Freshness</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">Real-time (ms)</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Retrieval</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">L2 Redis Cache</p>
              </div>
            </div>
          </div>

          {/* Cross Features */}
          <div className="glass-panel p-6 rounded-lg relative overflow-hidden group hover:border-tertiary-fixed/50 transition-all hover-glow-heavy border border-outline/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed/10 rounded-full blur-[40px] group-hover:bg-tertiary-fixed/30 transition-all duration-500"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-tertiary-fixed">User-Item Cross Features</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">E.g., `user_has_bought_before`, `is_in_favorite_category`</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed font-label-sm text-label-sm">Computed</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Cardinality</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">O(U x I)</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Freshness</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">On-demand</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Retrieval</p>
                <p className="font-body-lg text-body-lg text-inverse-surface">Online Compute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sync and Health */}
        <div className="space-y-6">
          <h3 className="font-headline-md text-headline-md text-inverse-surface flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary-container">sync_alt</span>
            System Health
          </h3>
          
          <div className="glass-panel p-6 rounded-lg border border-outline/20 group hover-glow-heavy transition-all">
            <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-widest">Online-Offline Parity</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined">rule</span>
              </div>
              <div>
                <p className="font-body-lg text-body-lg text-inverse-surface">99.98% Match</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Training vs Serving Drift</p>
              </div>
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-2 mb-2">
              <div className="bg-primary-container h-2 rounded-full" style={{ width: '99.98%' }}></div>
            </div>
            <p className="font-label-sm text-label-sm text-primary-container neon-text-glow">Within tolerances</p>
          </div>

          <div className="glass-panel p-6 rounded-lg border border-outline/20 group hover-glow-secondary-heavy transition-all">
            <h4 className="font-label-bold text-label-bold text-on-surface-variant mb-4 uppercase tracking-widest">Redis L2 Cache</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Hit Rate</span>
                  <span className="font-label-sm text-label-sm text-inverse-surface">94.2%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-1.5">
                  <div className="bg-secondary-container h-1.5 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Memory Usage</span>
                  <span className="font-label-sm text-label-sm text-inverse-surface">1.2 TB / 2.0 TB</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-1.5">
                  <div className="bg-tertiary-fixed h-1.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 rounded-lg border border-secondary-container text-secondary-container font-label-bold text-label-bold hover:bg-secondary-container/10 transition-all btn-animated">
              View Cluster Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
