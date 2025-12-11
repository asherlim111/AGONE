import { Input } from "../ui/input";
import { InputWithIcon } from "../ui/input-with-icon";
import { Label } from "../ui/label";
import { ComponentSection } from "../ComponentSection";
import { Mail, Lock, Search, Eye, AlertCircle } from "lucide-react";

export function InputFieldPage() {
  return (
    <div>
      <ComponentSection 
        title="Standard Input (Boxed)"
        description="Boxed input fields with fixed 40px height and visible borders in all states"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="default-input">Default State</Label>
            <Input id="default-input" placeholder="Enter text..." />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Surface fill with neutral outline (1px)
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="hover-input">Hover State</Label>
            <Input id="hover-input" placeholder="Hover over me" />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Primary outline on hover
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="focus-input">Focus State (Typing)</Label>
            <Input id="focus-input" placeholder="Click to focus" />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Primary outline (strong) when focused
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="filled-input">Filled State</Label>
            <Input id="filled-input" defaultValue="This field has content" />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Surface fill with neutral outline
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="disabled-input">Disabled State</Label>
            <Input id="disabled-input" disabled value="Disabled field" />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Neutral surface with disabled opacity
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="error-input">Error State</Label>
            <Input id="error-input" aria-invalid placeholder="Invalid input" />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Error outline (1px)
            </p>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Input with Icons (Boxed)"
        description="Boxed inputs with leading and trailing icons - icons change color based on state"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="email-icon">Email (Leading Icon)</Label>
            <InputWithIcon 
              id="email-icon" 
              type="email" 
              placeholder="you@example.com"
              leadingIcon={<Mail className="h-4 w-4" />}
            />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Icon color: neutral default, primary on hover/focus
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password-icon">Password (Both Icons)</Label>
            <InputWithIcon 
              id="password-icon" 
              type="password" 
              placeholder="Enter password"
              leadingIcon={<Lock className="h-4 w-4" />}
              trailingIcon={<Eye className="h-4 w-4 cursor-pointer" />}
            />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Leading and trailing icons with proper spacing
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="search-icon">Search (Leading Icon)</Label>
            <InputWithIcon 
              id="search-icon" 
              placeholder="Search..."
              leadingIcon={<Search className="h-4 w-4" />}
            />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Hover to see icon color change to primary
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="error-icon">Error with Icon</Label>
            <InputWithIcon 
              id="error-icon" 
              placeholder="Invalid email"
              error={true}
              leadingIcon={<Mail className="h-4 w-4" />}
              trailingIcon={<AlertCircle className="h-4 w-4" />}
            />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Error outline with error-colored trailing icon
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="disabled-icon">Disabled with Icon</Label>
            <InputWithIcon 
              id="disabled-icon" 
              disabled
              value="Disabled field"
              leadingIcon={<Lock className="h-4 w-4" />}
            />
            <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
              Disabled opacity applied to entire component
            </p>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Input Types"
        description="Various input types with consistent 40px height"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input id="text" type="text" placeholder="Text input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-type">Email</Label>
            <Input id="email-type" type="email" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="number" placeholder="123" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tel">Telephone</Label>
            <Input id="tel" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" type="url" placeholder="https://example.com" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Input Widths"
        description="Inputs maintain 40px height with various widths"
      >
        <div className="space-y-4 p-6">
          <div className="space-y-2 max-w-xs">
            <Label htmlFor="width-small">Small Width</Label>
            <Input id="width-small" placeholder="Small container" />
          </div>
          <div className="space-y-2 max-w-md">
            <Label htmlFor="width-medium">Medium Width</Label>
            <Input id="width-medium" placeholder="Medium container" />
          </div>
          <div className="space-y-2 max-w-2xl">
            <Label htmlFor="width-large">Large Width</Label>
            <Input id="width-large" placeholder="Large container" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Form Example"
        description="Complete form with boxed inputs"
      >
        <div className="p-6 max-w-md">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form-name">Full Name</Label>
              <Input id="form-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-email">Email Address</Label>
              <InputWithIcon 
                id="form-email" 
                type="email" 
                placeholder="john@example.com"
                leadingIcon={<Mail className="h-4 w-4" />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-password">Password</Label>
              <InputWithIcon 
                id="form-password" 
                type="password" 
                placeholder="Enter password"
                leadingIcon={<Lock className="h-4 w-4" />}
                trailingIcon={<Eye className="h-4 w-4 cursor-pointer" />}
              />
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-body-sm)' }}>
                Must be at least 8 characters
              </p>
            </div>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
