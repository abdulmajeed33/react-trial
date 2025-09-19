import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background-dark-neutral-neutral text-text-dark-primary p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-heading4 font-inter text-text-dark-blue mb-6 animate-shimmer">
          🎨 Design System Configuration Complete! ✨
        </p>
        
        <div className="flex items-center justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="block">
            <img src={viteLogo} className="logo w-24 h-24 hover:drop-shadow-lg transition-all animate-dots" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="block">
            <img src={reactLogo} className="logo react w-24 h-24 hover:drop-shadow-lg transition-all" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-heading1 font-inter font-bold text-text-dark-primary mb-4">
          Professional Design System
        </h1>
        <p className="text-body text-text-dark-secondary max-w-2xl mx-auto">
          Complete Tailwind CSS configuration with comprehensive color system, typography scales, and component styles.
        </p>
      </div>

      {/* Interactive Counter Section */}
      <div className="max-w-md mx-auto mb-12">
        <div className="bg-background-dark-neutral-three p-8 rounded-lg border border-border-dark-neutral-neutral">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-button-primary-default hover:bg-button-primary-hover active:bg-button-primary-active text-text-dark-inverse-primary font-semibold py-4 px-6 rounded-md transition-all duration-200 shadow-btn text-body"
          >
            Count: {count}
          </button>
          <p className="mt-4 text-body-small text-text-dark-secondary text-center">
            Edit <code className="bg-background-dark-neutral-four px-2 py-1 rounded text-text-badge-warning font-mono">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>

      {/* Color Palette Showcase */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-heading3 font-inter font-bold text-text-dark-primary mb-8 text-center">
          Design System Colors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Status Colors */}
          <div className="bg-background-dark-neutral-three p-6 rounded-lg border border-border-dark-neutral-neutral">
            <h3 className="text-heading5 font-inter font-bold text-text-dark-primary mb-4">Status Colors</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-status-green rounded"></div>
                <span className="text-body-small text-status-green">Success</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-status-yellow rounded"></div>
                <span className="text-body-small text-status-yellow">Warning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-status-red rounded"></div>
                <span className="text-body-small text-status-red">Error</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-status-blue rounded"></div>
                <span className="text-body-small text-status-blue">Info</span>
              </div>
            </div>
          </div>

          {/* Button Variants */}
          <div className="bg-background-dark-neutral-three p-6 rounded-lg border border-border-dark-neutral-neutral">
            <h3 className="text-heading5 font-inter font-bold text-text-dark-primary mb-4">Button Variants</h3>
            <div className="space-y-3">
              <button className="w-full bg-button-primary-default hover:bg-button-primary-hover text-text-dark-inverse-primary py-2 px-4 rounded text-body-small">
                Primary
              </button>
              <button className="w-full border border-border-button-outline-default text-text-dark-button-outline-default hover:bg-background-dark-primary-transparent py-2 px-4 rounded text-body-small">
                Outline
              </button>
              <button className="w-full bg-text-light-button-destructive-default hover:bg-text-light-button-destructive-default-hover text-white py-2 px-4 rounded text-body-small">
                Destructive
              </button>
            </div>
          </div>

          {/* Badge Examples */}
          <div className="bg-background-dark-neutral-three p-6 rounded-lg border border-border-dark-neutral-neutral">
            <h3 className="text-heading5 font-inter font-bold text-text-dark-primary mb-4">Badges</h3>
            <div className="space-y-3">
              <span className="inline-block bg-background-badge-success text-text-badge-success px-3 py-1 rounded-full text-label">Success</span>
              <span className="inline-block bg-background-badge-warning text-text-badge-warning px-3 py-1 rounded-full text-label">Warning</span>
              <span className="inline-block bg-background-badge-error text-text-badge-error px-3 py-1 rounded-full text-label">Error</span>
              <span className="inline-block bg-background-badge-primary text-text-badge-primary px-3 py-1 rounded-full text-label">Primary</span>
            </div>
          </div>

          {/* Typography Scale */}
          <div className="bg-background-dark-neutral-three p-6 rounded-lg border border-border-dark-neutral-neutral">
            <h3 className="text-heading5 font-inter font-bold text-text-dark-primary mb-4">Typography</h3>
            <div className="space-y-2">
              <div className="text-heading1 text-text-dark-primary">H1</div>
              <div className="text-heading3 text-text-dark-primary">H3</div>
              <div className="text-body text-text-dark-secondary">Body</div>
              <div className="text-body-small text-text-dark-secondary">Small</div>
              <div className="text-label text-text-dark-secondary">Label</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Showcase */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-heading3 font-inter font-bold text-text-dark-primary mb-8 text-center">
          Component Examples
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card-primary p-6 rounded-lg shadow-risk-card border border-border-light-neutral-neutral">
            <h4 className="text-heading4 font-inter font-bold text-text-light-primary mb-3">Light Card</h4>
            <p className="text-body text-text-light-secondary mb-4">
              This card demonstrates light theme colors with proper contrast ratios and accessibility.
            </p>
            <button className="bg-button-primary-default hover:bg-button-primary-hover text-white px-4 py-2 rounded text-body-small">
              Learn More
            </button>
          </div>
          
          <div className="bg-background-dark-neutral-four p-6 rounded-lg shadow-risk-card border border-border-dark-neutral-neutral">
            <h4 className="text-heading4 font-inter font-bold text-text-dark-primary mb-3">Dark Card</h4>
            <p className="text-body text-text-dark-secondary mb-4">
              This card showcases dark theme implementation with the comprehensive color system.
            </p>
            <button className="border border-border-button-outline-default text-text-dark-button-outline-default hover:bg-background-dark-primary-transparent px-4 py-2 rounded text-body-small">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-body-small text-text-dark-secondary">
          🚀 Your comprehensive design system is now configured and ready to use!
        </p>
      </div>
    </div>
  );
}

export default App;
