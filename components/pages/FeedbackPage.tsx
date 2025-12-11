import { ComponentSection } from "../ComponentSection";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Skeleton } from "../ui/skeleton";
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner@2.0.3";
import { Toaster } from "../ui/sonner";

export function FeedbackPage() {
  return (
    <div>
      <Toaster />
      <ComponentSection 
        title="Alerts"
        description="Display important messages to users"
      >
        <div className="space-y-4 max-w-2xl">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert message.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-green-500/50 text-green-900 dark:text-green-100">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-yellow-500/50 text-yellow-900 dark:text-yellow-100">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review your information before proceeding.
            </AlertDescription>
          </Alert>
          
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error processing your request. Please try again.
            </AlertDescription>
          </Alert>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Badges"
        description="Small count and labeling components"
      >
        <div className="flex flex-wrap gap-3 p-6 bg-card rounded-lg border border-border">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
          <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Progress Bar"
        description="Visual indication of task completion"
      >
        <div className="space-y-6 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label>Upload Progress</label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>33%</span>
            </div>
            <Progress value={33} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label>Installation</label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>66%</span>
            </div>
            <Progress value={66} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label>Complete</label>
              <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Toast Notifications"
        description="Temporary notification messages"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => toast("Default toast notification")}>
              Default Toast
            </Button>
            <Button onClick={() => toast.success("Operation completed successfully!")}>
              Success Toast
            </Button>
            <Button onClick={() => toast.error("Something went wrong!")}>
              Error Toast
            </Button>
            <Button onClick={() => toast.info("Here's some information for you")}>
              Info Toast
            </Button>
            <Button 
              onClick={() => toast("Event scheduled", {
                description: "Your event has been scheduled for tomorrow at 10:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => toast("Event cancelled")
                }
              })}
            >
              Toast with Action
            </Button>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Loading Skeletons"
        description="Placeholder while content is loading"
      >
        <div className="space-y-6 p-6 bg-card rounded-lg border border-border max-w-md">
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>

          <div className="space-y-2">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
