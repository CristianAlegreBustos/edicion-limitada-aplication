'use client';

import { Box } from '@/components/ui/box';
import { useState } from 'react';
import CollectionSelector from './collection-selector';
import FiltersWrapper from './filters-wrappers';
import ProductGridWrapper from './product-grid-wrapper';
import HeaderCollection from './header-collection';

interface Collection {
  id: string;
  name: string;
  image: string;
}

const CollectionWrapper: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const collections: Collection[] = [
    { id: '1', name: 'Otoño', image: '/placeholder.svg?height=200&width=300' },
    { id: '2', name: 'Joyas', image: '/placeholder.svg?height=200&width=300' },
    { id: '3', name: 'Accesorios', image: '/placeholder.svg?height=200&width=300' },
    { id: '4', name: 'Edición Limitada', image: '/placeholder.svg?height=200&width=300' },
  ];

  return (
    <Box className="container mx-auto px-4 py-8">
      {/* Selección de colecciones */}
      <CollectionSelector
        collections={collections}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
      />

      {/* Vista de productos y filtros */}
      {selectedCollection && (
        <>
          <HeaderCollection onFilterButtonClick={() => setShowFilters(!showFilters)}/>
          <FiltersWrapper showFilters={showFilters}
            setShowFilters={setShowFilters}>
            <ProductGridWrapper />
          </FiltersWrapper>
        </>
      )}
    </Box>
  );
};

export default CollectionWrapper;
