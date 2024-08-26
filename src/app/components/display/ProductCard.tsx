import React from 'react';
import styles from '../../styles/ProductCard.module.css'; // Ajuste o caminho conforme necessário
import Image from 'next/image';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, description, price }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
