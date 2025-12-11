import { useState, useRef, useEffect } from "react";
import { cloneElement, isValidElement } from "react";
import svgPaths from "../imports/svg-d8n1migf5l";
import imgGradient from "figma:asset/ac1155f074f7cb601856dd4d6f5fa40a5b562b57.png";
import agLogoCollapsed from "figma:asset/4de33b9e9ad571c4d3ce9bbc8beef78355dde295.png";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: SubMenuItem[];
  subGroups?: SubMenuGroup[];
}

interface SubMenuItem {
  id: string;
  label: string;
  subItems?: NestedMenuItem[];
}

interface NestedMenuItem {
  id: string;
  label: string;
}

interface SubMenuGroup {
  id: string;
  label: string;
  items: SubMenuItem[];
}

interface SideNavigationBarProps {
  menuItems: MenuItem[];
  onMenuItemClick?: (itemId: string) => void;
  onSubItemClick?: (itemId: string, subItemId: string) => void;
}

// Logo Component
function LogoAventraGroup({ collapsed }: { collapsed: boolean }) {
  if (collapsed) {
    return (
      <div style={{ 
        height: '32px', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <img 
          src={agLogoCollapsed} 
          alt="AG Logo" 
          style={{ 
            height: '32px',
            width: 'auto',
            display: 'block'
          }} 
        />
      </div>
    );
  }

  return (
    <div style={{ 
      height: '32px', 
      width: '154px',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0
    }}>
      <div style={{ position: 'absolute', inset: '54.2% 14.99% 8.29% 38.53%' }}>
        <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 72 12">
          <g>
            <path d={svgPaths.p1564a500} fill="white" />
            <path d={svgPaths.p11f84360} fill="white" />
            <path d={svgPaths.p120072b0} fill="white" />
            <path d={svgPaths.p3d61ac0} fill="white" />
            <path d={svgPaths.p1cc347a0} fill="white" />
          </g>
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: '54.06%', left: '38.5%', right: 0, top: '8.4%' }}>
        <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 95 13">
          <g>
            <path d={svgPaths.p15b50980} fill="white" />
            <path d={svgPaths.p36bb7070} fill="white" />
            <path d={svgPaths.p1e25b430} fill="white" />
            <path d={svgPaths.p3e697c00} fill="white" />
            <path d={svgPaths.p35988a00} fill="white" />
            <path d={svgPaths.p1dfd9100} fill="white" />
            <path d={svgPaths.p2a352280} fill="white" />
            <path d={svgPaths.p33d51600} fill="white" />
          </g>
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: '65.91%', top: 0 }}>
        <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 53 32">
          <g>
            <g>
              <path d={svgPaths.p8702840} fill="url(#paint0_linear_logo_expanded)" />
              <path d={svgPaths.p7695f00} fill="url(#paint1_linear_logo_expanded)" />
            </g>
            <path d={svgPaths.p26a19f80} fill="url(#paint2_linear_logo_expanded)" />
            <path d={svgPaths.p1d0e2400} fill="url(#paint3_linear_logo_expanded)" opacity="0.6" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo_expanded" x1="65.3476" x2="8.40902" y1="12.2943" y2="41.3143">
              <stop stopColor="#00FFFF" />
              <stop offset="0.77" stopColor="#066BFC" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_logo_expanded" x1="54.6144" x2="0.684423" y1="-5.29584" y2="22.1912">
              <stop stopColor="#00FFFF" />
              <stop offset="0.77" stopColor="#066BFC" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_logo_expanded" x1="57.3906" x2="4.28163" y1="1.67754" y2="28.7464">
              <stop stopColor="#00FFFF" />
              <stop offset="0.77" stopColor="#066BFC" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_logo_expanded" x1="11.7654" x2="26.2812" y1="11.7919" y2="7.67441">
              <stop offset="0.08" stopColor="#010E54" stopOpacity="0" />
              <stop offset="0.61" stopColor="#010E54" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Pin/Unpin Icon Component
function PinIcon({ isPinned }: { isPinned: boolean }) {
  if (isPinned) {
    // Close/Unpin icon
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d={svgPaths.pda50a00} fill="#8C9EBB" />
      </svg>
    );
  }
  // Pin icon
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p23db6d70} fill="#8C9EBB" />
    </svg>
  );
}

// Menu Icon Component - Using the gradient icons from Figma
function MenuIcon({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d={svgPaths.p18f9e800} fill="#BFFAFD" />
        <g>
          <path d={svgPaths.p1d691180} fill="url(#paint0_linear_menu_active)" />
          <path d={svgPaths.p2dd45600} fill="url(#paint1_linear_menu_active)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_menu_active" x1="4.70556" x2="14.6573" y1="5.525" y2="17.3418">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_menu_active" x1="4.70556" x2="14.6573" y1="5.525" y2="17.3418">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p3bc800} fill="url(#paint0_linear_menu_inactive)" />
      <path d={svgPaths.p19069940} fill="#E5E8F0" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_menu_inactive" x1="6.2963" x2="14.6296" y1="5.83333" y2="19.2593">
          <stop stopColor="#DEEEFF" />
          <stop offset="1" stopColor="#4779F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SideNavigationBar({ 
  menuItems, 
  onMenuItemClick, 
  onSubItemClick 
}: SideNavigationBarProps) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [activeSubItemId, setActiveSubItemId] = useState<string | null>(null);
  const [activeNestedItemId, setActiveNestedItemId] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [expandedSubItems, setExpandedSubItems] = useState<Set<string>>(new Set());
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isExpanded = isPinned || isHovered;
  const activeItem = activeItemId ? menuItems.find(m => m.id === activeItemId) : null;
  const hasChildren = activeItem && ((activeItem.subItems && activeItem.subItems.length > 0) || (activeItem.subGroups && activeItem.subGroups.length > 0));
  const showSecondLevel = activeItemId !== null && hasChildren;

  const handlePinToggle = () => {
    setIsPinned(!isPinned);
    if (isPinned) {
      // When unpinning, collapse everything
      setActiveItemId(null);
      setExpandedGroups(new Set());
      setExpandedSubItems(new Set());
      setActiveSubItemId(null);
      setActiveNestedItemId(null);
    }
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(false);
        if (!isPinned) {
          setActiveItemId(null);
          setExpandedGroups(new Set());
          setExpandedSubItems(new Set());
        }
      }, 200);
    }
  };

  const handleMenuItemClick = (itemId: string) => {
    const item = menuItems.find(m => m.id === itemId);
    
    // If clicking the same item, toggle it off
    if (activeItemId === itemId) {
      setActiveItemId(null);
      setExpandedGroups(new Set());
      setExpandedSubItems(new Set());
      setActiveSubItemId(null);
      setActiveNestedItemId(null);
    } else {
      setActiveItemId(itemId);
      
      if ((item?.subGroups && item.subGroups.length > 0) || (item?.subItems && item.subItems.length > 0)) {
        // Auto-expand first group and select first item
        if (item.subGroups && item.subGroups.length > 0) {
          setExpandedGroups(new Set([item.subGroups[0].id]));
          setActiveSubItemId(item.subGroups[0].items[0]?.id || null);
          setActiveNestedItemId(null);
        } else if (item.subItems && item.subItems.length > 0) {
          // Auto-select first subItem
          const firstSubItem = item.subItems[0];
          setActiveSubItemId(firstSubItem.id);
          
          // If first subItem has nested items, expand it and select first nested item
          if (firstSubItem.subItems && firstSubItem.subItems.length > 0) {
            setExpandedSubItems(new Set([firstSubItem.id]));
            setActiveNestedItemId(firstSubItem.subItems[0].id);
          } else {
            setExpandedSubItems(new Set());
            setActiveNestedItemId(null);
          }
        }
        // Pin the sidebar when showing second level
        if (!isPinned) {
          setIsPinned(true);
        }
      } else {
        setExpandedGroups(new Set());
        setExpandedSubItems(new Set());
        setActiveSubItemId(null);
        setActiveNestedItemId(null);
      }
    }
    
    onMenuItemClick?.(itemId);
  };

  const handleSubItemClick = (subItemId: string, subItem: SubMenuItem) => {
    setActiveSubItemId(subItemId);
    
    // If this subItem has nested items, expand it and select first nested item
    if (subItem.subItems && subItem.subItems.length > 0) {
      setExpandedSubItems(new Set([subItemId]));
      setActiveNestedItemId(subItem.subItems[0].id);
    } else {
      setActiveNestedItemId(null);
    }
    
    if (activeItemId) {
      onSubItemClick?.(activeItemId, subItemId);
    }
  };

  const handleNestedItemClick = (nestedItemId: string) => {
    setActiveNestedItemId(nestedItemId);
  };

  const toggleSubItem = (subItemId: string) => {
    setExpandedSubItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(subItemId)) {
        newSet.delete(subItemId);
      } else {
        newSet.add(subItemId);
      }
      return newSet;
    });
  };

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Layout constants
  const COLLAPSED_WIDTH = '100px';
  const CONTENT_COLUMN_WIDTH = '282px';
  const ICON_RAIL_2ND_LEVEL = '64px';
  const RIGHT_COLUMN_2ND_LEVEL = '217px'; // 282 - 64 - 1 (divider)
  
  // Calculate current width
  let currentWidth = COLLAPSED_WIDTH;
  if (isExpanded && showSecondLevel) {
    // Expanded - 2nd Level: same as Expanded (282px) but split into icon rail + right column
    currentWidth = CONTENT_COLUMN_WIDTH;
  } else if (isExpanded) {
    // Expanded: 282px content column
    currentWidth = CONTENT_COLUMN_WIDTH;
  }

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: currentWidth,
        height: '800px',
        backgroundColor: '#05153D',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease',
        fontFamily: 'Noto Sans, sans-serif',
        overflow: 'hidden'
      }}
    >
      {/* Gradient Background */}
      <div style={{
        position: 'absolute',
        height: '265px',
        left: '50%',
        overflow: 'hidden',
        top: '535px',
        transform: 'translateX(-50%)',
        width: currentWidth,
        pointerEvents: 'none',
        transition: 'width 0.3s ease',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          display: 'flex',
          height: '528.346px',
          alignItems: 'center',
          justifyContent: 'center',
          left: isExpanded ? 'calc(50% - 0.78px)' : 'calc(50% + 59.22px)',
          top: 0,
          transform: 'translateX(-50%)',
          width: '547.208px'
        }}>
          <div style={{
            flexShrink: 0,
            transform: 'rotate(139.316deg) scaleY(-1)'
          }}>
            <div style={{
              height: '292.73px',
              position: 'relative',
              width: '469.964px'
            }}>
              <div style={{
                position: 'absolute',
                inset: '-28.49% -17.75%'
              }}>
                <img 
                  alt="" 
                  style={{
                    display: 'block',
                    maxWidth: 'none',
                    width: '100%',
                    height: '100%'
                  }}
                  height="459.53" 
                  src={imgGradient} 
                  width="636.764" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header with Logo and Pin Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isExpanded ? 'space-between' : 'center',
        padding: isExpanded ? '40px 32px 40px 24px' : '40px 12px',
        boxSizing: 'border-box',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        flexShrink: 0
      }}>
        <LogoAventraGroup collapsed={!isExpanded} />
        {isExpanded && (
          <button
            onClick={handlePinToggle}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius)',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <PinIcon isPinned={isPinned} />
          </button>
        )}
      </div>

      {/* Content Area */}
      <div style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {/* STATE: Collapsed - Only Icons */}
        {!isExpanded && (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            {menuItems.map((item) => {
              const isActive = activeItemId === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  style={{
                    width: '100%',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isActive 
                      ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)'
                      : 'transparent',
                    border: 'none',
                    borderRight: isActive ? '4px solid #84F4FB' : '4px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {isValidElement(item.icon) 
                    ? cloneElement(item.icon as React.ReactElement<any>, { isActive }) 
                    : <MenuIcon isActive={isActive} />}
                </button>
              );
            })}
          </div>
        )}

        {/* STATE: Expanded - Single Column (Icon + Label) */}
        {isExpanded && !showSecondLevel && (
          <div style={{
            width: CONTENT_COLUMN_WIDTH,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            {menuItems.map((item) => {
              const isActive = activeItemId === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  style={{
                    width: '100%',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '0 16px',
                    paddingLeft: '24px',
                    background: isActive 
                      ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)'
                      : 'transparent',
                    border: 'none',
                    borderRight: isActive ? '4px solid #84F4FB' : '4px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                    color: isActive ? 'white' : '#9FAEC6',
                    fontSize: '16px',
                    fontWeight: 600,
                    textAlign: 'left',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div style={{ 
                    flexShrink: 0,
                    width: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {isValidElement(item.icon) 
                      ? cloneElement(item.icon as React.ReactElement<any>, { isActive }) 
                      : <MenuIcon isActive={isActive} />}
                  </div>
                  <span style={{ 
                    flexGrow: 1,
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* STATE: Expanded - 2nd Level - Two Columns */}
        {isExpanded && showSecondLevel && (
          <>
            {/* Left Column - Icon Rail (64px) */}
            <div style={{
              width: ICON_RAIL_2ND_LEVEL,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
              overflowY: 'auto',
              overflowX: 'hidden'
            }}>
              {menuItems.map((item) => {
                const isActive = activeItemId === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    style={{
                      width: '100%',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isActive 
                        ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)'
                        : 'transparent',
                      border: 'none',
                      borderRight: isActive ? '4px solid #84F4FB' : '4px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {isValidElement(item.icon) 
                      ? cloneElement(item.icon as React.ReactElement<any>, { isActive }) 
                      : <MenuIcon isActive={isActive} />}
                  </button>
                );
              })}
            </div>

            {/* Vertical Divider */}
            <div style={{
              width: '1px',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              flexShrink: 0
            }} />

            {/* Right Column - Active Parent + 2nd Level Menu (217px) */}
            <div style={{
              width: RIGHT_COLUMN_2ND_LEVEL,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              overflowX: 'hidden'
            }}>
              {activeItem && (
                <>
                  {/* Active Parent Header - Context Row */}
                  <div style={{
                    width: '100%',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    background: activeSubItemId === null 
                      ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)'
                      : 'rgba(101, 50, 231, 0.20)',
                    borderRight: activeSubItemId === null ? '4px solid #84F4FB' : '4px solid transparent',
                    boxSizing: 'border-box',
                    color: activeSubItemId === null ? 'white' : '#CCB8FF',
                    fontSize: '14px',
                    fontWeight: 700,
                    flexShrink: 0,
                    position: 'relative'
                  }}>
                    {activeItem.label}
                  </div>

                  {/* 2nd Level Menu Items */}
                  <div style={{ width: '100%' }}>
                    {/* Render subGroups */}
                    {activeItem.subGroups?.map((group) => {
                      const isGroupExpanded = expandedGroups.has(group.id);
                      
                      return (
                        <div key={group.id} style={{ width: '100%' }}>
                          {/* 2nd Layer Menu Header */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleGroup(group.id);
                            }}
                            style={{
                              width: '100%',
                              height: '56px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0 16px',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxSizing: 'border-box',
                              color: 'white',
                              fontSize: '16px',
                              fontWeight: 500,
                              textAlign: 'left'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{group.label}</span>
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 16 16" 
                              fill="none"
                              style={{
                                transform: isGroupExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease',
                                flexShrink: 0
                              }}
                            >
                              <path 
                                d="M6 4L10 8L6 12" 
                                stroke="white"
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                              />
                            </svg>
                          </button>

                          {/* Menu Title Items */}
                          {isGroupExpanded && (
                            <div style={{ width: '100%' }}>
                              {group.items.map((menuItem) => {
                                const isMenuItemActive = activeSubItemId === menuItem.id;
                                
                                return (
                                  <button
                                    key={menuItem.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSubItemClick(menuItem.id, menuItem);
                                    }}
                                    style={{
                                      width: '100%',
                                      height: '48px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      padding: '0 16px 0 32px',
                                      background: isMenuItemActive 
                                        ? 'rgba(96, 165, 250, 0.3)' 
                                        : 'transparent',
                                      border: 'none',
                                      borderRight: isMenuItemActive ? '4px solid #84F4FB' : '4px solid transparent',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      boxSizing: 'border-box',
                                      color: isMenuItemActive ? 'white' : '#9FAEC6',
                                      fontSize: '16px',
                                      fontWeight: 400,
                                      textAlign: 'left',
                                      position: 'relative'
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isMenuItemActive) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isMenuItemActive) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                      }
                                    }}
                                  >
                                    {menuItem.label}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Render direct subItems if no groups exist */}
                    {!activeItem.subGroups && activeItem.subItems?.map((subItem) => {
                      const isSubItemActive = activeSubItemId === subItem.id && !activeNestedItemId;
                      const isSubItemExpanded = expandedSubItems.has(subItem.id);
                      const hasNestedItems = subItem.subItems && subItem.subItems.length > 0;
                      
                      return (
                        <div key={subItem.id} style={{ width: '100%' }}>
                          {/* 2nd Level Item */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (hasNestedItems) {
                                toggleSubItem(subItem.id);
                              } else {
                                handleSubItemClick(subItem.id, subItem);
                              }
                            }}
                            style={{
                              width: '100%',
                              height: '48px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: hasNestedItems ? 'space-between' : 'flex-start',
                              padding: '0 16px 0 20px',
                              background: isSubItemActive 
                                ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)' 
                                : 'transparent',
                              border: 'none',
                              borderRight: isSubItemActive ? '4px solid #84F4FB' : '4px solid transparent',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxSizing: 'border-box',
                              color: isSubItemActive ? '#F5F7F9' : '#E5E8F0',
                              fontSize: '14px',
                              fontWeight: 400,
                              textAlign: 'left',
                              position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubItemActive) {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubItemActive) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }
                            }}
                          >
                            <span>{subItem.label}</span>
                            {hasNestedItems && (
                              <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 16 16" 
                                fill="none"
                                style={{
                                  transform: isSubItemExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.2s ease',
                                  flexShrink: 0,
                                  marginLeft: '8px'
                                }}
                              >
                                <path 
                                  d="M6 4L10 8L6 12" 
                                  stroke="currentColor"
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                />
                              </svg>
                            )}
                          </button>
                          
                          {/* 3rd Level Nested Items */}
                          {hasNestedItems && isSubItemExpanded && (
                            <div style={{ width: '100%' }}>
                              {subItem.subItems!.map((nestedItem) => {
                                const isNestedItemActive = activeNestedItemId === nestedItem.id;
                                
                                return (
                                  <button
                                    key={nestedItem.id}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleNestedItemClick(nestedItem.id);
                                    }}
                                    style={{
                                      width: '100%',
                                      height: '40px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      padding: '0 16px 0 40px',
                                      background: isNestedItemActive 
                                        ? 'linear-gradient(267deg, rgba(74, 122, 255, 0.50) 11.41%, rgba(0, 29, 107, 0.30) 127.13%)' 
                                        : 'transparent',
                                      border: 'none',
                                      borderRight: isNestedItemActive ? '4px solid #84F4FB' : '4px solid transparent',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      boxSizing: 'border-box',
                                      color: isNestedItemActive ? '#F5F7F9' : '#9FAEC6',
                                      fontSize: '13px',
                                      fontWeight: 400,
                                      textAlign: 'left',
                                      position: 'relative'
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isNestedItemActive) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isNestedItemActive) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                      }
                                    }}
                                  >
                                    • {nestedItem.label}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}