import { Search, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="h-20 bg-gray-900 border-b border-gray-700 px-6 flex items-center justify-between">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboards</h1>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="bg-gray-800 rounded-lg px-4 py-3 flex items-center space-x-3 min-w-96">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm">⌘ + M to start conversation</span>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm">Agent</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
} 