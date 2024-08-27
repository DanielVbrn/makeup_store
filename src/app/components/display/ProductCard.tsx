"use-client"

import React from 'react';
import styles from '../../styles/ProductCard.module.css'; 
import Image from 'next/image';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, description, price }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${parseFloat(price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
