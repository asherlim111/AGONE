import { Input } from "../ui/input";
import { ComponentSection } from "../ComponentSection";
import { Search, X } from "lucide-react";
import { Button } from "../ui/button";

export function SearchPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Search"
        description="Simple search input with icon"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-10"
            />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Search with Clear Button"
        description="Search input with clear functionality"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-10 pr-10"
              defaultValue="search query"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            </button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Search with Button"
        description="Search input with action button"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Search Sizes"
        description="Different sizes for search inputs"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Small search..." 
              className="pl-9 h-8"
              style={{ fontSize: 'var(--text-sm)' }}
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Default search..." 
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Large search..." 
              className="pl-11 h-12"
            />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Search with Results"
        description="Search bar with dropdown results"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10"
                defaultValue="design"
              />
            </div>
            <div className="border border-border rounded-lg bg-card" style={{ boxShadow: 'var(--elevation-sm)' }}>
              <div className="p-2 hover:bg-muted cursor-pointer rounded-t-lg">
                <p style={{ fontWeight: 'var(--font-weight-medium)' }}>Design System</p>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Complete design system documentation
                </p>
              </div>
              <div className="p-2 hover:bg-muted cursor-pointer">
                <p style={{ fontWeight: 'var(--font-weight-medium)' }}>Design Principles</p>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Core principles and guidelines
                </p>
              </div>
              <div className="p-2 hover:bg-muted cursor-pointer rounded-b-lg">
                <p style={{ fontWeight: 'var(--font-weight-medium)' }}>Design Tokens</p>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Colors, typography, and spacing
                </p>
              </div>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Search Bar Variants"
        description="Different visual styles"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Default border..." 
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="With background..." 
              className="pl-10 bg-muted border-0"
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Rounded search..." 
              className="pl-10 rounded-full"
            />
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
