import React from 'react';
import Link from 'next/link';
import styles from '../../styles/SideBar.module.css'; 

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <h2 className={styles.title}>Navegação</h2>
        <ul className={styles.menu}>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/products" className={styles.link}>Produtos</Link></li>
          <li><Link href="/about" className={styles.link}>Sobre Nós</Link></li>
          <li><Link href="/contact" className={styles.link}>Contato</Link></li>
          <li><Link href="/promotions" className={styles.link}>Promoções</Link></li>
        </ul>
      </nav>
      <section className={styles.categories}>
        <h2 className={styles.title}>Categorias</h2>
        <ul className={styles.categoryList}>
          <li><Link href="/products?category=foundation" className={styles.link}>Bases</Link></li>
          <li><Link href="/products?category=lipstick" className={styles.link}>Batom</Link></li>
          <li><Link href="/products?category=eyeshadow" className={styles.link}>Sombras</Link></li>
          <li><Link href="/products?category=mascara" className={styles.link}>Máscaras</Link></li>
          <li><Link href="/products?category=skincare" className={styles.link}>Cuidados com a Pele</Link></li>
        </ul>
      </section>
      <section className={styles.brands}>
        <h2 className={styles.title}>Marcas Populares</h2>
        <ul className={styles.brandList}>
          <li><Link href="/products?brand=maybelline" className={styles.link}>Maybelline</Link></li>
          <li><Link href="/products?brand=loreal" className={styles.link}>L'Oréal</Link></li>
          <li><Link href="/products?brand=clinique" className={styles.link}>Clinique</Link></li>
          <li><Link href="/products?brand=estee-lauder" className={styles.link}>Estée Lauder</Link></li>
        </ul>
      </section>
    </aside>
  );
};

export default SideBar;
