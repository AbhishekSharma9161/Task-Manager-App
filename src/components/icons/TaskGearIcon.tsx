import { motion } from "framer-motion";

export default function TaskGearIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer gradient background */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#FF8E53" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
          <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4444" />
            <stop offset="100%" stopColor="#CC3333" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="100%" stopColor="#00C853" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="18"
          ry="18"
          fill="url(#bgGradient)"
          className="drop-shadow-lg"
        />
        
        {/* Main gear shape */}
        <g transform="translate(50,50)">
          {/* Gear teeth */}
          <path
            d="M-25,-15 L-25,-25 L-15,-25 L-15,-15 
               M15,-15 L15,-25 L25,-25 L25,-15
               M25,15 L25,25 L15,25 L15,15
               M-15,15 L-15,25 L-25,25 L-25,15
               M-15,-25 L-10,-30 L10,-30 L15,-25
               M25,-15 L30,-10 L30,10 L25,15
               M15,25 L10,30 L-10,30 L-15,25
               M-25,15 L-30,10 L-30,-10 L-25,-15"
            fill="url(#gearGradient)"
            stroke="none"
          />
          
          {/* Main gear body */}
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="url(#gearGradient)"
            className="drop-shadow-sm"
          />
          
          {/* Inner circle for checkmark */}
          <circle
            cx="0"
            cy="0"
            r="12"
            fill="url(#checkGradient)"
            className="drop-shadow-sm"
          />
          
          {/* Checkmark */}
          <path
            d="M-4,0 L-1,3 L6,-4"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        
        {/* Accent elements (small colored bars on the side) */}
        <rect x="85" y="20" width="8" height="12" rx="4" fill="#E91E63" />
        <rect x="85" y="35" width="8" height="12" rx="4" fill="#FF9800" />
        <rect x="85" y="50" width="8" height="12" rx="4" fill="#2196F3" />
        <rect x="85" y="65" width="8" height="12" rx="4" fill="url(#accentGradient)" />
        <rect x="85" y="80" width="8" height="8" rx="4" fill="#FFC107" />
      </svg>
    </motion.div>
  );
}