type RegistryItem = {
    component: string; // Using string to represent text
    name: string;
    description?: string;
  };
  
  type IndexType = {
    [style: string]: {
      [name: string]: RegistryItem;
    };
  };
  
  export const Index: IndexType = {
    "new-york": {
      Button: { name: "Button", component: "This is a Button" },
      Card: { name: "Card", component: "This is a Card" },
    },
    "default-style": {
      Button: { name: "Default Button", component: "This is the Default Button" },
    },
  };
  