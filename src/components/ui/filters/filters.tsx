import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Select, SelectBackdrop, SelectContent, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Check} from 'lucide-react';
import { ChevronDownIcon } from '@/components/ui/icon';
import { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';

// Definición del tipo de un filtro
interface Filter {
  name: string;
  options: string[];
}

// Props del componente Filter
export interface FilterComponentProps {
  filters: Filter[];
  activeFilters: { [key: string]: string[] };
  toggleFilter: (filterName: string, option: string) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
}

const Filter: React.FC<FilterComponentProps> = ({ filters, activeFilters, toggleFilter,setShowFilters }) => {
  const [sortOption, setSortOption] = useState('relevance');
  return (
    <VStack space="md" className="block lg:flex flex-col ">
    {/* Filters Sidebar */}
    <Box >
      <Box className="bg-white p-6 rounded-lg">
        <HStack className="flex justify-between items-center mb-6">
          <Text className="text-xl font-bold text-black">Filtros</Text>
          <Button className="bg-transparent rounded-full p-3.5 " onPress={()=>setShowFilters(false)}>
            <ButtonText className="text-black">X</ButtonText>
          </Button>
        </HStack>
        <div className="mb-6">
            <Heading size="sm" className="font-bold mb-2">Ordenar por</Heading>
            <Select selectedValue={sortOption} onValueChange={setSortOption}>
            <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Selecciona una opción" />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectItem label="Más relevantes" value="relevance" />
                <SelectItem label="Menor precio" value="price_asc" />
                <SelectItem label="Mayor precio" value="price_desc" />
              </SelectContent>
              </SelectPortal>

            </Select>
          </div>
    <VStack space={'md'} className={`space-y-6`}>
      {filters.map((filter) => (
        <Box key={filter.name}>
          <Text className="font-bold mb-2 text-gold">
            {filter.name}
          </Text>
          <VStack space={'sm'}>
            {filter.options.map((option) => (
              <Pressable
                key={option}
                onPress={() => toggleFilter(filter.name, option)}
                className={`flex items-center w-full text-left py-1 px-2 rounded transition-colors ${
                  activeFilters[filter.name]?.includes(option)
                    ? 'bg-gold text-black'
                    : 'hover:bg-gray-800'
                }`}
              >
                <HStack className="flex flex-start items-center">
                  {activeFilters[filter.name]?.includes(option) && (
                    <Icon as={Check} size={'sm'} />
                  )}
                </HStack>
                <Text>{option}</Text>
              </Pressable>
            ))}
          </VStack>
        </Box>
      ))}
    </VStack>
    </Box>
    </Box>
  </VStack>
  );
};

export default Filter;
