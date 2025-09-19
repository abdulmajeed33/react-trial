import { MagicIcon } from '../ui/MagicIcon';

export function Header() {
  return (
    <header 
      className="h-20 flex items-center justify-end gap-8 px-6 py-4"
      style={{
        background: 'rgba(22, 27, 38, 0.16)',
        borderBottom: '1px solid #161B26',
      }}
    >
      {/* Page Title */}
      <div className="mr-auto">
        <h1 
          className="font-inter font-semibold text-text-dark-primary"
          style={{
            fontSize: '24px',
            lineHeight: '28px',
            letterSpacing: '-0.5px',
            color: '#F1F3FF'
          }}
        >
          Dashboards
        </h1>
      </div>
      
      {/* Right Section Container */}
      <div className="flex flex-col items-end gap-2.5 pl-28 flex-1">
        {/* Search/Conversation Container */}
        <div 
          className="flex items-center gap-3 p-3 rounded-lg"
          style={{
            width: '400px',
            background: 'rgba(22, 27, 38, 0.16)',
            border: '1px solid #434EFF',
            boxShadow: '0px 8px 8px 0px rgba(42, 61, 214, 0.16)'
          }}
        >
          {/* Icon and Text Container */}
          <div className="flex items-center gap-1 flex-1">
            <div className="flex items-center gap-2">
              <MagicIcon className="w-4 h-4" />
              <span 
                className="font-inter font-normal"
                style={{
                  fontSize: '14px',
                  lineHeight: '16px',
                  color: '#B6BCC3'
                }}
              >
                ⌘ + M to start conversation
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 