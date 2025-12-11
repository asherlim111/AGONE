import { useState } from "react";
import { ComponentSection } from "../ComponentSection";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Calendar } from "../ui/calendar";
import { Info } from "lucide-react";

export function OverlaysPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <ComponentSection 
        title="Dialog (Modal)"
        description="Modal dialog for focused interactions"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">Name</Label>
                  <Input id="dialog-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-email">Email</Label>
                  <Input id="dialog-email" defaultValue="john@example.com" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Alert Dialog"
        description="Interrupting dialog for important confirmations"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive-foreground text-primary-foreground hover:bg-destructive-foreground/90">
                  Delete Account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Sheet (Side Panel)"
        description="Slide-in panel from the side of the screen"
      >
        <div className="flex gap-3 p-6 bg-card rounded-lg border border-border">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Panel</SheetTitle>
                <SheetDescription>
                  This panel slides in from the left side.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p>Content goes here...</p>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Right Panel</SheetTitle>
                <SheetDescription>
                  This is the default right-side panel.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p>Panel content and controls can be placed here.</p>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Bottom Panel</SheetTitle>
                <SheetDescription>
                  This panel slides up from the bottom.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p>Great for mobile-friendly actions.</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Popover"
        description="Display content in a floating container"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Pick a Date</Button>
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
      </ComponentSection>

      <ComponentSection 
        title="Tooltip"
        description="Contextual information on hover"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <TooltipProvider>
            <div className="flex gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Additional information</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Long content</Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>This tooltip contains more detailed information that might span multiple lines to provide better context.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Hover Card"
        description="Rich content preview on hover"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@username</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  JD
                </div>
                <div className="space-y-1">
                  <h4 style={{ fontWeight: 'var(--font-weight-medium)' }}>@username</h4>
                  <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                    Product Designer – Creating beautiful user experiences
                  </p>
                  <div className="flex gap-4 pt-2">
                    <div>
                      <span style={{ fontWeight: 'var(--font-weight-medium)' }}>124</span>
                      <span className="text-muted-foreground ml-1" style={{ fontSize: 'var(--text-sm)' }}>Following</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 'var(--font-weight-medium)' }}>2,048</span>
                      <span className="text-muted-foreground ml-1" style={{ fontSize: 'var(--text-sm)' }}>Followers</span>
                    </div>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </ComponentSection>
    </div>
  );
}
