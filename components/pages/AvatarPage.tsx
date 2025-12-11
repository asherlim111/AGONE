import { ComponentSection } from "../ComponentSection";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function AvatarPage() {
  return (
    <div>
      <ComponentSection 
        title="Basic Avatar"
        description="Avatar with image"
      >
        <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Avatar Fallback"
        description="Avatar with text fallback when image is unavailable"
      >
        <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>RW</AvatarFallback>
          </Avatar>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Avatar Sizes"
        description="Different sizes for avatars"
      >
        <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Small" />
            <AvatarFallback style={{ fontSize: 'var(--text-sm)' }}>S</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Default" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Large" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=XLarge" />
            <AvatarFallback style={{ fontSize: 'var(--text-h4)' }}>XL</AvatarFallback>
          </Avatar>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Avatar with Status"
        description="Avatars with online/offline indicators"
      >
        <div className="flex gap-6 p-6 bg-card rounded-lg border border-border">
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Online" />
              <AvatarFallback>ON</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-card"></span>
          </div>
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Away" />
              <AvatarFallback>AW</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-card"></span>
          </div>
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Busy" />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-card"></span>
          </div>
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Offline" />
              <AvatarFallback>OF</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-400 ring-2 ring-card"></span>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Avatar Group"
        description="Multiple avatars stacked together"
      >
        <div className="p-6 bg-card rounded-lg border border-border">
          <div className="flex -space-x-4">
            <Avatar className="ring-2 ring-card">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-card">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-card">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User3" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="ring-2 ring-card">
              <AvatarFallback>+5</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </ComponentSection>

      <ComponentSection 
        title="Avatar in Cards"
        description="Avatars used in user profile cards"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4>John Doe</h4>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Product Designer
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <h4>Sarah Miller</h4>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </ComponentSection>
    </div>
  );
}
