import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">À Propos de Nous</h2>
          <p className="section-subtitle fade-in">
            Découvrez notre histoire, notre équipe et notre vision pour vous accompagner vers le succès digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="rounded-xl overflow-hidden fade-in">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Jesosy Agency Team" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          {/* About Content */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Notre Histoire</h3>
            <p className="text-gray-700 mb-6">
              Fondée en 2020 à Abidjan, Jesosy Agency est née d'une vision simple mais puissante : 
              créer des solutions digitales qui génèrent des résultats tangibles pour nos clients.
            </p>
            <p className="text-gray-700 mb-8">
              Notre équipe d'experts en marketing digital, développement web et stratégie digitale 
              travaille avec passion pour transformer votre présence en ligne en véritable moteur 
              de croissance pour votre entreprise.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Expertise</h4>
                  <p className="text-sm text-gray-600">Solutions de qualité</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">Équipe</h4>
                  <p className="text-sm text-gray-600">Professionnels passionnés</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-accent-dark" />
                </div>
                <div>
                  <h4 className="font-bold">Réactivité</h4>
                  <p className="text-sm text-gray-600">Support rapide</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Résultats</h4>
                  <p className="text-sm text-gray-600">ROI mesurable</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-gray-700 mb-6">
              Nous croyons que chaque investissement digital doit générer un retour concret. 
              Notre vision est d'aider les entreprises africaines à se développer grâce à des 
              stratégies digitales performantes et orientées résultats.
            </p>
            
            <a href="#contact" className="btn-primary inline-block">
              Discuter de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;