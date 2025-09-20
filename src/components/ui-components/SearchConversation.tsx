import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { Input } from '../ui/input';
import { useState } from 'react';

export function SearchConversation() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg w-[400px] bg-background-dark-neutral-transparent border border-border-primary-two-dark shadow-[0px_8px_8px_0px_rgba(42,61,214,0.16)]">
      {/* Left Section - Search/Conversation Area */}
      <div className="flex items-center gap-1 flex-1">
        <div className="flex items-center gap-2 flex-1">
          <img 
            src="/icons/magic-icon.svg" 
            alt="Magic"
            className="w-4 h-4 object-contain flex-shrink-0"
          />
            <Input
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="⌘ + M to start conversation"
              className="border-none bg-transparent p-0 h-auto text-body-small text-text-dark-primary placeholder:text-text-dark-secondary focus-visible:ring-0 focus-visible:ring-offset-0"
            />
        </div>
      </div>

      {/* Right Section - Agent Selector */}
      <div className="flex items-center gap-2">
        <Select defaultValue="agent">
          <SelectTrigger className="flex items-center gap-1 border-none bg-transparent p-0 h-auto focus:ring-0 focus:ring-offset-0 [&>svg]:text-icon-dark-neutral-neutral">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <img 
                  src="/icons/agent-icon.svg" 
                  alt="Agent"
                  className="w-3 h-3 object-contain"
                />
              </div>
              <span className="font-inter font-normal text-label text-text-dark-secondary">
                Agent
              </span>
            </div>
          </SelectTrigger>
          <SelectContent className="bg-background-dark-neutral-three border border-border-dark-neutral-three">
            <SelectItem value="agent" className="text-text-dark-primary">
              Agent
            </SelectItem>
            <SelectItem value="assistant" className="text-text-dark-primary">
              Assistant
            </SelectItem>
            <SelectItem value="copilot" className="text-text-dark-primary">
              Copilot
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
} 