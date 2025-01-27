import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { MapPin } from 'lucide-react';

const Ubicacion = () => {
  return (
    <Section id="ubicacion" title="Cómo Llegar" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3">
              <MapPin className="text-[#a950ce] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Nuestra Ubicación</h3>
                <p className="text-gray-600">C. Gdor. Campero</p>
                <p className="text-gray-600">Lules, Tucuman T4129</p>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#a950ce] text-white px-6 py-2 rounded-lg hover:bg-[#a950ce] transition-colors mt-4"
            >
              Ver en Google Maps
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-video rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://maps.app.goo.gl/1TCo2Z61R9kVxW6N6"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Ubicacion;