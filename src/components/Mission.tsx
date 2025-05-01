import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Notre Mission</h2>
          <p className="section-subtitle fade-in">
            Nous visons le résultat et la rentabilité directe pour chacun de nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card p-8 fade-in">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Orienté Résultat</h3>
            <p className="text-gray-600">
              Nous optimisons chaque projet pour générer visibilité, prospects ou ventes. 
              Votre succès est notre priorité absolue.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card p-8 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4">ROI Maximisé</h3>
            <p className="text-gray-600">
              Nous transformons votre investissement digital en croissance réelle et 
              mesurable pour votre entreprise.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card p-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-accent-dark" />
            </div>
            <h3 className="text-xl font-bold mb-4">Connaissance Client</h3>
            <p className="text-gray-600">
              Nous savons ce que les visiteurs aiment, ce qui les retient, 
              et ce qui les pousse à acheter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;