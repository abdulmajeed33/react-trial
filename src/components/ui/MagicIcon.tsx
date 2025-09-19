import React from 'react';

interface MagicIconProps {
  className?: string;
}

export function MagicIcon({ className = "w-4 h-4" }: MagicIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main wand/magic stick */}
      <path
        d="M2 13.33L13.33 2"
        stroke="#7988FF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top sparkle */}
      <path
        d="M11.67 1L12.67 3L14.67 4L12.67 5L11.67 7L10.67 5L8.67 4L10.67 3L11.67 1Z"
        stroke="#7988FF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom sparkle */}
      <path
        d="M11.67 14L12.67 12L14.67 11L12.67 10L11.67 8L10.67 10L8.67 11L10.67 12L11.67 14Z"
        stroke="#7988FF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
} 