import { MessageCircle, BarChart3, Activity, Settings } from 'lucide-react';

const rightPanelItems = [
  { name: 'Chat', icon: MessageCircle, active: false, badge: '2' },
  { name: 'Insights', icon: BarChart3, active: true, badge: '3' },
  { name: 'Activity Monitor', icon: Activity, active: false },
  { name: 'AI Settings', icon: Settings, active: false },
];

export function RightPanel() {
  return (
    <aside className="w-16 bg-gray-900 border-l border-gray-700 flex flex-col p-4">
      {/* Top Items */}
      <div className="space-y-4">
        {rightPanelItems.map((item) => (
          <div key={item.name} className="relative">
            <button
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                item.active 
                  ? 'bg-gray-800 text-blue-400' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
            </button>
            {item.badge && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">{item.badge}</span>
              </div>
            )}
            {/* Separator Line */}
            {item.name !== 'AI Settings' && (
              <div className="w-8 h-px bg-gray-700 mx-auto mt-4"></div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
} 