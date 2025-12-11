import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ComponentSection } from "../ComponentSection";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function CardsPage() {
  return (
    <div>
      <h1 className="mb-4">Cards</h1>
      <p className="text-muted-foreground mb-8">
        Card components for displaying grouped content and information.
      </p>

      <ComponentSection 
        title="Basic Card"
        description="Simple card with header, content, and footer"
      >
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content area of the card. You can place any content here.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </ComponentSection>

      <ComponentSection 
        title="Card with Badge"
        description="Cards can include badges for status or labels"
      >
        <Card className="max-w-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Featured Project</CardTitle>
              <Badge>New</Badge>
            </div>
            <CardDescription>A description of the featured project</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card demonstrates how to combine cards with badges for highlighting important information or status.</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button>View Details</Button>
            <Button variant="outline">Share</Button>
          </CardFooter>
        </Card>
      </ComponentSection>

      <ComponentSection 
        title="User Profile Card"
        description="Card displaying user information"
      >
        <Card className="max-w-md">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Product Designer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>Passionate about creating user-centered designs that solve real problems. 5 years of experience in digital product design.</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button className="flex-1">Follow</Button>
            <Button variant="outline" className="flex-1">Message</Button>
          </CardFooter>
        </Card>
      </ComponentSection>

      <ComponentSection 
        title="Card Grid"
        description="Multiple cards displayed in a responsive grid"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Card {i}</CardTitle>
                <CardDescription>Description for card {i}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Content area for card number {i}. This demonstrates responsive card layouts.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Stats Card"
        description="Card for displaying metrics and statistics"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardDescription>Total Users</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-bold)' }}>
                12,345
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-bold)' }}>
                $45,231
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Active Projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-bold)' }}>
                23
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                +3 from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </ComponentSection>
    </div>
  );
}
