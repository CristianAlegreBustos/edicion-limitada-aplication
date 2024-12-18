import CollectionWrapper from '@/components/collections/collection-wrapper/collection-wrapper';
import { Box } from '@/components/ui/box';
import HeroSection from '@/components/ui/hero/hero-section';
import React from 'react';



const CollectionPage: React.FC = () => {
  return (
    <Box className="min-h-screen bg-black text-white font-serif">
      <HeroSection source={'/imagen/home/portada.png'} title={'Nuestras Colecciones'} />
      <CollectionWrapper/>
    </Box>
  );
};

export default CollectionPage;