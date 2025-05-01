import React from 'react';
import { Globe, ShoppingBag, Search, MessageSquare, BarChart3 } from 'lucide-react';

const ServicesData = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Création de sites vitrines',
    description: 'Sites professionnels et attractifs qui présentent votre entreprise et vos services de manière optimale.',
    color: 'primary'
  },
  {
    icon: <ShoppingBag className="h-10 w-10" />,
    title: 'Création de sites e-commerce',
    description: 'Solutions e-commerce performantes pour vendre vos produits en ligne et développer votre chiffre d\'affaires.',
    color: 'secondary'
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: 'Référencement naturel (SEO)',
    description: 'Optimisation de votre visibilité sur les moteurs de recherche pour attirer plus de clients qualifiés.',
    color: 'accent-dark'
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: 'Gestion de réseaux sociaux',
    description: 'Stratégies de contenu et gestion de vos réseaux sociaux pour développer votre communauté et votre engagement.',
    color: 'primary'
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: 'Stratégie marketing orientée ROI',
    description: 'Stratégies marketing digitales sur mesure pour maximiser votre retour sur investissement.',
    color: 'secondary'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Nos Services</h2>
          <p className="section-subtitle fade-in">
            Des solutions digitales complètes pour développer votre activité et générer des résultats concrets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <div 
              key={index} 
              className="card p-8 border border-gray-100 hover:border-gray-200 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-${service.color}/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6`}>
                <div className={`text-${service.color}`}>{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <a href="#contact" className="btn-primary">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;