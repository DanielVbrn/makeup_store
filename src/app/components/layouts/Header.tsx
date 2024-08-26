import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Header.module.css'; // Ajuste o caminho conforme necessário

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>MakeupStore</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/about" className={styles.link}>Sobre</Link></li>
          <li><Link href="/products" className={styles.link}>Produtos</Link></li>
          <li><Link href="/contact" className={styles.link}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
