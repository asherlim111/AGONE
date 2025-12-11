import { useState } from "react";
import { PageType } from "../App";
import { 
  LayoutGrid, 
  ChevronLeft, 
  ChevronRight,
  Type,
  Palette,
  Box,
  MousePointer,
  Grid3x3,
  Circle,
  Navigation2,
  ChevronRight as Chevron,
  Hash,
  FormInput,
  ChevronDown,
  FileText,
  Search,
  CheckSquare,
  Calendar as CalendarIcon,
  Clock,
  SlidersHorizontal,
  Award,
  User,
  CalendarDays,
  CreditCard
} from "lucide-react";
import logoImage from "figma:asset/aab83595f84541e8d6e8947264eb98950045984c.png";
import gradientImage from "figma:asset/f424a64b7b4dc67933473290091886faeb51934c.png";

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

interface MenuItem {
  id: PageType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "General",
    items: [
      { id: "typography", label: "Typography", icon: Type },
      { id: "colors", label: "Colors", icon: Palette },
      { id: "shadow", label: "Shadow", icon: Box },
      { id: "button", label: "Button", icon: MousePointer },
      { id: "button-group", label: "Button Group", icon: Grid3x3 },
      { id: "icon-button", label: "Icon Button", icon: Circle },
    ]
  },
  {
    title: "Navigation",
    items: [
      { id: "side-navigation", label: "Side Navigation", icon: Navigation2 },
      { id: "breadcrumbs", label: "Breadcrumbs", icon: Chevron },
      { id: "pagination", label: "Pagination", icon: Hash },
      { id: "tabs", label: "Tabs", icon: LayoutGrid },
    ]
  },
  {
    title: "Data Entry",
    items: [
      { id: "input-field", label: "Input Field", icon: FormInput },
      { id: "dropdown", label: "Dropdown", icon: ChevronDown },
      { id: "text-area", label: "Text Area", icon: FileText },
      { id: "search", label: "Search", icon: Search },
      { id: "checkbox-radio", label: "Checkbox & Radio", icon: CheckSquare },
      { id: "date-picker", label: "Date Picker", icon: CalendarIcon },
      { id: "time-picker", label: "Time Picker", icon: Clock },
      { id: "slider", label: "Slider", icon: SlidersHorizontal },
    ]
  },
  {
    title: "Data Display",
    items: [
      { id: "badge", label: "Badge", icon: Award },
      { id: "avatar", label: "Avatar", icon: User },
      { id: "calendar", label: "Calendar", icon: CalendarDays },
      { id: "card", label: "Card", icon: CreditCard },
    ]
  },
];

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className="relative flex flex-col overflow-hidden transition-all duration-300"
      style={{ 
        fontFamily: 'Noto Sans, sans-serif',
        width: isCollapsed ? '80px' : '280px',
        backgroundColor: '#05153D'
      }}
    >
      {/* Gradient Background Effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '400px',
          backgroundImage: `url(${gradientImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          zIndex: 0
        }}
      />

      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between border-b border-white/10 relative z-10">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Aventra Group" 
              className="h-8"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded hover:bg-white/10 transition-colors text-sidebar-foreground ml-auto"
          style={{ borderRadius: 'var(--radius)' }}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-auto relative z-10" style={{ padding: 'var(--spacing-4) 0' }}>
        {menuCategories.map((category, categoryIndex) => (
          <div key={category.title} className={categoryIndex > 0 ? "mt-6" : ""}>
            {!isCollapsed && (
              <h3 
                className="text-sidebar-foreground mb-2"
                style={{ 
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-bold)',
                  opacity: 0.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  paddingLeft: '24px',
                }}
              >
                {category.title}
              </h3>
            )}
            <ul className="space-y-1">
              {category.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <li 
                    key={item.id}
                    className="relative transition-all"
                    style={{
                      background: isActive 
                        ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)'
                        : 'transparent',
                      borderRight: isActive ? '4px solid rgba(3, 248, 252, 1)' : '4px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <button
                      onClick={() => onPageChange(item.id)}
                      className={`w-full flex items-center gap-3 py-3 transition-all ${
                        isActive
                          ? "text-white"
                          : "text-sidebar-foreground"
                      }`}
                      style={{
                        fontFamily: 'Noto Sans, sans-serif',
                        fontSize: 'var(--text-base)',
                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                        paddingLeft: isCollapsed ? '0' : '24px',
                        paddingRight: '0',
                      }}
                      title={isCollapsed ? item.label : undefined}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="truncate">{item.label}</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}