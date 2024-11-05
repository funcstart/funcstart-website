import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  large?: boolean;
}

export function Container({
  className,
  children,
  large = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        large ? "max-w-7xl" : "max-w-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
