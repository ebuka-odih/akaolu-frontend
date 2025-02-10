"use client";

import * as React from "react";
import type { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/registry/new-york/ui/dialog";

// Command Component
interface CommandProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    {...props}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
  />
));
Command.displayName = "Command";

// CommandDialog Component
interface CommandDialogProps extends DialogProps {
  children: React.ReactNode;
}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
  <Dialog {...props}>
    <DialogContent className="overflow-hidden p-0">
      <Command className="p-2">{children}</Command>
    </DialogContent>
  </Dialog>
);

// CommandInput Component
interface CommandInputProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
      "value"
    >,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  className?: string;
  value?: string; // Explicitly re-define `value` with a consistent type
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      {...props}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground",
        className
      )}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

// CommandList Component
interface CommandListProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    {...props}
    className={cn("max-h-[300px] overflow-y-auto", className)}
  />
));
CommandList.displayName = "CommandList";

// CommandEmpty Component
interface CommandEmptyProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    {...props}
    className={cn("py-6 text-center text-sm text-muted-foreground", className)}
  />
));
CommandEmpty.displayName = "CommandEmpty";

// CommandGroup Component
interface CommandGroupProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>,
    React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    {...props}
    className={cn("p-2 text-foreground", className)}
  />
));
CommandGroup.displayName = "CommandGroup";

// ✅ FIXED: CommandItemProps (Previously Missing)
interface CommandItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>,
    "value" | "className"
  > {
  className?: string;
  value?: string;
}

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    {...props}
    className={cn(
      "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
      className
    )}
  />
));
CommandItem.displayName = "CommandItem";

// CommandShortcut Component
interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => (
  <span
    {...props}
    className={cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      className
    )}
  />
);
CommandShortcut.displayName = "CommandShortcut";

// Export Components
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
};
