declare module "types/unist" {
    export interface UnistNode {
      type: string; // The type of the node (e.g., "element", "text")
      value?: string; // Optional value for text nodes
      children?: UnistNode[]; // Optional array of child nodes
      tagName?: string; // For element nodes, the tag name (e.g., "pre", "div")
      properties?: {
        [key: string]: unknown; // Allow arbitrary properties
        __rawString__?: string; // Specific property used in the code
        __npmCommand__?: string; // Custom commands
        __yarnCommand__?: string;
        __pnpmCommand__?: string;
        __bunCommand__?: string;
      };
      [key: string]: unknown; 
    }
  
  

  export interface UnistTree extends UnistNode {
    isRoot: boolean; // Mark the tree as the root node
  }  }
  