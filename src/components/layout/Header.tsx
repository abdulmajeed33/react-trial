import { MagicIcon } from '../ui/MagicIcon';

export function Header() {
  return (
    <header 
      className="h-20 flex items-center justify-end gap-8 px-6 py-4 bg-background-dark-neutral-transparent border-b border-background-dark-neutral-three"
    >
      {/* Page Title */}
      <div className="mr-auto">
        <h1 className="font-inter font-semibold text-heading4 text-text-dark-primary tracking-tight">
          Dashboards
        </h1>
      </div>
      
      {/* Right Section Container */}
      <div className="flex flex-col items-end gap-2.5 pl-28 flex-1">
        {/* Search/Conversation Container */}
        <div 
          className="flex items-center gap-3 p-3 rounded-lg w-[400px] bg-background-dark-neutral-transparent border border-border-primary-two-dark shadow-[0px_8px_8px_0px_rgba(42,61,214,0.16)]"
        >
          {/* Icon and Text Container */}
          <div className="flex items-center gap-1 flex-1">
            <div className="flex items-center gap-2">
              <MagicIcon className="w-4 h-4" />
              <span className="font-inter font-normal text-body-small text-text-dark-secondary">
                ⌘ + M to start conversation
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 