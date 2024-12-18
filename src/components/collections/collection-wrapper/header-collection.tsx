import React from 'react';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { FilterIcon } from 'lucide-react';

interface Props {
  onFilterButtonClick: () => void;
}

const HeaderCollection: React.FC<Props> = ({ onFilterButtonClick }) => (
  <Box className="flex flex-row justify-between items-center mb-6">
    <Text className="text-2xl font-bold text-gold">Products</Text>
    <Button
      className="flex items-center text-white "
      onPress={onFilterButtonClick}
    >
      <FilterIcon className="w-4 h-4 mr-2" />
      <Text className="font-semibold color-white">Filtros y Ordenar</Text>
    </Button>
  </Box>
);

export default HeaderCollection;
