import { SearchConversation } from "../ui-components/SearchConversation";

export function Header() {
  return (
    <header className="h-20 flex items-center justify-end gap-8 px-6 py-4 bg-background-dark-neutral-transparent border-b border-background-dark-neutral-three">
      {/* Page Title */}
      <div className="mr-auto">
        <h1 className="font-semibold text-heading4 text-text-dark-primary tracking-tight">
          Control Center
        </h1>
      </div>

      {/* Right Section Container */}
      <div className="flex flex-col items-end gap-2.5 pl-28 flex-1">
        {/* Search/Conversation Component */}
        <SearchConversation />
      </div>
    </header>
  );
}
