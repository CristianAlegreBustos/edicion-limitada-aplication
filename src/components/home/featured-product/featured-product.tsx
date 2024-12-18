import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { FeatureProductCard } from '@/components/ui/cards/feature-product-cards';

export const FeaturedProducts: React.FC = () => {

  const producArray=[{id:1,source:'#',itemName:'zapas',title:'Zapatillas',subTitle:'las mejores zapatillas',price:35000},{id:2,source:'#',itemName:'zapas',title:'Zapatillas',subTitle:'las mejores zapatillas',price:35000},{id:3,source:'#',itemName:'zapas',title:'Zapatillas',subTitle:'las mejores zapatillas',price:35000},{id:4,source:'#',itemName:'zapas',title:'Zapatillas',subTitle:'las mejores zapatillas',price:35000}]

  return (
    <Box className="py-16 px-4">
      <Heading size="lg" className="text-2xl font-bold mb-8 text-center color-white">Featured Products</Heading>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {producArray.map((item) => (
          <FeatureProductCard key={item.id} source={item.source} itemName={item.itemName} title={item.title} subTitle={item.subTitle} price={item.price}  />
        ))}
      </Box>
    </Box>
  );
};
