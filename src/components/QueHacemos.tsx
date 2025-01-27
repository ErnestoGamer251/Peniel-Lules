import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users } from 'lucide-react';
import Section from './Section';

const activities = [
  {
    icon: BookOpen,
    title: 'Estudio Bíblico',
    description: 'Profundizamos en la palabra de Dios a través de estudios bíblicos semanales.',
  },
  {
    icon: Users,
    title: 'Grupos de Oración',
    description: 'Nos reunimos para orar juntos y fortalecer nuestra fe en comunidad.',
  },
  {
    icon: Heart,
    title: 'Servicio Comunitario',
    description: 'Compartimos el amor de Cristo a través de diferentes proyectos sociales.',
  },
];

const QueHacemos = () => {
  return (
    <Section id="que-hacemos" title="Qué Hacemos">
      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <activity.icon className="w-12 h-12 mx-auto mb-4 text-[#a950ce]" />
            <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default QueHacemos;