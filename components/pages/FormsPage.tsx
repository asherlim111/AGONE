import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { ComponentSection } from "../ComponentSection";
import { Button } from "../ui/button";

export function FormsPage() {
  return (
    <div>
      <ComponentSection 
        title="Text Inputs"
        description="Standard input fields for text entry"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input id="disabled" disabled value="Disabled field" readOnly />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Textarea"
        description="Multi-line text input"
      >
        <div className="space-y-2 p-6 max-w-md">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here..." rows={4} />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Select Dropdown"
        description="Dropdown selection component"
      >
        <div className="space-y-2 p-6 max-w-md">
          <Label htmlFor="select">Select an option</Label>
          <Select>
            <SelectTrigger id="select">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Checkboxes"
        description="Multiple selection controls"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing">Receive marketing emails</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-check" disabled />
            <Label htmlFor="disabled-check">Disabled checkbox</Label>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Radio Buttons"
        description="Single selection from multiple options"
      >
        <div className="p-6 max-w-md">
          <Label className="mb-4 block">Choose your plan</Label>
          <RadioGroup defaultValue="standard">
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic">Basic Plan</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard Plan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium">Premium Plan</Label>
            </div>
          </RadioGroup>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Switch"
        description="Toggle switches for binary options"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Enable notifications</Label>
            <Switch id="notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="airplane">Airplane mode</Label>
            <Switch id="airplane" />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Slider"
        description="Range input for numeric values"
      >
        <div className="space-y-4 p-6 max-w-md">
          <div className="space-y-2">
            <Label>Volume</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>Price Range</Label>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Form Example"
        description="Complete form with multiple controls"
      >
        <div className="p-6 max-w-md">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form-name">Full Name</Label>
              <Input id="form-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-email">Email</Label>
              <Input id="form-email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-country">Country</Label>
              <Select>
                <SelectTrigger id="form-country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="form-terms" />
              <Label htmlFor="form-terms">I agree to the terms and conditions</Label>
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </div>
      </ComponentSection>
    </div>
  );
}