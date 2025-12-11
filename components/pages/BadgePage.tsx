import { ComponentSection } from "../ComponentSection";
import { Badge } from "../ui/badge";

export function BadgePage() {
  return (
    <div>
      <ComponentSection 
        title="Badge Variants"
        description="Different visual styles for badges"
      >
        <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Colored Badges"
        description="Badges with semantic colors"
      >
        <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
          <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
          <Badge className="bg-red-500 hover:bg-red-600">Error</Badge>
          <Badge className="bg-purple-500 hover:bg-purple-600">New</Badge>
          <Badge className="bg-gray-500 hover:bg-gray-600">Neutral</Badge>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Badge with Count"
        description="Badges displaying numeric values"
      >
        <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge>1</Badge>
          <Badge>5</Badge>
          <Badge>10</Badge>
          <Badge>25</Badge>
          <Badge>99+</Badge>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Status Badges"
        description="Badges for showing status"
      >
        <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
          <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>
          <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
          <Badge className="bg-gray-500 hover:bg-gray-600">Draft</Badge>
          <Badge className="bg-purple-500 hover:bg-purple-600">Published</Badge>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Badges in Context"
        description="Real-world usage examples"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-2xl">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h4>New Feature Released</h4>
              <p className="text-muted-foreground">Check out our latest updates</p>
            </div>
            <Badge className="bg-purple-500 hover:bg-purple-600">New</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h4>Inbox</h4>
              <p className="text-muted-foreground">You have unread messages</p>
            </div>
            <Badge>12</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h4>System Status</h4>
              <p className="text-muted-foreground">All systems operational</p>
            </div>
            <Badge className="bg-green-500 hover:bg-green-600">Online</Badge>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h4>Notifications</h4>
              <p className="text-muted-foreground">New activity in your account</p>
            </div>
            <Badge variant="destructive">3</Badge>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Badge Sizes"
        description="Different sizes for badges"
      >
        <div className="flex flex-wrap items-center gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge className="text-xs px-2 py-0.5">Small</Badge>
          <Badge>Default</Badge>
          <Badge className="text-base px-3 py-1">Large</Badge>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Outline Badges"
        description="Badge variants with outlines"
      >
        <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge variant="outline" className="border-blue-500 text-blue-600">Info</Badge>
          <Badge variant="outline" className="border-green-500 text-green-600">Success</Badge>
          <Badge variant="outline" className="border-yellow-500 text-yellow-600">Warning</Badge>
          <Badge variant="outline" className="border-red-500 text-red-600">Error</Badge>
        </div>
      </ComponentSection>
    </div>
  );
}
