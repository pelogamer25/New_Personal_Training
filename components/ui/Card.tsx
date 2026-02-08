import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative h-full flex flex-col rounded-xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-md hover:border-npt-red/50 transition-colors duration-500"
    >
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-npt-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-npt-black/20 group-hover:bg-npt-black/0 transition-colors z-10" />
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md p-3 rounded text-npt-red border border-white/10">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-heading font-black italic uppercase mb-3 text-white group-hover:text-npt-red transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-white/10 pl-4 group-hover:border-npt-red transition-colors">
          {service.description}
        </p>
        <Link 
          to="/servicios" 
          className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white hover:text-npt-red transition-colors"
        >
          Explorar <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};