import { Box } from '@/components/ui/box';
import ProductCard from '@/components/ui/cards/product-cards';
import { HStack } from '@/components/ui/hstack';

interface Product {
  id: string | number; // Dependiendo de cómo estés manejando los ids (puede ser string o number)
  source: string; // Para la imagen o fuente
  productName: string; // Nombre del producto
  title: string; // Título del producto
  subTitle?: string; // Subtítulo del producto
  price: number; // Precio del producto
  buttonText?: string; // Texto del botón (e.g., "Comprar", "Agregar al carrito")
}

interface ProductGridProps {
  products: Product[]; // Array de productos usando la interfaz Product
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Box className='md:w-3/4'>
    <HStack className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" space="md">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          source={product.source}
          productName={product.productName}
          title={product.title}
          subTitle={product.subTitle}
          price={product.price}
          buttonText={product.buttonText}
        />
      ))}
    </HStack>
    </Box>
  );
};

export default ProductGrid;

