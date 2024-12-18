import React from 'react';
import Filter from '@/components/ui/filters/filters';

interface FilterProps {
  children: React.ReactNode;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
}


const filters = [
    {
      name: 'Precio',
      options: ['Hasta $500', '$500 - $1000', '$1000 - $2000', 'Más de $2000'],
    },
    {
      name: 'Categoría',
      options: ['Ropa', 'Calzado', 'Accesorios', 'Joyería'],
    },
    {
      name: 'Marca',
      options: ['Gucci', 'Louis Vuitton', 'Prada', 'Hermès'],
    },
    {
      name: 'Color',
      options: ['Negro', 'Blanco', 'Dorado', 'Plateado'],
    },
    {
      name: 'Material',
      options: ['Cuero', 'Seda', 'Oro', 'Plata'],
    },
    {
      name: 'Condición',
      options: ['Nuevo', 'Usado - Como nuevo'],
    },
  ];

const FiltersWrapper: React.FC<FilterProps> = ({ children, showFilters, setShowFilters }) => {
    const [activeFilters, setActiveFilters] = React.useState<{ [key: string]: string[] }>({});

    const toggleFilter = (filterName: string, option: string) => {
      setActiveFilters((prev) => {
        const newFilters = { ...prev };
        const index = newFilters[filterName]?.indexOf(option) ?? -1;

        if (index > -1) {
          newFilters[filterName].splice(index, 1);
          if (newFilters[filterName].length === 0) delete newFilters[filterName];
        } else {
          newFilters[filterName] = [...(newFilters[filterName] || []), option];
        }
        return newFilters;
      });
    };

    return (
      <div className="flex flex-col md:flex-row gap-8">
          {showFilters && <Filter
            filters={filters}
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />}
        {children}
      </div>
    );
};

export default FiltersWrapper;
