import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ComponentSection } from "../ComponentSection";

export function CheckboxRadioPage() {
  return (
    <div>
      <ComponentSection 
        title="Checkboxes"
        description="Allow users to select multiple options"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="flex items-center space-x-2">
            <Checkbox id="check1" />
            <Label htmlFor="check1">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="check2" defaultChecked />
            <Label htmlFor="check2">Receive marketing emails</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="check3" />
            <Label htmlFor="check3">Subscribe to newsletter</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="check4" disabled />
            <Label htmlFor="check4" className="text-muted-foreground">
              Disabled checkbox
            </Label>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Checkbox Group"
        description="Related checkboxes grouped together"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <p className="mb-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>
            Select your interests
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="interest1" defaultChecked />
              <Label htmlFor="interest1">Design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest2" defaultChecked />
              <Label htmlFor="interest2">Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest3" />
              <Label htmlFor="interest3">Marketing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest4" />
              <Label htmlFor="interest4">Product Management</Label>
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Radio Buttons"
        description="Allow users to select one option from a group"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <p className="mb-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>
            Choose your plan
          </p>
          <RadioGroup defaultValue="standard">
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic">Basic Plan - Free</Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard Plan - $9/month</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium">Premium Plan - $19/month</Label>
            </div>
          </RadioGroup>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Radio with Descriptions"
        description="Radio buttons with additional context"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <p className="mb-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>
            Select notification frequency
          </p>
          <RadioGroup defaultValue="daily">
            <div className="flex items-start space-x-2 mb-4">
              <RadioGroupItem value="realtime" id="realtime" className="mt-1" />
              <div>
                <Label htmlFor="realtime" className="cursor-pointer">
                  Real-time
                </Label>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Get notified immediately when something happens
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2 mb-4">
              <RadioGroupItem value="daily" id="daily" className="mt-1" />
              <div>
                <Label htmlFor="daily" className="cursor-pointer">
                  Daily digest
                </Label>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Receive a summary once per day
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="weekly" id="weekly" className="mt-1" />
              <div>
                <Label htmlFor="weekly" className="cursor-pointer">
                  Weekly summary
                </Label>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Get updates every week
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Disabled States"
        description="Disabled checkbox and radio controls"
      >
        <div className="space-y-6 p-6 bg-card rounded-lg border border-border max-w-md">
          <div>
            <p className="mb-3 text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
              Disabled Checkboxes
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="dis-check1" disabled />
                <Label htmlFor="dis-check1" className="text-muted-foreground">
                  Disabled unchecked
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="dis-check2" disabled checked />
                <Label htmlFor="dis-check2" className="text-muted-foreground">
                  Disabled checked
                </Label>
              </div>
            </div>
          </div>
          
          <div>
            <p className="mb-3 text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
              Disabled Radio Buttons
            </p>
            <RadioGroup defaultValue="option1" disabled>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="option1" id="dis-radio1" />
                <Label htmlFor="dis-radio1" className="text-muted-foreground">
                  Disabled selected
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="dis-radio2" />
                <Label htmlFor="dis-radio2" className="text-muted-foreground">
                  Disabled option
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
