import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import React from "react";

interface CollectionItemProps {
  id: string;
  name: string;
  image: string;
  selectedCollection?: string | null;
  setSelectedCollection?: (id: string) => void;
  onClick?: (id: string) => void;
  variant?: 'solid' | 'outline';
  className?: string;
  imageClassName?: string;
}

const CollectionCards: React.FC<CollectionItemProps> = ({
  id,
  name,
  image,
  selectedCollection,
  setSelectedCollection,
  onClick,
  variant = 'outline',
  className = '',
  imageClassName = ''
}) => {

  const handleClick = () => {
    if (setSelectedCollection) {
      setSelectedCollection(id);
    }
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Button
      key={id}
      onPress={handleClick}
      variant={selectedCollection === id ? 'solid' : variant}
      className={`flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold ${
        selectedCollection === id ? 'ring-2 ring-gold' : ''
      } ${className}`}
    >
      <Image source={image} alt={name} className={`w-full h-full object-cover ${imageClassName}`} />
      <Box
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <Text className="text-2xl font-bold color-white">
          {name}
        </Text>
      </Box>
    </Button>
  );
};

export default CollectionCards;
