import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Comment optimiser votre site pour Google en 2024',
    excerpt: 'Découvrez les dernières techniques SEO pour améliorer votre visibilité sur Google et attirer plus de clients qualifiés.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '15 Mars 2024',
    readTime: '5 min',
    category: 'SEO',
  },
  {
    id: 2,
    title: 'Les tendances e-commerce à suivre en 2024',
    excerpt: 'Analyse des nouvelles tendances qui transforment le commerce en ligne et comment les intégrer à votre stratégie.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '10 Mars 2024',
    readTime: '4 min',
    category: 'E-commerce',
  },
  {
    id: 3,
    title: 'Marketing sur TikTok : Guide pour les entreprises',
    excerpt: 'Comment utiliser TikTok pour développer votre marque et atteindre une nouvelle audience en Côte d\'Ivoire.',
    image: 'https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '5 Mars 2024',
    readTime: '6 min',
    category: 'Réseaux Sociaux',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Notre Blog</h2>
          <p className="section-subtitle fade-in">
            Découvrez nos articles et conseils pour développer votre présence digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="card group overflow-hidden fade-in"
              style={{ animationDelay: `${post.id * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                >
                  Lire la suite
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center">
            Voir tous les articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;