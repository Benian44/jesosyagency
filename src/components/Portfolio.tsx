import React, { useState } from 'react';

// Placeholder client logos
const clients = [
  { name: 'Client 1', logo: 'https://z-p3-scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/412994336_122116966052137630_2822837578760795290_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH9LY4F2RbQg4OYXDU1VQxm7vgrh7sy_iHu-CuHuzL-IRF3Si25qSWTEDYGdOOdS9M7QFu0ZMjUlVwqGSZHytkk&_nc_ohc=mmNlrHMrzacQ7kNvwG7jUUo&_nc_oc=AdmY_njVIK49Dkp5jyGLWSLJaEcneY4gSaS4IPWilua_-yNklILGx0GccJFs143dCxQ&_nc_zt=23&_nc_ht=z-p3-scontent.fabj4-2.fna&_nc_gid=hfORFu2eDy1FPoYLqavB8w&oh=00_AfF_2SFl26uDzCQaK1-8lHpxf0ybiI1CTUx-oi_SP39L4w&oe=68194AA5' },
  { name: 'Client 2', logo: 'https://z-p3-scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/489892236_122151501716559515_8250571763800715958_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtYnTo6iYsVCINFcDBeMESj7-yHBX0brqPv7IcFfRuuvgsEnQfLAtkdXwxBcHk51X5Gq2AfJf1RhNMcen41hiW&_nc_ohc=YrOn-vqRZMUQ7kNvwFvRklj&_nc_oc=AdlBn2Q5ZAXa5svLMaJw2qfcgfiQcCldpJI0sCaN1hIVtVaOzS6gp9Xc2QuF8IMhVas&_nc_zt=23&_nc_ht=z-p3-scontent.fabj4-2.fna&_nc_gid=-td62lYHP4kdgZRFAapi3A&oh=00_AfFtM_26n0gWHuyuMbAI21Qzv4iAGxXjHBazu_HmoFiCpQ&oe=6819520B' },
  { name: 'Client 3', logo: 'https://z-p3-scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/459397616_920385703442274_4945859248843589870_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzUZlJ2ah3QlrWOlVNN0KlOvmfaiieFGg6-Z9qKJ4UaBkwNO6o8Et7UJpKTU9tgb8OBDDDSi1QNblgjyBGLGPW&_nc_ohc=8MdSowHAC2sQ7kNvwGti5hl&_nc_oc=Adk7oq0m8PMb7NqKmFokuzIVXlDVmZhjOLVrbv7QST7x8D59Ce6JAboq8SOURP4mkzw&_nc_zt=23&_nc_ht=z-p3-scontent.fabj4-2.fna&_nc_gid=LkrxNGxlNJCzlJTAiScPng&oh=00_AfHzuTw8efI9TfrQr_Ndka4JMwk_N8sAuVH0Kf40QvZSYg&oe=68196581' },
  { name: 'Client 4', logo: 'https://z-p3-scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/461834195_122160069404250173_5059105853948447865_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHyOV6d_3-dBRlcAQA7QidEEH0jSwcwHpgQfSNLBzAemMI2k0i9Tj1z9uu9G0OIxTK4Q0IiIUYfyvFMsnHeDNtc&_nc_ohc=oCtPeqHEod0Q7kNvwGh6wGm&_nc_oc=Adk64RIBCkKfxw3lWvzUVQcxwvUfu-18gDKofU8EM-9Q4_-cMjkiBAWh8EmSItq0gd0&_nc_zt=23&_nc_ht=z-p3-scontent.fabj4-2.fna&_nc_gid=Eopqsj-X4ZtDQ7gkZIXr-w&oh=00_AfFedku8u7gM_xsSPeWr3GhzUT0kLNlhXZdM0lOtKswKKw&oe=68194DA9' },
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