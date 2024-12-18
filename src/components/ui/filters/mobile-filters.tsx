import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectContent, SelectItem, SelectBackdrop, SelectPortal } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { FilterComponentProps } from './filters';
import { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/icon';



const MobileFilters: React.FC<FilterComponentProps> = ({ filters, activeFilters, toggleFilter, showFilters, setShowFilters }) => {
  const [sortOption, setSortOption] = useState('relevance');

  return (
    <Modal isOpen={showFilters} onClose={() => setShowFilters(false)} size="full"  closeOnOverlayClick={false} >
      <ModalBackdrop className="bg-black bg-opacity-50 fixed inset-0 z-50" />
      <ModalContent className="bg-white h-full w-full max-w-md ml-auto overflow-y-auto z-50 mt-72" >

        <ModalHeader className="p-4 border-b border-gray-200 flex justify-between items-center">
          <Heading size="md" className="font-bold">Filtros</Heading>
          <ModalCloseButton onPress={() => setShowFilters(false)}>
            <Text size="md" className="text-gray-500">✕</Text>
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody className="p-4">
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

          {filters.map((filter) => (
            <div key={filter.name} className="mb-6">
              <Heading size="sm" className="font-bold mb-2">{filter.name}</Heading>
              {filter.options.map((option) => (
                <label key={option} className="flex items-center mb-2">
                  <Checkbox
                    value={activeFilters[filter.name]?.includes(option)}
                    onValueChange={() => toggleFilter(filter.name, option)}
                    className="mr-2"
                  />
                  <Text>{option}</Text>
                </label>
              ))}
            </div>
          ))}
        </ModalBody>

        <ModalFooter className="p-4 border-t border-gray-200">
          <Button onPress={() => setShowFilters(false)} className="w-full bg-gold text-black py-2 rounded-full hover:bg-opacity-80 transition-colors">
            <Text>Ver resultados</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MobileFilters;
