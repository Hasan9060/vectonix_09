// components/Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
  <div className="relative w-24 h-24">
    {/* Outer spinning circle with gradient */}
    <div className="absolute inset-0 border-4 border-t-transparent border-red-500 border-b-yellow-500 rounded-full animate-spin"></div>
    
    {/* Inner smaller spinning circle */}
    <div className="absolute inset-3 border-4 border-t-transparent border-yellow-400 border-b-red-400 rounded-full animate-spin animation-delay-200"></div>
    
  </div>
</div>

  );
};

export default Loader;
