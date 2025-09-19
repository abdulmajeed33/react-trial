import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface ChartHeaderProps {
  title: string;
  showTooltip?: boolean;
  showMagic?: boolean;
  showMore?: boolean;
  onRemoveWidget?: () => void;
  onExportData?: () => void;
  onSettings?: () => void;
  customMenuItems?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export function ChartHeader({
  title,
  showTooltip = true,
  showMagic = true,
  showMore = true,
  onRemoveWidget,
  onExportData,
  onSettings,
  customMenuItems
}: ChartHeaderProps) {
  const defaultMenuItems = [
    ...(onRemoveWidget ? [{ label: 'Remove Widget', onClick: onRemoveWidget }] : []),
    ...(onExportData ? [{ label: 'Export Data', onClick: onExportData }] : []),
    ...(onSettings ? [{ label: 'Settings', onClick: onSettings }] : []),
    ...(customMenuItems || [])
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <h3 className="text-text-dark-primary text-body-small font-semibold">
          {title}
        </h3>
        {showTooltip && (
          <div className="w-[14px] h-[14px] flex items-center justify-center">
            <img 
              src="/icons/tooltip-icon.svg" 
              alt="Tooltip"
              className="w-[10.5px] h-[10.5px] object-contain"
            />
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-1">
        {showMagic && (
          <div className="w-4 h-4 flex items-center justify-center">
            <img 
              src="/icons/magic-icon.svg" 
              alt="Magic"
              className="w-4 h-4 object-contain"
            />
          </div>
        )}
        
        {showMore && defaultMenuItems.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-5 h-5 flex items-center justify-center hover:bg-background-dark-neutral-three rounded p-1">
                <img 
                  src="/icons/more-icon.svg" 
                  alt="More options"
                  className="w-[1.25px] h-[10px] object-contain"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-background-dark-neutral-three border border-border-dark-neutral-three"
            >
              {defaultMenuItems.map((item, index) => (
                <DropdownMenuItem 
                  key={index}
                  className="text-text-dark-primary hover:bg-background-dark-neutral-two cursor-pointer"
                  onClick={item.onClick}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
} 