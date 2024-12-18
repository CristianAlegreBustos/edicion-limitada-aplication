import React from 'react';
import ProductGrid from '../product-grid/product-grid';

const products = [
    { id: 1,source: '/placeholder.svg?height=300&width=300', productName: 'Abrigo de Lana',title: 'Abrigo de Lana', price: 599.99,  },
    { id: 1,source: '/placeholder.svg?height=300&width=300', productName: 'Bolso de Cuero',title: 'Bolso de Cuero', price: 599.99,  },
    { id: 1,source: '/placeholder.svg?height=300&width=300', productName: 'Zapatos de Diseñador',title: 'Zapatos de diseñador', price: 599.99,  },
    { id: 1,source: '/placeholder.svg?height=300&width=300', productName: 'Reloj de Lujo',title: 'Reloj de Lujo', price: 599.99,  },
  ]

const ProductGridWrapper: React.FC = () => <ProductGrid products={products} />;

export default ProductGridWrapper;
