import React, { useState } from 'react';

// Placeholder client logos
const clients = [
  { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
  { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
  { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
  { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/150x80?text=Client+6' },
];

// Portfolio projects
const projects = [
  {
    id: 1,
    title: 'Site E-commerce',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Stratégie Social Media',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Site Vitrine',
    category: 'Site Web',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Campagne SEO',
    category: 'SEO',
    image: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'Site Web', 'E-commerce', 'SEO', 'Social Media'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Nos Réalisations & Clients</h2>
          <p className="section-subtitle fade-in">
            Découvrez nos projets récents et les entreprises qui nous font confiance.
          </p>
        </div>

        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'Tous' : filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card group overflow-hidden fade-in" 
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm mt-2">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8 fade-in">Ils nous font confiance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;