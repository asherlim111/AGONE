import { Button } from "../ui/button";
import { ComponentSection } from "../ComponentSection";
import { Download, Trash2, Plus, ArrowRight, Save, X } from "lucide-react";

export function ButtonPage() {
  return (
    <div>
      <ComponentSection 
        title="Button Variants"
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="cancel">Cancel Button</Button>
          <Button variant="text">Text Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Button States"
        description="Interactive states for each variant type"
      >
        <div className="space-y-6 p-6">
          <div className="space-y-2">
            <p className="mb-2">Default Button States:</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Normal</Button>
              <Button variant="default" disabled>Disabled</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Secondary Button States:</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary">Normal</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Cancel Button States:</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cancel">Normal</Button>
              <Button variant="cancel" disabled>Disabled</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Text Button States:</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="text">Normal</Button>
              <Button variant="text" disabled>Disabled</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Link Button States:</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="link">Normal</Button>
              <Button variant="link" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Buttons with Icons"
        description="Combining text with icons for better clarity"
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Button variant="default">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
          <Button variant="secondary">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="cancel">
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button variant="text">
            <ArrowRight className="mr-2 h-4 w-4" />
            Next Step
          </Button>
          <Button variant="link">
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Button Sizes"
        description="Available button sizes across variants"
      >
        <div className="space-y-6 p-6">
          <div className="space-y-2">
            <p className="mb-2">Default Variant:</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="default" size="sm">Small</Button>
              <Button variant="default" size="default">Default</Button>
              <Button variant="default" size="lg">Large</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Secondary Variant:</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="default">Default</Button>
              <Button variant="secondary" size="lg">Large</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Cancel Variant:</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="cancel" size="sm">Small</Button>
              <Button variant="cancel" size="default">Default</Button>
              <Button variant="cancel" size="lg">Large</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Text Variant:</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="text" size="sm">Small</Button>
              <Button variant="text" size="default">Default</Button>
              <Button variant="text" size="lg">Large</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="mb-2">Link Variant:</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="link" size="sm">Small</Button>
              <Button variant="link" size="default">Default</Button>
              <Button variant="link" size="lg">Large</Button>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Full Width Button"
        description="Button that spans the full width of its container"
      >
        <div className="p-6 max-w-md space-y-3">
          <Button variant="default" className="w-full">Save Changes</Button>
          <Button variant="secondary" className="w-full">Download Report</Button>
          <Button variant="cancel" className="w-full">Cancel Action</Button>
        </div>
      </ComponentSection>
    </div>
  );
}