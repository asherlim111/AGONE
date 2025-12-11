import { useState } from "react";
import { ComponentSection } from "../ComponentSection";
import { Calendar } from "../ui/calendar";

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multiDate, setMultiDate] = useState<Date[] | undefined>([]);

  return (
    <div>
      <ComponentSection 
        title="Basic Calendar"
        description="Simple calendar with single date selection"
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
        title="Calendar with Default Date"
        description="Calendar starting with today's date selected"
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
        title="Multiple Date Selection"
        description="Calendar allowing multiple date selection"
      >
        <div className="p-6 bg-card rounded-lg border border-border inline-block">
          <Calendar
            mode="multiple"
            selected={multiDate}
            onSelect={setMultiDate}
            className="rounded-lg border"
          />
          {multiDate && multiDate.length > 0 && (
            <p className="mt-4 text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
              {multiDate.length} date(s) selected
            </p>
          )}
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Calendar Without Border"
        description="Clean calendar without surrounding border"
      >
        <div className="p-6 bg-card rounded-lg border border-border inline-block">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Disabled Calendar"
        description="Calendar in read-only mode"
      >
        <div className="p-6 bg-card rounded-lg border border-border inline-block">
          <Calendar
            mode="single"
            selected={new Date()}
            disabled
            className="rounded-lg border opacity-50"
          />
        </div>
      </ComponentSection>
    </div>
  );
}
