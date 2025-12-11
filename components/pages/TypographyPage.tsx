export function TypographyPage() {
  const typographyData = [
    { name: 'H1. Headline', weight: 'Bold', weightValue: 700, size: '61.00', sizeValue: 61, line: '124%', lineValue: 1.24, spacing: '0' },
    { name: 'H2. Headline', weight: 'Bold', weightValue: 700, size: '49.00', sizeValue: 49, line: '124%', lineValue: 1.24, spacing: '0' },
    { name: 'H3. Headline', weight: 'Bold', weightValue: 700, size: '39.18', sizeValue: 39.18, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'H4. Headline', weight: 'Bold', weightValue: 700, size: '31.95', sizeValue: 31.95, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: '', weight: '', size: '', line: '', spacing: '', divider: true },
    { name: 'Subtitle Extra Large', weight: 'Bold', weightValue: 700, size: '25', sizeValue: 25, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Large', weight: 'Bold', weightValue: 700, size: '20', sizeValue: 20, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Medium', weight: 'Bold', weightValue: 700, size: '16', sizeValue: 16, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Small', weight: 'Bold', weightValue: 700, size: '14', sizeValue: 14, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Extra Large', weight: 'SemiBold', weightValue: 600, size: '25', sizeValue: 25, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Large', weight: 'SemiBold', weightValue: 600, size: '20', sizeValue: 20, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Medium', weight: 'SemiBold', weightValue: 600, size: '16', sizeValue: 16, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Small', weight: 'SemiBold', weightValue: 600, size: '14', sizeValue: 14, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle XS', weight: 'SemiBold', weightValue: 600, size: '12', sizeValue: 12, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: '', weight: '', size: '', line: '', spacing: '', divider: true },
    { name: 'Subtitle Extra Large', weight: 'Medium', weightValue: 500, size: '25', sizeValue: 25, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Large', weight: 'Medium', weightValue: 500, size: '20', sizeValue: 20, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Medium', weight: 'Medium', weightValue: 500, size: '16', sizeValue: 16, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle Small', weight: 'Medium', weightValue: 500, size: '14', sizeValue: 14, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Subtitle XS', weight: 'Medium', weightValue: 500, size: '12', sizeValue: 12, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: '', weight: '', size: '', line: '', spacing: '', divider: true },
    { name: 'Body Text Large', weight: 'Regular', weightValue: 400, size: '16', sizeValue: 16, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Body Text Medium', weight: 'Regular', weightValue: 400, size: '14', sizeValue: 14, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Body Text Small', weight: 'Regular', weightValue: 400, size: '13', sizeValue: 13, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Body Text XS', weight: 'Regular', weightValue: 400, size: '12', sizeValue: 12, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Body Text XXS', weight: 'Regular', weightValue: 400, size: '10', sizeValue: 10, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: '', weight: '', size: '', line: '', spacing: '', divider: true },
    { name: 'Link Underlined Medium', weight: 'SemiBold', weightValue: 600, size: '16', sizeValue: 16, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Link Underlined Small', weight: 'SemiBold', weightValue: 600, size: '14', sizeValue: 14, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Link Underlined XS', weight: 'SemiBold', weightValue: 600, size: '12', sizeValue: 12, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Link Underlined XXS', weight: 'SemiBold', weightValue: 600, size: '10', sizeValue: 10, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: '', weight: '', size: '', line: '', spacing: '', divider: true },
    { name: 'Link Underlined Medium', weight: 'Regular', weightValue: 400, size: '16', sizeValue: 16, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Link Underlined Small', weight: 'Regular', weightValue: 400, size: '14', sizeValue: 14, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Link Underlined XS', weight: 'Regular', weightValue: 400, size: '12', sizeValue: 12, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: 'Link Underlined XXS', weight: 'Regular', weightValue: 400, size: '10', sizeValue: 10, line: '140%', lineValue: 1.40, spacing: '0' },
    { name: '', weight: '', size: '', line: '', spacing: '', divider: true },
    { name: 'Aventra Design System', weight: 'SemiBold', weightValue: 600, size: '7', sizeValue: 7, line: '100%', lineValue: 1.00, spacing: '0' },
  ];

  return (
    <div 
      style={{
        paddingLeft: 'var(--spacing-10)',
        paddingRight: 'var(--spacing-10)',
        paddingTop: 'var(--spacing-8)',
        paddingBottom: 'var(--spacing-10)',
      }}
    >
      {/* Typeface Section */}
      <div style={{ marginBottom: 'var(--spacing-6)' }}>
        <p 
          style={{
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--foreground)',
            marginBottom: 'var(--spacing-3)',
          }}
        >
          Typeface
        </p>
        <h2 
          style={{
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--foreground)',
          }}
        >
          Noto Sans
        </h2>
      </div>

      {/* Horizontal Divider */}
      <div 
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--border)',
          marginTop: 'var(--spacing-8)',
          marginBottom: 'var(--spacing-8)',
        }}
      />

      {/* Font Weight Section */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <p 
          style={{
            fontFamily: 'Noto Sans, sans-serif',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--foreground)',
            marginBottom: 'var(--spacing-6)',
          }}
        >
          Font Weight
        </p>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--spacing-8)',
          }}
        >
          <div>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '24px',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--foreground)',
                marginBottom: 'var(--spacing-2)',
              }}
            >
              Regular
            </p>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--muted-foreground)',
              }}
            >
              400
            </p>
          </div>
          <div>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '24px',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--foreground)',
                marginBottom: 'var(--spacing-2)',
              }}
            >
              Medium
            </p>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--muted-foreground)',
              }}
            >
              500
            </p>
          </div>
          <div>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '24px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--foreground)',
                marginBottom: 'var(--spacing-2)',
              }}
            >
              SemiBold
            </p>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--muted-foreground)',
              }}
            >
              600
            </p>
          </div>
          <div>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '24px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--foreground)',
                marginBottom: 'var(--spacing-2)',
              }}
            >
              Bold
            </p>
            <p 
              style={{
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--muted-foreground)',
              }}
            >
              700
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div 
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--border)',
          marginTop: 'var(--spacing-8)',
          marginBottom: 'var(--spacing-8)',
        }}
      />

      {/* Typography Table */}
      <div>
        {/* Table Header */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: 'var(--spacing-6)',
            paddingBottom: 'var(--spacing-4)',
            borderBottom: '1px solid var(--border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <p 
            style={{
              fontFamily: 'Noto Sans, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--muted-foreground)',
            }}
          >
            Typeface
          </p>
          <p 
            style={{
              fontFamily: 'Noto Sans, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--muted-foreground)',
            }}
          >
            Weight
          </p>
          <p 
            style={{
              fontFamily: 'Noto Sans, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--muted-foreground)',
            }}
          >
            Size
          </p>
          <p 
            style={{
              fontFamily: 'Noto Sans, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--muted-foreground)',
            }}
          >
            Line
          </p>
          <p 
            style={{
              fontFamily: 'Noto Sans, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-normal)',
              color: 'var(--muted-foreground)',
            }}
          >
            Spacing
          </p>
        </div>

        {/* Table Rows */}
        {typographyData.map((item, index) => {
          if (item.divider) {
            return (
              <div 
                key={index}
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'var(--border)',
                  marginTop: 'var(--spacing-4)',
                  marginBottom: 'var(--spacing-4)',
                }}
              />
            );
          }

          return (
            <div 
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                gap: 'var(--spacing-6)',
                paddingTop: 'var(--spacing-3)',
                paddingBottom: 'var(--spacing-3)',
                alignItems: 'center',
              }}
            >
              <p 
                style={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: `${item.sizeValue}px`,
                  fontWeight: item.weightValue,
                  lineHeight: item.lineValue,
                  color: 'var(--foreground)',
                }}
              >
                {item.name}
              </p>
              <p 
                style={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                {item.weight}
              </p>
              <p 
                style={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                {item.size}
              </p>
              <p 
                style={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                {item.line}
              </p>
              <p 
                style={{
                  fontFamily: 'Noto Sans, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--foreground)',
                }}
              >
                {item.spacing}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
