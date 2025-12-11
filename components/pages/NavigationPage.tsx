import { ComponentSection } from "../ComponentSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export function NavigationPage() {
  return (
    <div>
      <ComponentSection 
        title="Tabs"
        description="Organize content into separate views"
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
              <p>Overview content goes here. This tab shows the main dashboard view.</p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <p>Analytics content with charts and metrics would be displayed here.</p>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
              <p>Reports and downloadable data would be shown in this section.</p>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <p>Application settings and preferences can be configured here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Breadcrumbs"
        description="Show the current page location within a navigational hierarchy"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Navigation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Pagination"
        description="Navigate through pages of content"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Navigation Menu"
        description="Hierarchical navigation with dropdowns"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <NavigationMenuLink className="block p-2 hover:bg-muted rounded" href="#">
                      Product A
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-muted rounded" href="#">
                      Product B
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-muted rounded" href="#">
                      Product C
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4">
                    <NavigationMenuLink className="block p-2 hover:bg-muted rounded" href="#">
                      Documentation
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-muted rounded" href="#">
                      Guides
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-muted rounded" href="#">
                      API Reference
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2" href="#">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </ComponentSection>
    </div>
  );
}
