import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Clock } from 'lucide-react';

const horarios = [
  {
    dia: 'Domingo',
    hora: '7:00 PM',
    actividad: 'Servicio Principal',
  },
  {
    dia: 'Martes',
    hora: '4:00 PM',
    actividad: 'Reunion de Oracion',
  },
  {
    dia: 'Jueves',
    hora: '7:00 PM',
    actividad: 'Servicio Principal',
  },
  {
    dia: 'Sábado',
    hora: '6:00 PM',
    actividad: 'Reunion de Jovenes',
  },
];

const Horarios = () => {
  return (
    <Section id="horarios" title="Horarios de Reunión">
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-4">
          {horarios.map((horario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4"
            >
              <Clock className="text-[#a950ce] w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{horario.dia}</h3>
                <p className="text-gray-600">{horario.actividad} - {horario.hora}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Horarios;