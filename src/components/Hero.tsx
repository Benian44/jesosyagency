import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-primary-light/10 to-accent-light/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            <span className="text-primary">Le digital,</span> mais orienté résultat.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            Nous ne créons pas que des sites, nous créons des solutions qui vous rapportent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Demander un devis
            </a>
            <a 
              href="#services" 
              className="btn bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#mission" aria-label="Scroll to next section">
            <ArrowDown className="h-8 w-8 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;