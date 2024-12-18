import React from 'react';
import { HStack } from '@/components/ui/hstack';
import CollectionCards from '@/components/ui/cards/collection-cards';

interface Collection {
  id: string;
  name: string;
  image: string;
}

interface Props {
  collections: Collection[];
  selectedCollection: string | null;
  setSelectedCollection: (id: string | null) => void;
}

const CollectionSelector: React.FC<Props> = React.memo(({ collections, selectedCollection, setSelectedCollection }) => (
  <HStack space="md" className="flex overflow-x-auto space-x-4 mb-12 pb-4">
    {collections.map((collection) => (
      <CollectionCards
        key={collection.id}
        id={collection.id}
        name={collection.name}
        image={collection.image}
        selectedCollection={selectedCollection}
        setSelectedCollection={setSelectedCollection}
      />
    ))}
  </HStack>
));

CollectionSelector.displayName = 'CollectionSelector';

export default CollectionSelector;
