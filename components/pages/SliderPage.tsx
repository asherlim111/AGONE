import { ComponentSection } from "../ComponentSection";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";

export function SliderPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Slider"
        description="Simple single-value slider"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label>Value</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Range Slider"
        description="Slider with minimum and maximum values"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label>Price Range</Label>
          <Slider defaultValue={[25, 75]} max={100} step={1} />
          <div className="flex justify-between text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Slider with Labels"
        description="Sliders with descriptive labels and values"
      >
        <div className="space-y-6 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Volume</Label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>50%</span>
            </div>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Brightness</Label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>75%</span>
            </div>
            <Slider defaultValue={[75]} max={100} step={1} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Contrast</Label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>30%</span>
            </div>
            <Slider defaultValue={[30]} max={100} step={1} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Slider Steps"
        description="Sliders with different step values"
      >
        <div className="space-y-6 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label>Step 1 (Smooth)</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          
          <div className="space-y-2">
            <Label>Step 10</Label>
            <Slider defaultValue={[50]} max={100} step={10} />
          </div>
          
          <div className="space-y-2">
            <Label>Step 25</Label>
            <Slider defaultValue={[50]} max={100} step={25} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Disabled Slider"
        description="Slider in disabled state"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label>Disabled</Label>
          <Slider defaultValue={[50]} max={100} step={1} disabled />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Custom Range"
        description="Sliders with custom min and max values"
      >
        <div className="space-y-6 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Temperature (°C)</Label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>20°</span>
            </div>
            <Slider defaultValue={[20]} min={-10} max={40} step={1} />
            <div className="flex justify-between text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
              <span>-10°C</span>
              <span>40°C</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Age Range</Label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>18 - 65</span>
            </div>
            <Slider defaultValue={[18, 65]} min={0} max={100} step={1} />
            <div className="flex justify-between text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
