import { ComponentSection } from "../ComponentSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

export function DropdownPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Dropdown"
        description="Simple select dropdown"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="basic">Select an option</Label>
          <Select>
            <SelectTrigger id="basic">
              <SelectValue placeholder="Choose an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Dropdown with Groups"
        description="Organized options with grouping"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="grouped">Select a fruit</Label>
          <Select>
            <SelectTrigger id="grouped">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Dropdown with Default Value"
        description="Pre-selected dropdown option"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="default-value">Country</Label>
          <Select defaultValue="us">
            <SelectTrigger id="default-value">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Disabled Dropdown"
        description="Dropdown in disabled state"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="disabled">Disabled Select</Label>
          <Select disabled>
            <SelectTrigger id="disabled">
              <SelectValue placeholder="Cannot select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Multiple Dropdowns"
        description="Form with multiple select fields"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select>
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">PST (UTC-8)</SelectItem>
                <SelectItem value="mst">MST (UTC-7)</SelectItem>
                <SelectItem value="cst">CST (UTC-6)</SelectItem>
                <SelectItem value="est">EST (UTC-5)</SelectItem>
                <SelectItem value="utc">UTC (UTC+0)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Select>
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD - US Dollar</SelectItem>
                <SelectItem value="eur">EUR - Euro</SelectItem>
                <SelectItem value="gbp">GBP - British Pound</SelectItem>
                <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
