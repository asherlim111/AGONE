import { ComponentSection } from "../ComponentSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function TabsPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Tabs"
        description="Simple tabbed interface"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <p>Content for Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <p>Content for Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <p>Content for Tab 3</p>
            </TabsContent>
          </Tabs>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Tabs with Content"
        description="Tabs organizing different types of content"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <p>Overview content goes here. This tab shows the main dashboard view with key metrics and information.</p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <p>Analytics content with charts and metrics would be displayed here. View detailed statistics and trends.</p>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
              <p>Reports and downloadable data would be shown in this section. Generate and export various reports.</p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <p>Application settings and preferences can be configured here. Customize your experience.</p>
            </TabsContent>
          </Tabs>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Tabs with Cards"
        description="Tab content displayed in card format"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account information and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Update your personal details, email address, and profile information.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password and security settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Keep your account secure by using a strong password and enabling two-factor authentication.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>Choose which notifications you want to receive and how you want to be contacted.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Disabled Tab"
        description="Tabs with disabled states"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Tabs defaultValue="active" className="w-full">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
              <TabsTrigger value="another">Another</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="mt-4">
              <p>This tab is active and accessible.</p>
            </TabsContent>
            <TabsContent value="another" className="mt-4">
              <p>This is another active tab.</p>
            </TabsContent>
          </Tabs>
        </div>
      </ComponentSection>
    </div>
  );
}
