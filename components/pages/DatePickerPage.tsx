import { useState } from "react";
import { ComponentSection } from "../ComponentSection";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function DatePickerPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<Date | undefined>();

  return (
    <div>
      <ComponentSection 
        title="Inline Calendar"
        description="Calendar displayed inline"
      >
        <div className="p-6 bg-card rounded-lg border border-border inline-block">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
          />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Date Picker with Popover"
        description="Calendar in a popover triggered by a button"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label>Select date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Date Picker with Input"
        description="Date picker integrated with input field"
      >
        <div className="space-y-4 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label htmlFor="date-input">Birth Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date-input"
                  variant="outline"
                  className="w-full justify-start"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange ? format(dateRange, "PPP") : <span>Select your birth date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateRange}
                  onSelect={setDateRange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Calendar with Default Date"
        description="Calendar with a pre-selected date"
      >
        <div className="p-6 bg-card rounded-lg border border-border inline-block">
          <Calendar
            mode="single"
            selected={new Date()}
            className="rounded-lg border"
          />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Disabled Date Picker"
        description="Date picker in disabled state"
      >
        <div className="p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Label>Date (Disabled)</Label>
            <Button
              variant="outline"
              className="w-full justify-start"
              disabled
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Cannot select date</span>
            </Button>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
