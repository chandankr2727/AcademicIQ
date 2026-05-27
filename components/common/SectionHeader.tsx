import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function SectionHeader({ title, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      {action && (
        <a
          href={action.href}
          className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
        >
          {action.label}
          <span aria-hidden="true">&rarr;</span>
        </a>
      )}
    </div>
  );
}
