import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};
