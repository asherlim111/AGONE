import { Button } from "../ui/button";
import { ComponentSection } from "../ComponentSection";
import { Plus, Trash2, Edit, Save, Share2, Settings, Heart, Star, Download, MoreVertical } from "lucide-react";

export function IconButtonPage() {
  return (
    <div>
      <ComponentSection 
        title="Icon Button Variants"
        description="Different visual styles for icon buttons"
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Button size="icon" variant="default">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Icon Button Sizes"
        description="Available sizes for icon buttons"
      >
        <div className="flex flex-wrap items-center gap-4 p-6">
          <Button size="icon" variant="icon" className="h-8 w-8">
            <Star className="h-3 w-3" />
          </Button>
          <Button size="icon" variant="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon" className="h-12 w-12">
            <Star className="h-5 w-5" />
          </Button>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Common Icon Actions"
        description="Frequently used icon buttons in applications"
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Button size="icon" variant="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Save className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <Star className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Icon Button States"
        description="Different interactive states - hover over buttons to see neutral-25 background, click for neutral-100 active state"
      >
        <div className="flex flex-wrap gap-4 p-6">
          <Button size="icon" variant="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="default">
            <Heart className="h-4 w-4 fill-current" />
          </Button>
          <Button size="icon" variant="icon" disabled>
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Icon Buttons in Context"
        description="Real-world usage examples"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h4>Item Title</h4>
              <p className="text-muted-foreground">Item description</p>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Edit className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                JD
              </div>
              <div>
                <h4>John Doe</h4>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  john@example.com
                </p>
              </div>
            </div>
            <Button size="icon" variant="ghost">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
