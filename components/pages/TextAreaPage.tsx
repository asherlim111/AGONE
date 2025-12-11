import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { ComponentSection } from "../ComponentSection";

export function TextAreaPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Textarea"
        description="Standard multi-line text input"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="basic">Message</Label>
          <Textarea id="basic" placeholder="Type your message here..." rows={4} />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Textarea with Value"
        description="Pre-filled textarea content"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="filled">Description</Label>
          <Textarea 
            id="filled" 
            rows={4}
            defaultValue="This is a pre-filled textarea with some example content. You can edit this text or replace it with your own."
          />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Textarea Sizes"
        description="Different row heights for textarea"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="small">Small (3 rows)</Label>
            <Textarea id="small" placeholder="Small textarea..." rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="medium">Medium (6 rows)</Label>
            <Textarea id="medium" placeholder="Medium textarea..." rows={6} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="large">Large (10 rows)</Label>
            <Textarea id="large" placeholder="Large textarea..." rows={10} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Textarea States"
        description="Different states of textarea"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="default-state">Default</Label>
            <Textarea id="default-state" placeholder="Type here..." rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-state">Disabled</Label>
            <Textarea 
              id="disabled-state" 
              disabled 
              value="This textarea is disabled and cannot be edited."
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="readonly-state">Read Only</Label>
            <Textarea 
              id="readonly-state" 
              readOnly 
              value="This textarea is read-only. You can select and copy text but cannot edit it."
              rows={3}
            />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Textarea with Helper Text"
        description="Textarea with character count and guidance"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
              Maximum 500 characters
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea id="feedback" placeholder="Share your thoughts..." rows={5} />
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                Be specific and constructive
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                0 / 1000
              </p>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Resizable Textarea"
        description="Textarea with resize control"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="resize-vertical">Vertical Resize</Label>
            <Textarea 
              id="resize-vertical" 
              placeholder="Resize vertically..." 
              rows={4}
              className="resize-y"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="no-resize">No Resize</Label>
            <Textarea 
              id="no-resize" 
              placeholder="Cannot be resized..." 
              rows={4}
              className="resize-none"
            />
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
