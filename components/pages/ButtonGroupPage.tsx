import { Button } from "../ui/button";
import { ComponentSection } from "../ComponentSection";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export function ButtonGroupPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Button Group"
        description="Related buttons grouped together"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="inline-flex rounded-lg border border-border overflow-hidden">
            <Button variant="ghost" className="rounded-none border-r border-border">
              Left
            </Button>
            <Button variant="ghost" className="rounded-none border-r border-border">
              Center
            </Button>
            <Button variant="ghost" className="rounded-none">
              Right
            </Button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Icon Button Group"
        description="Button groups with icons for formatting and alignment"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border">
          <div>
            <p className="mb-3" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              Text Formatting
            </p>
            <div className="inline-flex rounded-lg border border-border overflow-hidden">
              <Button variant="ghost" size="icon" className="rounded-none border-r border-border">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-none border-r border-border">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Underline className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-3" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              Text Alignment
            </p>
            <div className="inline-flex rounded-lg border border-border overflow-hidden">
              <Button variant="ghost" size="icon" className="rounded-none border-r border-border">
                <AlignLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-none border-r border-border">
                <AlignCenter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-none">
                <AlignRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Segmented Control"
        description="Button group with active state selection"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="inline-flex rounded-lg bg-muted p-1">
            <Button 
              variant="ghost" 
              size="sm"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm"
              data-state="active"
            >
              Daily
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="rounded-lg"
            >
              Weekly
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="rounded-lg"
            >
              Monthly
            </Button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Action Button Group"
        description="Groups of action buttons with different variants"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="inline-flex gap-2">
            <Button variant="outline">Cancel</Button>
            <Button variant="outline">Save Draft</Button>
            <Button>Publish</Button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Vertical Button Group"
        description="Buttons stacked vertically"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="inline-flex flex-col w-48 rounded-lg border border-border overflow-hidden">
            <Button variant="ghost" className="rounded-none border-b border-border justify-start">
              Account Settings
            </Button>
            <Button variant="ghost" className="rounded-none border-b border-border justify-start">
              Privacy
            </Button>
            <Button variant="ghost" className="rounded-none justify-start">
              Notifications
            </Button>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
