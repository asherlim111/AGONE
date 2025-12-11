import svgPaths from "../imports/svg-8594vuuj01";

interface IconProps {
  isActive?: boolean;
}

// Administrative Icon
export function AdministrativeIcon({ isActive = false }: IconProps) {
  if (isActive) {
    return (
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g>
            <path d={svgPaths.p18f9e800} fill="#BFFAFD" />
            <g>
              <path d={svgPaths.p1d691180} fill="url(#paint0_linear_admin_active)" />
              <path d={svgPaths.p2dd45600} fill="url(#paint1_linear_admin_active)" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_admin_active" x1="4.70556" x2="14.6573" y1="5.525" y2="17.3418">
              <stop stopColor="#DEEEFF" />
              <stop offset="1" stopColor="#4779F7" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_admin_active" x1="4.70556" x2="14.6573" y1="5.525" y2="17.3418">
              <stop stopColor="#DEEEFF" />
              <stop offset="1" stopColor="#4779F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p18f9e800} fill="#9FAEC6" />
          <g>
            <path d={svgPaths.p1d691180} fill="url(#paint0_linear_admin_inactive)" />
            <path d={svgPaths.p2dd45600} fill="url(#paint1_linear_admin_inactive)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_admin_inactive" x1="4.70556" x2="14.6573" y1="5.525" y2="17.3418">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_admin_inactive" x1="4.70556" x2="14.6573" y1="5.525" y2="17.3418">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Audit Icon
export function AuditIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <g>
            <path d={svgPaths.pe3d4880} fill="url(#paint0_linear_audit)" />
            <path d={svgPaths.p2a2b2800} fill="url(#paint1_linear_audit)" />
          </g>
          <path d={svgPaths.p21947280} fill={fillColor} />
          <path d={svgPaths.p46bc030} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_audit" x1="6.88333" x2="16.2229" y1="5.33" y2="17.4754">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_audit" x1="6.88333" x2="16.2229" y1="5.33" y2="17.4754">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Data Library Icon
export function DataLibraryIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p3bc800} fill="url(#paint0_linear_datalib)" />
          <path d={svgPaths.p19069940} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_datalib" x1="6.2963" x2="14.6296" y1="5.83333" y2="19.2593">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Monitoring Icon
export function MonitoringIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p39f7e400} fill="url(#paint0_linear_monitor)" />
          <path d={svgPaths.p3ddac500} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_monitor" x1="5.89167" x2="14.4437" y1="5.315" y2="19.3728">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Policies Icon
export function PoliciesIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p3f866800} fill="url(#paint0_linear_policies)" />
          <g>
            <path d={svgPaths.p1e363400} fill={fillColor} />
            <path d={svgPaths.p1a238500} fill={fillColor} />
            <path d={svgPaths.p26c55b00} fill={fillColor} />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_policies" x1="6.625" x2="15.3174" y1="5.29" y2="18.8783">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Profile Icon
export function ProfileIcon({ isActive = false }: IconProps) {
  const strokeColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p35072980} stroke="url(#paint0_linear_profile)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" />
          <path d={svgPaths.p29429180} stroke="url(#paint1_linear_profile)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" />
          <path d={svgPaths.p28634a00} stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_profile" x1="4.31945" x2="12.5597" y1="6.77" y2="14.0593">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_profile" x1="12.4795" x2="20.7197" y1="6.77" y2="14.0593">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Compliance Icon
export function ComplianceIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p33a85000} fill="url(#paint0_linear_compliance)" />
          <path d={svgPaths.p27704800} fill={fillColor} />
          <path d={svgPaths.pd686900} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_compliance" x1="6.23611" x2="15.1185" y1="5.52494" y2="20.4287">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Trust Icon
export function TrustIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p25ad6080} fill="url(#paint0_linear_trust)" />
          <path d={svgPaths.pc2ecb00} fill={fillColor} />
          <path d={svgPaths.pbc91b00} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_trust" x1="7.025" x2="16.6277" y1="5.45187" y2="18.0195">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Multifactor Auth Icon
export function MultifactorAuthIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p1c3f9280} fill="url(#paint0_linear_mfa)" />
          <path d={svgPaths.pe615f00} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_mfa" x1="6.175" x2="15.3692" y1="5.3475" y2="18.1502">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Settings Icon
export function SettingsIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p800ee00} fill="url(#paint0_linear_settings)" />
          <path d={svgPaths.p2899e7f0} fill={fillColor} />
          <path d={svgPaths.p23b4ac00} fill="url(#paint1_linear_settings)" />
          <path d={svgPaths.p39de0200} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_settings" x1="5.99611" x2="14.9783" y1="5.51" y2="19.9733">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_settings" x1="5.99612" x2="14.9783" y1="5.51" y2="19.9733">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Reports Icon - using Audit icon as base
export function ReportsIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <g>
            <path d={svgPaths.pe3d4880} fill="url(#paint0_linear_reports)" />
            <path d={svgPaths.p2a2b2800} fill="url(#paint1_linear_reports)" />
          </g>
          <path d={svgPaths.p21947280} fill={fillColor} />
          <path d={svgPaths.p46bc030} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_reports" x1="6.88333" x2="16.2229" y1="5.33" y2="17.4754">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_reports" x1="6.88333" x2="16.2229" y1="5.33" y2="17.4754">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Dashboard Icon - using Data Library as base
export function DashboardIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p3bc800} fill="url(#paint0_linear_dashboard)" />
          <path d={svgPaths.p19069940} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_dashboard" x1="6.2963" x2="14.6296" y1="5.83333" y2="19.2593">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Documents Icon - using Policies as base
export function DocumentsIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p3f866800} fill="url(#paint0_linear_documents)" />
          <g>
            <path d={svgPaths.p1e363400} fill={fillColor} />
            <path d={svgPaths.p1a238500} fill={fillColor} />
            <path d={svgPaths.p26c55b00} fill={fillColor} />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_documents" x1="6.625" x2="15.3174" y1="5.29" y2="18.8783">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Knowledge Base Icon - using Data Library as base
export function KnowledgeIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p3bc800} fill="url(#paint0_linear_knowledge)" />
          <path d={svgPaths.p19069940} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_knowledge" x1="6.2963" x2="14.6296" y1="5.83333" y2="19.2593">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Security Icon - using Trust/Compliance as base
export function SecurityIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p25ad6080} fill="url(#paint0_linear_security)" />
          <path d={svgPaths.pc2ecb00} fill={fillColor} />
          <path d={svgPaths.pbc91b00} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_security" x1="7.025" x2="16.6277" y1="5.45187" y2="18.0195">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Access Control Icon - using MFA as base
export function AccessControlIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p1c3f9280} fill="url(#paint0_linear_access)" />
          <path d={svgPaths.pe615f00} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_access" x1="6.175" x2="15.3692" y1="5.3475" y2="18.1502">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Configuration Icon - using Settings as base
export function ConfigurationIcon({ isActive = false }: IconProps) {
  const fillColor = isActive ? "#BFFAFD" : "#E5E8F0";
  
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPaths.p800ee00} fill="url(#paint0_linear_config)" />
          <path d={svgPaths.p2899e7f0} fill={fillColor} />
          <path d={svgPaths.p23b4ac00} fill="url(#paint1_linear_config)" />
          <path d={svgPaths.p39de0200} fill={fillColor} />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_config" x1="5.99611" x2="14.9783" y1="5.51" y2="19.9733">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_config" x1="5.99612" x2="14.9783" y1="5.51" y2="19.9733">
            <stop stopColor="#DEEEFF" />
            <stop offset="1" stopColor="#4779F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}