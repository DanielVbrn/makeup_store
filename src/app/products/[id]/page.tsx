import React from 'react';
import ProductCard from '../../components/display/ProductCard'; // Ajuste o caminho conforme necessário
import { Product } from '../../api/products/[id]/route'; // Ajuste o caminho conforme necessário

interface ProductPageProps {
  params: { id: string };
}

const fetchProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Produto não encontrado');
  }
  return response.json();
};

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id } = params;

  try {
    const product = await fetchProduct(id);

    return (
      <div>
        <ProductCard
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      </div>
    );
  } catch (error) {
    return <p>Erro ao carregar produto</p>;
  }
};

export default ProductPage;
