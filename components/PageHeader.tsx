interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div 
      className="w-full flex items-end"
      style={{
        height: '120px',
        paddingTop: '32px',
        paddingBottom: '32px',
        backgroundColor: '#F7F9FF',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        paddingLeft: '24px',
        paddingRight: '24px',
        width: '100%',
      }}>
        <h4 
          style={{
            fontFamily: 'Noto Sans, sans-serif',
            marginBottom: 'var(--spacing-2)',
            color: 'var(--foreground)',
          }}
        >
          {title}
        </h4>
        <p 
          style={{
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: '16px',
            color: 'var(--muted-foreground)',
            fontWeight: 'var(--font-weight-medium)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}