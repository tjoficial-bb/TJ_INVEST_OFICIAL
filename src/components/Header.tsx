import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const links = [
    { name: 'INÍCIO', path: '/' },
    { name: 'SOBRE', path: '/sobre' },
    { name: 'COMO FUNCIONA', path: '/como-funciona' },
    { name: 'ESPECIALIDADE', path: '/especialidade' },
    { name: 'DEPOIMENTOS', path: '/depoimentos' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTATO', path: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold tracking-widest flex items-center">
          <img src="https://i.ibb.co/1YkbVmS7/1773162517590-removebg-preview.png" alt="TJ INVEST" className="h-16 w-auto object-contain" />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          {links.map(link => (
            <Link key={link.name} to={link.path} className="text-white/80 hover:text-gold transition-colors text-sm uppercase tracking-wider">{link.name}</Link>
          ))}
        </div>

        <a 
          href="https://wa.me/553173590970"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-dark px-4 py-2 rounded font-semibold text-sm transition-all shadow-lg shadow-gold/20"
        >
          <Phone className="w-4 h-4" />
          FALAR COM ESPECIALISTA
        </a>
      </nav>
    </header>
  );
};
