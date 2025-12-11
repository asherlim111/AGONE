interface ComponentSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ComponentSection({ title, description, children }: ComponentSectionProps) {
  return (
    <section className="mb-12">
      <h3 className="mb-2" style={{ fontSize: "var(--text-subtitle-lg)", fontWeight: "var(--font-weight-bold)" }}>{title}</h3>
      {description && (
        <p className="text-muted-foreground mb-6" style={{ fontSize: "var(--text-body-md)", fontWeight: "var(--font-weight-normal)" }}>{description}</p>
      )}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}