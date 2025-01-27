import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Iglesia Peniel</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 234 567 890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contacto@iglesiapeniel.com</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/iglesiapeniel.lules"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/iglesiapenieltucuman/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a950ce] p-2 rounded-full hover:bg-[#a950ce]/80 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/@iglesiapenieltucuman5548/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-full hover:bg-700 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Iglesia Peniel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;