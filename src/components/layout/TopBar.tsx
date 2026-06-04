export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-background/60 backdrop-blur-md border-b border-primary-container/10 flex justify-between items-center px-8 transition-all">
      <div className="flex items-center flex-1">
        <h2 className="font-headline-md text-headline-md text-primary-container font-black mr-8 lg:hidden">RECO.AI</h2>
        
        <div className="relative w-full max-w-md group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary-container transition-colors">search</span>
          <input className="w-full bg-surface-container/50 border-0 border-b-2 border-outline/30 focus:border-secondary-container text-on-surface pl-10 pr-4 py-2 rounded-t-lg focus:bg-surface-container/80 focus:ring-0 transition-all font-body-md text-body-md placeholder:text-on-surface-variant/50" placeholder="Search users or items..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 transition-all hover-glow-heavy btn-animated cursor-pointer">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 transition-all hover-glow-heavy btn-animated cursor-pointer relative">
          <span className="material-symbols-outlined text-primary-container">bolt</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary-container rounded-full shadow-[0_0_8px_#fe00fe] btn-cyber-pulse"></span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 transition-all hover-glow-heavy btn-animated cursor-pointer">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
}
