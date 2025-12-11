import { ComponentSection } from "../ComponentSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Clock } from "lucide-react";

export function TimePickerPage() {
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  return (
    <div>
      <ComponentSection 
        title="Time Input"
        description="Basic time input field"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label htmlFor="time">Select time</Label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              id="time" 
              type="time" 
              className="pl-10"
            />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Time Picker with Dropdowns"
        description="Separate selects for hours, minutes, and period"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label>Select time</Label>
          <div className="flex gap-2">
            <Select defaultValue="10">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="flex items-center">:</span>
            <Select defaultValue="30">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Min" />
              </SelectTrigger>
              <SelectContent>
                {['00', '15', '30', '45'].map((minute) => (
                  <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="AM">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="AM/PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AM">AM</SelectItem>
                <SelectItem value="PM">PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="24-Hour Format"
        description="Time picker in 24-hour format"
      >
        <div className="space-y-2 p-6 bg-card rounded-lg border border-border max-w-md">
          <Label>Time (24h format)</Label>
          <div className="flex gap-2">
            <Select defaultValue="14">
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map((hour) => (
                  <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="flex items-center">:</span>
            <Select defaultValue="30">
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Minute" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
                  <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Time Range Picker"
        description="Select start and end times"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label>Start time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="time" 
                className="pl-10"
                defaultValue="09:00"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>End time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="time" 
                className="pl-10"
                defaultValue="17:00"
              />
            </div>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Time Picker States"
        description="Different states of time picker"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="time-default">Default</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="time-default"
                type="time" 
                className="pl-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time-filled">With value</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="time-filled"
                type="time" 
                className="pl-10"
                defaultValue="12:30"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time-disabled">Disabled</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="time-disabled"
                type="time" 
                className="pl-10"
                disabled
                defaultValue="10:00"
              />
            </div>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
