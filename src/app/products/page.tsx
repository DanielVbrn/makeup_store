"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '@/app/components/display/ProductCard';
import { Product } from '@/app/api/products/route'; 

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {products.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
