import { SideNavigationBar } from "../SideNavigationBar";
import { 
  AdministrativeIcon,
  ReportsIcon,
  DashboardIcon,
  MonitoringIcon,
  DocumentsIcon,
  ProfileIcon,
  ComplianceIcon,
  SecurityIcon,
  AccessControlIcon,
  SettingsIcon
} from "../NavigationIcons";

export function SideNavigationDemoPage() {
  const menuItems = [
    {
      id: 'administrative',
      label: 'Administrative',
      icon: <AdministrativeIcon />,
      subItems: [
        { 
          id: 'user-management', 
          label: 'User Management',
          subItems: [
            { id: 'role-management', label: 'Role Management' },
            { id: 'uac-reports', label: 'UAC Reports' }
          ]
        },
        { id: 'master-data-management', label: 'Master Data Management' }
      ]
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: <ReportsIcon />,
      subItems: [
        { id: 'audit-logs', label: 'Audit Logs' },
        { id: 'activity-reports', label: 'Activity Reports' },
        { id: 'summary', label: 'Summary' }
      ]
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardIcon />,
      subItems: [
        { id: 'overview', label: 'Overview' },
        { id: 'kpis', label: 'KPIs' },
        { id: 'trends', label: 'Trends' }
      ]
    },
    {
      id: 'monitoring',
      label: 'Monitoring',
      icon: <MonitoringIcon />,
      subItems: [
        { id: 'system-health', label: 'System Health' },
        { id: 'alerts', label: 'Alerts' },
        { id: 'performance', label: 'Performance' }
      ]
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: <DocumentsIcon />,
      subItems: [
        { id: 'policies', label: 'Policies' },
        { id: 'sops', label: 'SOPs' },
        { id: 'templates', label: 'Templates' }
      ]
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <ProfileIcon />
    },
    {
      id: 'compliance',
      label: 'Compliance',
      icon: <ComplianceIcon />
    },
    {
      id: 'security',
      label: 'Security',
      icon: <SecurityIcon />,
      subItems: [
        { id: 'permissions', label: 'Permissions' },
        { id: 'threats', label: 'Threats' },
        { id: 'audit', label: 'Audit' }
      ]
    },
    {
      id: 'access-control',
      label: 'Access Control',
      icon: <AccessControlIcon />,
      subItems: [
        { id: 'users', label: 'Users' },
        { id: 'roles', label: 'Roles' },
        { id: 'groups', label: 'Groups' }
      ]
    },
    {
      id: 'setting',
      label: 'Setting',
      icon: <SettingsIcon />
    }
  ];

  return (
    <div>
      {/* Description */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <p style={{ 
          color: 'var(--muted-foreground)',
          lineHeight: '1.6',
          marginBottom: 'var(--spacing-6)'
        }}>
          An interactive side navigation component with three variants: Collapsed (icons only), Expanded (icons + labels), and Expanded-2nd-Level (with sub-menu). Features hover-to-expand, pinning functionality, and smooth transitions.
        </p>
      </div>

      {/* Interactive Demo */}
      <div style={{
        background: 'var(--card)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-8)',
        border: '1px solid var(--border)',
        marginBottom: 'var(--spacing-10)',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto'
      }}>
        <SideNavigationBar 
          menuItems={menuItems}
          onMenuItemClick={(itemId) => console.log('Menu item clicked:', itemId)}
          onSubItemClick={(itemId, subItemId) => console.log('Sub item clicked:', itemId, subItemId)}
        />
      </div>
    </div>
  );
}