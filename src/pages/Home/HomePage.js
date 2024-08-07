import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </div>
  );
};
