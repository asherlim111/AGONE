import { ComponentSection } from "../ComponentSection";

export function ShadowPage() {
  return (
    <div>
      <ComponentSection 
        title="Shadow Elevation"
        description="Small elevation shadow defined in the design system"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-card rounded-lg border border-border">
          <div 
            className="p-8 bg-card rounded-lg"
            style={{ 
              boxShadow: 'var(--elevation-sm)',
              borderRadius: 'var(--radius)'
            }}
          >
            <h4 className="mb-2">Small Elevation</h4>
            <p className="text-muted-foreground">
              Used for cards, modals, and subtle elevation effects.
            </p>
            <p className="text-muted-foreground mt-4" style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace' }}>
              box-shadow: var(--elevation-sm)
            </p>
          </div>

          <div 
            className="p-8 bg-card rounded-lg"
            style={{ 
              boxShadow: '0px 4px 8px rgba(53, 67, 90, 0.15)',
              borderRadius: 'var(--radius)'
            }}
          >
            <h4 className="mb-2">Medium Elevation</h4>
            <p className="text-muted-foreground">
              Used for dropdowns, popovers, and floating elements.
            </p>
            <p className="text-muted-foreground mt-4" style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace' }}>
              box-shadow: 0px 4px 8px rgba(53, 67, 90, 0.15)
            </p>
          </div>

          <div 
            className="p-8 bg-card rounded-lg"
            style={{ 
              boxShadow: '0px 8px 16px rgba(53, 67, 90, 0.2)',
              borderRadius: 'var(--radius)'
            }}
          >
            <h4 className="mb-2">Large Elevation</h4>
            <p className="text-muted-foreground">
              Used for dialogs, sheets, and prominent overlays.
            </p>
            <p className="text-muted-foreground mt-4" style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace' }}>
              box-shadow: 0px 8px 16px rgba(53, 67, 90, 0.2)
            </p>
          </div>

          <div 
            className="p-8 bg-card rounded-lg"
            style={{ 
              boxShadow: '0px 12px 24px rgba(53, 67, 90, 0.25)',
              borderRadius: 'var(--radius)'
            }}
          >
            <h4 className="mb-2">Extra Large Elevation</h4>
            <p className="text-muted-foreground">
              Used for high-priority modals and critical overlays.
            </p>
            <p className="text-muted-foreground mt-4" style={{ fontSize: 'var(--text-sm)', fontFamily: 'monospace' }}>
              box-shadow: 0px 12px 24px rgba(53, 67, 90, 0.25)
            </p>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Shadow Examples"
        description="Real-world usage of shadows in UI components"
      >
        <div className="space-y-6 p-6 bg-muted rounded-lg">
          <div 
            className="p-6 bg-card rounded-lg"
            style={{ 
              boxShadow: 'var(--elevation-sm)',
              borderRadius: 'var(--radius)'
            }}
          >
            <h4 className="mb-2">Card with Shadow</h4>
            <p className="text-muted-foreground">
              This card uses the small elevation shadow to create a subtle lift from the background.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all"
              style={{ 
                boxShadow: 'var(--elevation-sm)',
                borderRadius: 'var(--radius)'
              }}
            >
              Button with Shadow
            </button>
            <button 
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-all"
              style={{ 
                boxShadow: '0px 4px 8px rgba(53, 67, 90, 0.15)',
                borderRadius: 'var(--radius)'
              }}
            >
              Elevated Button
            </button>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
