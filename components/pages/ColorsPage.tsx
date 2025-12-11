export function ColorsPage() {
  // Color scales data extracted from the palette image
  const colorScales = [
    {
      name: "Menu",
      colors: [
        { scale: "Menu", hex: "#05153D" },
      ],
    },
    {
      name: "Neutral",
      colors: [
        { scale: "Lightest", hex: "#F5F7F9" },
        { scale: "25", hex: "#EFF2F5" },
        { scale: "50", hex: "#E5E8F0" },
        { scale: "100", hex: "#D6DBE6" },
        { scale: "200", hex: "#B5C1D3" },
        { scale: "300", hex: "#9FAEC6" },
        { scale: "400", hex: "#8C9EBB" },
        { scale: "500", hex: "#7288AC" },
        { scale: "600", hex: "#556C91" },
        { scale: "700", hex: "#3C4C67" },
        { scale: "800", hex: "#283243" },
        { scale: "900", hex: "#171D27" },
      ],
    },
    {
      name: "White",
      colors: [
        { scale: "0%", hex: "#FFFFFF00" },
        { scale: "5%", hex: "#FFFFFF0D" },
        { scale: "10%", hex: "#FFFFFF1A" },
        { scale: "20%", hex: "#FFFFFF33" },
        { scale: "30%", hex: "#FFFFFF4D" },
        { scale: "40%", hex: "#FFFFFF66" },
        { scale: "50%", hex: "#FFFFFF80" },
        { scale: "60%", hex: "#FFFFFF99" },
        { scale: "70%", hex: "#FFFFFFB3" },
        { scale: "80%", hex: "#FFFFFFCC" },
        { scale: "90%", hex: "#FFFFFFE6" },
        { scale: "100", hex: "#FFFFFF" },
      ],
    },
    {
      name: "Primary",
      colors: [
        { scale: "Lightest", hex: "#F5FAFF" },
        { scale: "25", hex: "#EBF3FF" },
        { scale: "50", hex: "#D8E7FE" },
        { scale: "100", hex: "#C4DAFD" },
        { scale: "200", hex: "#9CC2FC" },
        { scale: "300", hex: "#74A9FB" },
        { scale: "400", hex: "#4D91FA" },
        { scale: "500", hex: "#296DF5" },
        { scale: "600", hex: "#0A50DC" },
        { scale: "700", hex: "#083DA6" },
        { scale: "800", hex: "#052970" },
        { scale: "900", hex: "#041A49" },
      ],
    },
    {
      name: "Secondary",
      colors: [
        { scale: "Lightest", hex: "#F7F4FF" },
        { scale: "25", hex: "#EFE9FF" },
        { scale: "50", hex: "#E4D9FF" },
        { scale: "100", hex: "#CCB8FF" },
        { scale: "200", hex: "#BA9FFF" },
        { scale: "300", hex: "#A785FF" },
        { scale: "400", hex: "#8E62FF" },
        { scale: "500", hex: "#7742FF" },
        { scale: "600", hex: "#630AFF" },
        { scale: "700", hex: "#4C00D1" },
        { scale: "800", hex: "#380099" },
        { scale: "900", hex: "#230061" },
      ],
    },
    {
      name: "Purple",
      colors: [
        { scale: "Lightest", hex: "#FBF6FE" },
        { scale: "25", hex: "#F6E9FE" },
        { scale: "50", hex: "#F1DDFD" },
        { scale: "100", hex: "#DDA3FA" },
        { scale: "200", hex: "#D295F9" },
        { scale: "300", hex: "#C472F7" },
        { scale: "400", hex: "#B650F1" },
        { scale: "500", hex: "#AB39F3" },
        { scale: "600", hex: "#892EC2" },
        { scale: "700", hex: "#672292" },
        { scale: "800", hex: "#441761" },
        { scale: "900", hex: "#2D0447" },
      ],
    },
    {
      name: "Cyan",
      colors: [
        { scale: "Lightest", hex: "#F5FEFF" },
        { scale: "25", hex: "#EBFDFE" },
        { scale: "50", hex: "#DCFCFE" },
        { scale: "100", hex: "#BFFAFD" },
        { scale: "200", hex: "#84F4FB" },
        { scale: "300", hex: "#08E1ED" },
        { scale: "400", hex: "#08C9D4" },
        { scale: "500", hex: "#06AFB8" },
        { scale: "600", hex: "#008FA0" },
        { scale: "700", hex: "#007388" },
        { scale: "800", hex: "#005363" },
        { scale: "900", hex: "#012A2D" },
      ],
    },
    {
      name: "Green",
      colors: [
        { scale: "Lightest", hex: "#F4FFF8" },
        { scale: "25", hex: "#E1FEEF" },
        { scale: "50", hex: "#C5FCDF" },
        { scale: "100", hex: "#9DFBCA" },
        { scale: "200", hex: "#4CFA9F" },
        { scale: "300", hex: "#0EE775" },
        { scale: "400", hex: "#0CD46C" },
        { scale: "500", hex: "#0AA956" },
        { scale: "600", hex: "#099049" },
        { scale: "700", hex: "#007535" },
        { scale: "800", hex: "#054D27" },
        { scale: "900", hex: "#032B16" },
      ],
    },
    {
      name: "Lime",
      colors: [
        { scale: "Lightest", hex: "#FDFFF0" },
        { scale: "25", hex: "#F8FED8" },
        { scale: "50", hex: "#EEFDA7" },
        { scale: "100", hex: "#E2F76E" },
        { scale: "200", hex: "#D9F53D" },
        { scale: "300", hex: "#C7E80C" },
        { scale: "400", hex: "#BADA0C" },
        { scale: "500", hex: "#9EB80A" },
        { scale: "600", hex: "#849A09" },
        { scale: "700", hex: "#6B7E07" },
        { scale: "800", hex: "#4C5903" },
        { scale: "900", hex: "#2A3201" },
      ],
    },
    {
      name: "Yellow",
      colors: [
        { scale: "Lightest", hex: "#FFFCEB" },
        { scale: "25", hex: "#FFF8D6" },
        { scale: "50", hex: "#FFF3B8" },
        { scale: "100", hex: "#FFF0A3" },
        { scale: "200", hex: "#FFE97A" },
        { scale: "300", hex: "#FFE252" },
        { scale: "400", hex: "#FFDB29" },
        { scale: "500", hex: "#FAD000" },
        { scale: "600", hex: "#EBB600" },
        { scale: "700", hex: "#CC9500" },
        { scale: "800", hex: "#856100" },
        { scale: "900", hex: "#3D3200" },
      ],
    },
    {
      name: "Orange",
      colors: [
        { scale: "Lightest", hex: "#FFF6F0" },
        { scale: "25", hex: "#FFEBDB" },
        { scale: "50", hex: "#FFDABD" },
        { scale: "100", hex: "#FFBE89" },
        { scale: "200", hex: "#FFAB5F" },
        { scale: "300", hex: "#FF9450" },
        { scale: "400", hex: "#FF7E42" },
        { scale: "500", hex: "#FF6733" },
        { scale: "600", hex: "#F24A1C" },
        { scale: "700", hex: "#D44116" },
        { scale: "800", hex: "#9D2E0B" },
        { scale: "900", hex: "#571905" },
      ],
    },
    {
      name: "Red",
      colors: [
        { scale: "Lightest", hex: "#FFF5F5" },
        { scale: "25", hex: "#FFEBEB" },
        { scale: "50", hex: "#FFD6D6" },
        { scale: "100", hex: "#FFB8B8" },
        { scale: "200", hex: "#FF9999" },
        { scale: "300", hex: "#FF7575" },
        { scale: "400", hex: "#FF4D4D" },
        { scale: "500", hex: "#FF0505" },
        { scale: "600", hex: "#E40101" },
        { scale: "700", hex: "#AD0000" },
        { scale: "800", hex: "#800000" },
        { scale: "900", hex: "#420000" },
      ],
    },
  ];

  // Gradient scales data
  const generalGradients = [
    // Row 1 - Purple/Blue tones
    { label: "Background Color", hex: "#F7F9FF 171deg #E9EEFC", css: "linear-gradient(171deg, #F7F9FF 0%, #E9EEFC 100%)" },
    { label: "AI Color", hex: "#9CC2FC 135deg #AB39F3", css: "linear-gradient(135deg, #296DF5 0%, #AB39F3 100%)" },
    { label: "Default Gradient", hex: "#296DF5 135deg #7742FF", css: "linear-gradient(135deg, #296DF5 0%, #7742FF 100%)" },
    { label: "P500 → S500", hex: "#296DF5 180deg #7742FF", css: "linear-gradient(180deg, #296DF5 0%, #7742FF 100%)" },
    { label: "S400 → P400", hex: "#8E62FF 90deg #4D91FA", css: "linear-gradient(90deg, #8E62FF 0%, #4D91FA 100%)" },
    { label: "P300 → P400", hex: "#74A9FB 180deg #4D91FA", css: "linear-gradient(180deg, #74A9FB 0%, #4D91FA 100%)" },
    { label: "P50 → S50", hex: "#D8E7FE 180deg #E4D9FF", css: "linear-gradient(180deg, #D8E7FE 0%, #E4D9FF 100%)" },
    
    // Row 2 - Blue/Purple/Cyan/Green tones
    { label: "P500 → PUR400", hex: "#296DF5 135deg #B650F1", css: "linear-gradient(135deg, #296DF5 0%, #B650F1 100%)" },
    { label: "PUR400 → P500", hex: "#B650F1 135deg #296DF5", css: "linear-gradient(135deg, #B650F1 0%, #296DF5 100%)" },
    { label: "C200 → S200", hex: "#84F4FB 135deg #BA9FFF", css: "linear-gradient(135deg, #84F4FB 0%, #BA9FFF 100%)" },
    { label: "S200 → C200", hex: "#BA9FFF 135deg #84F4FB", css: "linear-gradient(135deg, #BA9FFF 0%, #84F4FB 100%)" },
    { label: "L300 → C300", hex: "#C7E80C 135deg #08E1ED", css: "linear-gradient(135deg, #C7E80C 0%, #08E1ED 100%)" },
    { label: "C300 → L300", hex: "#08E1ED 135deg #C7E80C", css: "linear-gradient(135deg, #08E1ED 0%, #C7E80C 100%)" },
    { label: "L300 → C300 (50%)", hex: "#C7E80C 135deg #08E1ED", css: "linear-gradient(135deg, #C7E80C99 0%, #08E1ED99 100%)" },

    // Row 3 - Red/Orange tones
    { label: "O500 → R600", hex: "#FF6733 135deg #E40101 ", css: "linear-gradient(135deg, #FF6733 0%, #E40101 100%)" },
    { label: "R600 → O500", hex: "#FF6733 135deg #FF6733", css: "linear-gradient(135deg, #FF6733 0%, #FF6733 100%)" },
    { label: "O500 → R600 (50%)", hex: "#FF6733 135deg #E40101", css: "linear-gradient(135deg, #FF673380 0%, #E4010180 100%)" },
  ];

  const gradientScales = [
    {
      name: "Gradient_Primary",
      gradients: [
        { label: "Primary 01", hex: "#9CC2FC 180deg #296DF5", css: "linear-gradient(180deg, #9CC2FC 0%, #296DF5 100%)" },
        { label: "Primary 02", hex: "#9CC2FC 90deg #2962F5", css: "linear-gradient(90deg, #9CC2FC 0%, #2962F5 100%)" },
        { label: "Primary 03", hex: "#9CC2FC 270deg #2962F5", css: "linear-gradient(270deg, #9CC2FC 0%, #2962F5 100%)" },
      ],
    },
    {
      name: "Gradient_Secondary",
      gradients: [
        { label: "Secondary 01", hex: "#CCB8FF 180deg #7742FF", css: "linear-gradient(180deg, #CCB8FF 0%, #7742FF 100%)" },
        { label: "Secondary 02", hex: "#CCB8FF 90deg #7742FF", css: "linear-gradient(90deg, #CCB8FF 0%, #7742FF 100%)" },
        { label: "Primary 03", hex: "#CCB8FF 270deg #7742FF", css: "linear-gradient(270deg, #CCB8FF 0%, #7742FF 100%)" },
      ],
    },
    {
      name: "Gradient_Neutral",
      gradients: [
        { label: "Neutral 01", hex: "#D6DBE6 135deg #9FAEC6", css: "linear-gradient(135deg, #D6DBE6 0%, #9FAEC6 100%)" },
        { label: "Neutral 02", hex: "#B5C1D3 135deg #8C9EBB", css: "linear-gradient(135deg, #B5C1D3 0%, #8C9EBB 100%)" },
      ],
    },
    {
      name: "Gradient_Green",
      gradients: [
        { label: "Green 01", hex: "#0EE775 180deg #0AA956", css: "linear-gradient(180deg, #0EE775 0%, #0AA956 100%)" },
        { label: "Green 02", hex: "#0EE775 90deg #0AA956", css: "linear-gradient(90deg, #0EE775 0%, #0AA956 100%)" },
        { label: "Green 03", hex: "#0EE775 270deg #0AA956", css: "linear-gradient(270deg, #0EE775 0%, #0AA956 100%)" },
      ],
    },
    {
      name: "Gradient_Red",
      gradients: [
        { label: "Red 01", hex: "#FF4D4D 180deg #E40101", css: "linear-gradient(180deg, #FF4D4D 0%, #E40101 100%)" },
        { label: "Red 02", hex: "#FF4D4D 90deg #E40101", css: "linear-gradient(90deg, #FF4D4D 0%, #E40101 100%)" },
        { label: "Red 03", hex: "#FF4D4D 270deg #E40101", css: "linear-gradient(270deg, #FF4D4D 0%, #E40101 100%)" },
      ],
    },
    {
      name: "Gradient_Yellow",
      gradients: [
        { label: "Yellow 01", hex: "#FFE252 180deg #FAD000", css: "linear-gradient(180deg, #FFE252 0%, #FAD000 100%)" },
        { label: "Yellow 02", hex: "#FFE252 90deg #FAD000", css: "linear-gradient(90deg, #FFE252 0%, #FAD000 100%)" },
        { label: "Yellow 03", hex: "#FFE252 270deg #FAD000", css: "linear-gradient(270deg, #FFE252 0%, #FAD000 100%)" },
      ],
    },
  ];

  const renderColorCard = (color: { scale: string; hex: string }) => {
    // Check if it's a white/transparent color
    const hasAlpha = color.hex.length === 9;
    
    return (
      <div
        key={color.scale}
        style={{
          borderRadius: '12px',
          background: '#FFF',
          boxShadow: '0 2px 15px 2px rgba(142, 146, 152, 0.20)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minWidth: '115px',
          height: '120px',
        }}
      >
        <div
          style={{
            width: '100%',
            flex: 1,
            background: hasAlpha 
              ? `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='10' fill='%23E9ECEF'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23E9ECEF'/%3E%3Crect x='10' width='10' height='10' fill='%23FFF'/%3E%3Crect y='10' width='10' height='10' fill='%23FFF'/%3E%3C/svg%3E"), ${color.hex}`
              : color.hex,
          }}
        />
        <div
          style={{
            padding: 'var(--spacing-3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-body-xs)',
              color: 'var(--foreground)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '2px',
            }}
          >
            {color.scale}
          </p>
          <p
            style={{
              fontSize: 'var(--text-body-xxs)',
              color: 'var(--muted-foreground)',
              fontFamily: 'monospace',
            }}
          >
            {color.hex}
          </p>
        </div>
      </div>
    );
  };

  const renderGradientCard = (gradient: { label: string; hex: string; css: string }) => {
    return (
      <div
        key={`${gradient.label}-${gradient.hex}`}
        style={{
          borderRadius: '12px',
          background: '#FFF',
          boxShadow: '0 2px 15px 2px rgba(142, 146, 152, 0.20)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minWidth: '115px',
          height: '120px',
        }}
      >
        <div
          style={{
            width: '100%',
            flex: 1,
            background: gradient.css,
          }}
        />
        <div
          style={{
            padding: 'var(--spacing-3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-body-xs)',
              color: 'var(--foreground)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: '2px',
            }}
          >
            {gradient.label}
          </p>
          <p
            style={{
              fontSize: 'var(--text-body-xxs)',
              color: 'var(--muted-foreground)',
              fontFamily: 'monospace',
            }}
          >
            {gradient.hex}
          </p>
        </div>
      </div>
    );
  };

  const renderColorScale = (scale: { name: string; colors: { scale: string; hex: string }[] }) => {
    return (
      <div
        key={scale.name}
        style={{
          marginBottom: '80px',
        }}
      >
        <h4
          style={{
            marginBottom: 'var(--spacing-4)',
          }}
        >
          {scale.name}
        </h4>
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            flexWrap: 'wrap',
          }}
        >
          {scale.colors.map((color) => renderColorCard(color))}
        </div>
      </div>
    );
  };

  const renderGradientScale = (scale: { name: string; gradients: { label: string; hex: string; css: string }[] }) => {
    return (
      <div
        key={scale.name}
        style={{
          marginBottom: '80px',
        }}
      >
        <h4
          style={{
            marginBottom: 'var(--spacing-4)',
          }}
        >
          {scale.name}
        </h4>
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            flexWrap: 'wrap',
          }}
        >
          {scale.gradients.map((gradient, index) => (
            <div
              key={`${gradient.label}-${gradient.hex}-${index}`}
              style={{
                borderRadius: '12px',
                background: '#FFF',
                boxShadow: '0 2px 15px 2px rgba(142, 146, 152, 0.20)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '180px',
                height: '120px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  flex: 1,
                  background: gradient.css,
                }}
              />
              <div
                style={{
                  padding: 'var(--spacing-3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--text-body-xs)',
                    color: 'var(--foreground)',
                    fontWeight: 'var(--font-weight-medium)',
                    marginBottom: '2px',
                  }}
                >
                  {gradient.label}
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-body-xxs)',
                    color: 'var(--muted-foreground)',
                    fontFamily: 'monospace',
                  }}
                >
                  {gradient.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {colorScales.map((scale) => renderColorScale(scale))}
      
      <div style={{ marginTop: 'var(--spacing-8)', marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-6)' }}>Gradients</h3>
        
        {/* General Gradients Section */}
        <div style={{ marginBottom: '80px' }}>
          <h4 style={{ marginBottom: 'var(--spacing-4)' }}>General Gradients</h4>
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-3)',
              flexWrap: 'wrap',
            }}
          >
            {generalGradients.map((gradient, index) => (
              <div
                key={`general-${gradient.label}-${index}`}
                style={{
                  borderRadius: '12px',
                  background: '#FFF',
                  boxShadow: '0 2px 15px 2px rgba(142, 146, 152, 0.20)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: '180px',
                  height: '120px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    flex: 1,
                    background: gradient.css,
                  }}
                />
                <div
                  style={{
                    padding: 'var(--spacing-3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'var(--text-body-xs)',
                      color: 'var(--foreground)',
                      fontWeight: 'var(--font-weight-medium)',
                      marginBottom: '2px',
                    }}
                  >
                    {gradient.label}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-body-xxs)',
                      color: 'var(--muted-foreground)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {gradient.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {gradientScales.map((scale) => renderGradientScale(scale))}
      </div>
    </div>
  );
}
