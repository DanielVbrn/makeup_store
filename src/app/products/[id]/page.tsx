// src/app/products/[id]/page.tsx
import React from 'react';
import { Product } from '@/app/api/products/[id]/route'; // Importar o tipo Product

interface ProductPageProps {
  params: { id: string }; // Adicionar o parâmetro id na interface
}

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Produto não encontrado');
  }
  return response.json();
};

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { id } = params;

  const [product, setProduct] = React.useState<Product | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProduct(id);
        setProduct(productData);
      } catch (err) {
        setError('Erro ao carregar produto');
      }
    };

    getProduct();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Preço: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
