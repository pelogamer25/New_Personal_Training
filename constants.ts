import { 
  Dumbbell, 
  Users, 
  Briefcase, 
  Apple, 
  Monitor, 
  Activity 
} from 'lucide-react';
import { Service, Trainer, Testimonial, NavigationItem } from './types';

export const COMPANY_INFO = {
  name: "New Personal Training",
  phone: "+57 300 597 4290",
  email: "contacto@newpersonaltraining.com",
  address: "Medellín, Antioquia, Colombia",
  social: {
    instagram: "@newpersonaltraining",
    facebook: "/newpersonaltraining"
  }
};

export const NAVIGATION: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Entrenadores", href: "/entrenadores" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Entrenamiento Personal",
    description: "Sesiones 1:1 diseñadas específicamente para tus objetivos, capacidades y estilo de vida.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    slug: "personal"
  },
  {
    id: "2",
    title: "Clases Grupales",
    description: "Entrena en grupo con energía y motivación colectiva. Funcional, HIIT, y más.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    slug: "grupal"
  },
  {
    id: "3",
    title: "Asesoría Corporativa",
    description: "Programas de bienestar empresarial para mejorar la salud y productividad de tu equipo.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800",
    slug: "corporativo"
  },
  {
    id: "4",
    title: "Nutrición Deportiva",
    description: "Planes nutricionales que complementan tu entrenamiento para maximizar resultados.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    slug: "nutricion"
  },
  {
    id: "5",
    title: "Entrenamiento Virtual",
    description: "Entrena desde cualquier lugar con nuestra plataforma online y seguimiento remoto.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800",
    slug: "virtual"
  },
  {
    id: "6",
    title: "Rehabilitación Funcional",
    description: "Recuperación de lesiones y fortalecimiento específico con profesionales de la salud.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
    slug: "rehabilitacion"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "1",
    name: "Juan Pérez",
    role: "Head Coach",
    specialty: "Hipertrofia y Fuerza",
    experience: "8 años",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
    bio: "Especialista en transformación física y rendimiento deportivo de alto nivel. Su enfoque científico garantiza resultados medibles."
  },
  {
    id: "2",
    name: "María López",
    role: "Entrenadora Senior",
    specialty: "Entrenamiento Funcional",
    experience: "6 años",
    image: "https://images.unsplash.com/photo-1611672585731-fa1060a7a3c2?auto=format&fit=crop&q=80&w=600",
    bio: "Apasionada por el movimiento y la salud integral. Certificada en CrossFit y movilidad articular."
  },
  {
    id: "3",
    name: "Carlos Ruiz",
    role: "Coach Nutricional",
    specialty: "Nutrición y Pérdida de Peso",
    experience: "5 años",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
    bio: "Combina la ciencia de la nutrición con el entrenamiento práctico para crear hábitos sostenibles."
  },
  {
    id: "4",
    name: "Laura Zapata",
    role: "Instructora de Yoga",
    specialty: "Flexibilidad y Mindfulness",
    experience: "4 años",
    image: "https://images.unsplash.com/photo-1609899536968-0c7d42571ae8?auto=format&fit=crop&q=80&w=600",
    bio: "Ayuda a conectar mente y cuerpo a través de prácticas de respiración y movimiento consciente."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Andrea Torres",
    role: "Abogada",
    content: "Llevo 6 meses entrenando y los resultados son increíbles. La atención personalizada hace toda la diferencia. ¡Totalmente recomendado!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Felipe Gómez",
    role: "Emprendedor",
    content: "La flexibilidad de horarios y el profesionalismo del equipo me han permitido mantener mi salud sin descuidar mi empresa.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "3",
    name: "Camila Restrepo",
    role: "Diseñadora",
    content: "Las clases grupales tienen una energía única. He hecho grandes amigos y he mejorado mi resistencia física notablemente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];