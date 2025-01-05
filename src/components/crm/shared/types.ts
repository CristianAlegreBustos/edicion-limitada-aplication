// Representa una opción para un Select (categorías, marcas, modelos, etc.)
export interface Option {
    id: string
    name: string
  }

  // Representa el estado del formulario del producto
  export interface FormData {
    brand_id: string
    model_id: string
    category_id: string
    size_id: string
    product_price: string
    product_currency: string
    product_description: string
  }
