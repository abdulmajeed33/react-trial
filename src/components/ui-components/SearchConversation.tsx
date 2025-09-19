import { User } from 'lucide-react';
import { MagicIcon } from '../ui/MagicIcon';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { Avatar, AvatarFallback } from '../ui/avatar';

export function SearchConversation() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg w-[400px] bg-background-dark-neutral-transparent border border-border-primary-two-dark shadow-[0px_8px_8px_0px_rgba(42,61,214,0.16)]">
      {/* Left Section - Search/Conversation Area */}
      <div className="flex items-center gap-1 flex-1">
        <div className="flex items-center gap-2">
          <MagicIcon className="w-4 h-4" />
          <span className="font-inter font-normal text-body-small text-text-dark-secondary">
            ⌘ + M to start conversation
          </span>
        </div>
      </div>

      {/* Right Section - Agent Selector */}
      <div className="flex items-center gap-2">
        <Select defaultValue="agent">
          <SelectTrigger className="flex items-center gap-1 border-none bg-transparent p-0 h-auto focus:ring-0 focus:ring-offset-0 [&>svg]:text-icon-dark-neutral-neutral">
            <div className="flex items-center gap-1">
              <Avatar className="w-4 h-4">
                <AvatarFallback className="bg-white text-icon-dark-neutral-neutral text-[8px] w-4 h-4">
                  <User className="w-3 h-3 text-icon-dark-neutral-neutral" />
                </AvatarFallback>
              </Avatar>
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