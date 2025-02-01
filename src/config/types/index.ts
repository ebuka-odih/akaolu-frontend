export type NavItem = {
    title: string;
    url: string;
    icon?: string;
    isActive?: boolean;
    shortcut?: string[];
    items?: NavItem[]; // Allows for nested navigation items
  };
  