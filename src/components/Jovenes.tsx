import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Users, Music, Heart } from 'lucide-react';

const Jovenes = () => {
  return (
    <Section id="jovenes" title="Jóvenes Peniel" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Comunidad Juvenil</h3>
          <p className="text-gray-600">
            Nuestro ministerio de jóvenes es un espacio dinámico donde puedes crecer en tu fe, hacer amigos y descubrir tu propósito en Cristo.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Users className="text-[#a950ce] w-5 h-5" />
              <span>Reuniones semanales</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="text-[#a950ce] w-5 h-5" />
              <span>Banda de alabanza</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-[#a950ce] w-5 h-5" />
              <span>Actividades sociales</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Jóvenes adorando"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Jovenes;