export type Theme = {
    name: string;
    primaryColor: string;
    secondaryColor: string;
  };
  
  export const THEMES: Theme[] = [
    {
      name: "light",
      primaryColor: "#ffffff",
      secondaryColor: "#f3f4f6",
    },
    {
      name: "dark",
      primaryColor: "#1f2937",
      secondaryColor: "#111827",
    },
  ];
  