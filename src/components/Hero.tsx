import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Bienvenidos a Peniel
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Un lugar donde encontrarás paz, amor y comunidad en Cristo
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#a950ce] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#a950ce] transition-colors"
        >
          Conócenos
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;