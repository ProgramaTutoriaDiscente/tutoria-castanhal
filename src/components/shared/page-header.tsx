import { cn } from "@/lib/utils";
import { Section } from "../section/section";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <Section
      enableBg
      background={"gray"}
      className={cn("border-b-2 border-secondary", className)}
    >
      <div className="mx-auto max-w-prose space-y-6 py-20 text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-lg text-muted-foreground ">{description}</p>
      </div>
    </Section>
  );
}
