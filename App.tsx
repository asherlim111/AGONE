import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { PageHeader } from "./components/PageHeader";
import { TypographyPage } from "./components/pages/TypographyPage";
import { ColorsPage } from "./components/pages/ColorsPage";
import { ShadowPage } from "./components/pages/ShadowPage";
import { ButtonPage } from "./components/pages/ButtonPage";
import { ButtonGroupPage } from "./components/pages/ButtonGroupPage";
import { IconButtonPage } from "./components/pages/IconButtonPage";
import { BreadcrumbsPage } from "./components/pages/BreadcrumbsPage";
import { PaginationPage } from "./components/pages/PaginationPage";
import { TabsPage } from "./components/pages/TabsPage";
import { InputFieldPage } from "./components/pages/InputFieldPage";
import { DropdownPage } from "./components/pages/DropdownPage";
import { TextAreaPage } from "./components/pages/TextAreaPage";
import { SearchPage } from "./components/pages/SearchPage";
import { CheckboxRadioPage } from "./components/pages/CheckboxRadioPage";
import { DatePickerPage } from "./components/pages/DatePickerPage";
import { TimePickerPage } from "./components/pages/TimePickerPage";
import { SliderPage } from "./components/pages/SliderPage";
import { BadgePage } from "./components/pages/BadgePage";
import { AvatarPage } from "./components/pages/AvatarPage";
import { CalendarPage } from "./components/pages/CalendarPage";
import { CardPage } from "./components/pages/CardPage";
import { SideNavigationPage } from "./components/pages/SideNavigationPage";

export type PageType = 
  // General
  | "typography" 
  | "colors" 
  | "shadow"
  | "button"
  | "button-group"
  | "icon-button"
  // Navigation
  | "side-navigation"
  | "breadcrumbs"
  | "pagination"
  | "tabs"
  // Data Entry
  | "input-field"
  | "dropdown"
  | "text-area"
  | "search"
  | "checkbox-radio"
  | "date-picker"
  | "time-picker"
  | "slider"
  // Data Display
  | "badge"
  | "avatar"
  | "calendar"
  | "card";

interface PageMetadata {
  title: string;
  description: string;
}

const pageMetadata: Record<PageType, PageMetadata> = {
  // General
  typography: {
    title: "Typography",
    description: "Font styles, sizes, and text formatting used throughout the design system.",
  },
  colors: {
    title: "Colors",
    description: "Color palette and usage guidelines for the design system.",
  },
  shadow: {
    title: "Shadow",
    description: "Elevation and shadow styles for depth and hierarchy.",
  },
  button: {
    title: "Button",
    description: "Interactive buttons in various styles and states.",
  },
  "button-group": {
    title: "Button Group",
    description: "Multiple buttons grouped together for related actions.",
  },
  "icon-button": {
    title: "Icon Button",
    description: "Compact buttons with icon-only display for actions.",
  },
  // Navigation
  "side-navigation": {
    title: "Side Navigation",
    description: "Collapsible sidebar navigation with collapsed and expanded states for efficient space management.",
  },
  breadcrumbs: {
    title: "Breadcrumbs",
    description: "Navigation aid showing the current location within the application hierarchy.",
  },
  pagination: {
    title: "Pagination",
    description: "Navigation component for dividing content across multiple pages.",
  },
  tabs: {
    title: "Tabs",
    description: "Organize content into separate views accessible through tab navigation.",
  },
  // Data Entry
  "input-field": {
    title: "Input Field",
    description: "Text input fields for collecting user information.",
  },
  dropdown: {
    title: "Dropdown",
    description: "Selection component for choosing from a list of options.",
  },
  "text-area": {
    title: "Text Area",
    description: "Multi-line text input for longer form content.",
  },
  search: {
    title: "Search",
    description: "Search input component for filtering and finding content.",
  },
  "checkbox-radio": {
    title: "Checkbox & Radio",
    description: "Selection controls for single or multiple choice options.",
  },
  "date-picker": {
    title: "Date Picker",
    description: "Calendar-based input for selecting dates.",
  },
  "time-picker": {
    title: "Time Picker",
    description: "Input component for selecting time values.",
  },
  slider: {
    title: "Slider",
    description: "Input control for selecting a value from a range.",
  },
  // Data Display
  badge: {
    title: "Badge",
    description: "Small labels and tags for categorization and status indication.",
  },
  avatar: {
    title: "Avatar",
    description: "Visual representation of users or entities.",
  },
  calendar: {
    title: "Calendar",
    description: "Date display and selection component with full calendar view.",
  },
  card: {
    title: "Card",
    description: "Container component for grouping related content.",
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("typography");

  const renderPage = () => {
    switch (currentPage) {
      // General
      case "typography":
        return <TypographyPage />;
      case "colors":
        return <ColorsPage />;
      case "shadow":
        return <ShadowPage />;
      case "button":
        return <ButtonPage />;
      case "button-group":
        return <ButtonGroupPage />;
      case "icon-button":
        return <IconButtonPage />;
      // Navigation
      case "side-navigation":
        return <SideNavigationPage />;
      case "breadcrumbs":
        return <BreadcrumbsPage />;
      case "pagination":
        return <PaginationPage />;
      case "tabs":
        return <TabsPage />;
      // Data Entry
      case "input-field":
        return <InputFieldPage />;
      case "dropdown":
        return <DropdownPage />;
      case "text-area":
        return <TextAreaPage />;
      case "search":
        return <SearchPage />;
      case "checkbox-radio":
        return <CheckboxRadioPage />;
      case "date-picker":
        return <DatePickerPage />;
      case "time-picker":
        return <TimePickerPage />;
      case "slider":
        return <SliderPage />;
      // Data Display
      case "badge":
        return <BadgePage />;
      case "avatar":
        return <AvatarPage />;
      case "calendar":
        return <CalendarPage />;
      case "card":
        return <CardPage />;
      default:
        return <TypographyPage />;
    }
  };

  const currentPageMetadata = pageMetadata[currentPage];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-auto">
        <PageHeader 
          title={currentPageMetadata.title} 
          description={currentPageMetadata.description} 
        />
        <div style={{ 
          maxWidth: '1200px',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: 'var(--spacing-8)',
          paddingBottom: 'var(--spacing-8)',
        }}>
          {renderPage()}
        </div>
      </main>
    </div>
  );
}