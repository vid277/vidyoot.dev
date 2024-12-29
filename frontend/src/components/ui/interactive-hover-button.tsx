import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-36 h-10 flex items-center justify-center cursor-pointer overflow-hidden rounded-full border border-zinc-200 bg-white p-2 pr-3 text-center font-semibold dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0 text-sm">
        {text}
      </span>
      <div className="absolute text-sm top-0 z-10 flex h-full w-full translate-x-5 items-center justify-center gap-2 text-zinc-50 opacity-0 transition-all duration-300 group-hover:-translate-x-[-2px] group-hover:opacity-100 dark:text-zinc-900">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.5] group-hover:bg-zinc-900 dark:bg-zinc-50 dark:group-hover:bg-zinc-50"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
