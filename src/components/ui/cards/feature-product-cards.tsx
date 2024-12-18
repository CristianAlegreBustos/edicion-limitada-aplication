import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

interface FeatureProductCardProps {
    source:string,
    itemName:string,
    title:string,
    subTitle:string,
    price:number
}

export const FeatureProductCard: React.FC<FeatureProductCardProps> = ({ source,itemName,title,subTitle,price }) => {
  return (
    <Box className="bg-gray-900 rounded-lg overflow-hidden flex flex-col">
      <Image source={source} alt={`Product ${itemName}`} className="w-full h-64 object-cover" />
      <Box className="p-4">
        <Heading size="md" className="text-xl font-bold mb-2 color-white">{title}</Heading>
        <Text className="text-gray-400 mb-4 color-white">{subTitle}</Text>
        <Box className='flex space-between items-center'>
          <Text className="text-gold text-lg">${price}</Text>
          <Button variant="link" className="text-gold hover:underline flex items-center">
            View Details <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};