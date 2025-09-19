import { Home, Shield, Settings, Workflow, AlertTriangle, Package, FileText } from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', icon: Home, active: true },
  { name: 'Compliance', icon: Shield, active: false },
  { name: 'Integrations', icon: Package, active: false },
  { name: 'Workflow', icon: Workflow, active: false },
  { name: 'Case Management', icon: FileText, active: false },
  { name: 'AI Copilot', icon: AlertTriangle, active: false },
  { name: 'Assets', icon: Package, active: false },
  { name: 'Attack Path', icon: AlertTriangle, active: false },
  { name: 'Risk Register', icon: AlertTriangle, active: false },
  { name: 'Misconfiguration', icon: AlertTriangle, active: false },
  { name: 'Vulnerabilities', icon: AlertTriangle, active: false },
];

export function Sidebar() {
  return (
    <aside className="w-16 bg-gray-900 border-r border-gray-700 flex flex-col">
      {/* Logo Section */}
      <div className="p-4 flex justify-center">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
        </div>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-4">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <button
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  item.active 
                    ? 'bg-gray-800 text-blue-400' 
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Bottom Section */}
      <div className="p-2 space-y-4">
        {/* AI Settings */}
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
        </div>
        
        {/* Settings */}
        <button className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-800">
          <Settings className="w-5 h-5" />
        </button>
        
        {/* User Avatar */}
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium text-sm">A</span>
        </div>
      </div>
    </aside>
  );
} 