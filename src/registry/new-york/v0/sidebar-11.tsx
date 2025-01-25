import * as React from "react";
import { ChevronRight, File, Folder } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/new-york/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible";
import { Separator } from "@/registry/new-york/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/registry/new-york/ui/sidebar";

// Adjusted the FileTree type to allow broader compatibility.
type FileTree = string | [string, (string | FileTree)[]];

const data = {
  changes: [
    { file: "README.md", state: "M" },
    { file: "api/hello/route.ts", state: "U" },
    { file: "app/layout.tsx", state: "M" },
  ],
  tree: [
    ["app", [["api", [["hello", [["route.ts"]]]]], ["page.tsx"], ["layout.tsx"]]],
    [
      "components",
      [["ui", [["button.tsx"], ["card.tsx"]]], ["header.tsx"], ["footer.tsx"]],
    ],
    ["lib", [["util.ts"]]],
    ["public", [["favicon.ico"], ["vercel.svg"]]],
    [".eslintrc.json"],
    [".gitignore"],
    ["next.config.js"],
    ["tailwind.config.js"],
    ["package.json"],
    ["README.md"],
  ] as unknown as FileTree[], // Explicitly cast to FileTree[] for proper type inference.
};

export const iframeHeight = "800px";
export const description = "A sidebar with a collapsible file tree.";

export default function Page() {
  const [currentPath, setCurrentPath] = React.useState<string[]>([]);

  return (
    <SidebarProvider>
      <AppSidebar setCurrentPath={setCurrentPath} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {currentPath.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href="#">{crumb}</BreadcrumbLink>
                  {index < currentPath.length - 1 && <BreadcrumbSeparator />}
                </BreadcrumbItem>
              ))}
              {currentPath.length > 0 && (
                <BreadcrumbPage>
                  {currentPath[currentPath.length - 1]}
                </BreadcrumbPage>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function AppSidebar({
  setCurrentPath,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  setCurrentPath: (path: string[]) => void;
}) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Changes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.changes.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <File />
                    {item.file}
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => (
                <Tree
                  key={index}
                  item={item}
                  setCurrentPath={setCurrentPath}
                  path={[]}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

type TreeProps = {
  item: FileTree;
  setCurrentPath: (path: string[]) => void;
  path: string[];
};

function Tree({ item, setCurrentPath, path }: TreeProps) {
  if (typeof item === "string") {
    const handleClick = () => {
      setCurrentPath([...path, item]);
    };

    return (
      <SidebarMenuButton
        onClick={handleClick}
        className="data-[active=true]:bg-transparent"
      >
        <File />
        {item}
      </SidebarMenuButton>
    );
  }

  const [name, children] = item;

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={path.length < 2}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {children.map((subItem, index) => (
              <Tree
                key={index}
                item={subItem}
                setCurrentPath={setCurrentPath}
                path={[...path, name]}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
