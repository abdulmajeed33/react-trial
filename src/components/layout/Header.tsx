import { Search, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="h-20 bg-background-dark-neutral-neutral border-b border-dark-neutral-three px-6 flex items-center justify-between">
      {/* Page Title */}
      <div>
        <h1 className="text-heading4 font-semibold text-text-dark-primary">Dashboards</h1>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="bg-background-dark-neutral-three rounded-lg px-4 py-3 flex items-center space-x-3 min-w-96 border border-border-dark-neutral-neutral">
          <Search className="w-4 h-4 text-icon-dark-neutral-neutral" />
          <span className="text-text-dark-secondary text-body-small">⌘ + M to start conversation</span>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-4 h-4 bg-neutral-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-icon-dark-neutral-neutral rounded-full"></div>
            </div>
            <span className="text-text-dark-secondary text-label">Agent</span>
            <ChevronDown className="w-4 h-4 text-icon-dark-neutral-neutral" />
          </div>
        </div>
      </div>
    </header>
  );
} 