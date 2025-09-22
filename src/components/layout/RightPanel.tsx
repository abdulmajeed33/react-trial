import { MessageCircle, BarChart3, Activity, Settings } from 'lucide-react';

const rightPanelItems = [
  { name: 'Chat', icon: MessageCircle, active: true, badge: '2' },
  { name: 'Insights', icon: BarChart3, active: false, badge: '3' },
  { name: 'Activity Monitor', icon: Activity, active: false },
  { name: 'AI Settings', icon: Settings, active: false },
];

export function RightPanel() {
  return (
    <aside className="bg-background-dark-neutral-neutral border-l border-border-dark-neutral-three flex flex-col px-4 py-6 gap-64">
      {/* Top Items */}
      <div className="flex flex-col items-center gap-4">
        {rightPanelItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.name} className="relative flex flex-col items-center gap-1">
              <button
                className={`relative flex items-center justify-center transition-colors p-1 rounded-lg w-10 h-8 ${
                  item.active 
                    ? 'bg-background-dark-neutral-three text-icon-dark-primary-active' 
                    : 'text-icon-dark-neutral-neutral hover:text-icon-dark-neutral-active hover:bg-background-dark-neutral-three'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {item.badge && (
                  <div className="absolute bg-button-primary-default rounded-full flex items-center justify-center z-10 w-4 h-4 -right-0 -bottom-1.5">
                    <span className="text-neutral-white text-extra-small">{item.badge}</span>
                  </div>
                )}
              </button>
              {/* Separator Line */}
              {item.name !== 'AI Settings' && (
                <div className="bg-border-dark-neutral-neutral w-8 h-px mt-4" />
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
