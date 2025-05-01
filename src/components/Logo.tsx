import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/logo.jpg" 
        alt="Jesosy Agency Logo" 
        className="h-10 w-auto"
      />
      <span className="ml-2 text-xl font-bold text-gray-800">Jesosy Agency</span>
    </div>
  );
};

export default Logo;