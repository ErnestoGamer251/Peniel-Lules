import React from 'react';
import { motion } from 'framer-motion';
import { Church, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center gap-2 w-1/4">
          <Church className="h-8 w-8 text-[#a950ce]" />
          <span className="text-2xl font-bold text-gray-800">Peniel</span>
        </div>
        
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-6">
            <li><a href="#que-hacemos" className="text-gray-600 hover:text-[#a950ce] transition-colors">Qué Hacemos</a></li>
            <li><a href="#valores" className="text-gray-600 hover:text-[#a950ce] transition-colors">Nuestro Valor</a></li>
            <li><a href="#horarios" className="text-gray-600 hover:text-[#a950ce] transition-colors">Horarios</a></li>
            <li><a href="#contacto" className="text-gray-600 hover:text-[#a950ce] transition-colors">Contacto</a></li>
          </ul>
        </nav>

        <div className="w-1/4 flex justify-end">
          <a 
            href="#ubicacion"
            className="flex items-center gap-2 text-gray-600 hover:text-[#a950ce] transition-colors"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Ubicación</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;