import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white">
      <ShoppingCart size={20} />
    </div>
  );
};

export default Logo;