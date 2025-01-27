import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Valores = () => {
  return (
    <Section id="valores" title="Nuestro Valor" className="bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-8"
        >
          Creemos en el poder transformador del amor de Cristo y en la importancia de vivir una vida que refleje sus enseñanzas.
        </motion.p>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Comunidad de fe"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
    </Section>
  );
};

export default Valores;