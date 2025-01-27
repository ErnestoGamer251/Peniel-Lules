import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Comunidad = () => {
  return (
    <Section id="comunidad" title="Comunidad">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Únete a Nuestra Familia</h3>
          <p className="text-gray-600 mb-6">
            En Peniel, creemos que la fe crece mejor en comunidad. Somos una familia diversa unida por el amor de Cristo, donde cada persona es bienvenida y valorada.
          </p>
          <p className="text-gray-600">
            Te invitamos a ser parte de nuestra comunidad y experimentar el amor y el apoyo que compartimos juntos en Cristo.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Comunidad de la iglesia"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Comunidad;