import React from 'react';

import { Box } from '@/components/ui/box';
import { FeaturedProducts } from '@/components/home/featured-product/featured-product';
import { Newsletter } from '@/components/home/newsletter/newsletter';
import HeroSection from '@/components/ui/hero/hero-section';


const HomePage: React.FC = () => {
  return (
    <Box className="min-h-screen bg-black text-white font-serif">
      <HeroSection source={'/imagen/home/portada.png'} title={'Donde la Exclusividad es tu Estilo'} subTitle={'Descubri nuestras collecciones'} buttonText={'Compra Ahora'} />
      <FeaturedProducts />
      <Newsletter />
    </Box>
  );
};

export default HomePage;
