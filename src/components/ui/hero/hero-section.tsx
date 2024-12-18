import React from 'react';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';

type HeroSection = {
  source:string,
  title:string,
  subTitle?:string,
  buttonText?:string
}

const HeroSection: React.FC<HeroSection>= ({source,title,subTitle,buttonText}) => {
  return (
    <Box className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        source={source}
        alt="Luxury Product"
        className="absolute w-full h-full object-cover"
      />
      <Box className="absolute inset-0 bg-black bg-opacity-50"></Box>
      <Box className="relative z-10 text-center flex flex-col">
      <VStack space='md' >
        <Heading size="2xl" className="text-4xl md:text-6xl font-bold mb-4 text-white">{title}</Heading>
        <Text className="text-xl mb-8 text-white">{subTitle}</Text>
        {buttonText && <Button className="bg-black bg-opacity-50 text-black px-8 py-3 rounded-full hover:bg-opacity-80 transition-colors" size="md" variant="solid" action="primary">
          <ButtonText>{buttonText}</ButtonText>
        </Button>}
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroSection