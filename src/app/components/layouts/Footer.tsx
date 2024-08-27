import React from 'react';
import styles from '../../styles/Footer.module.css'; // Ajuste o caminho conforme necessário

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Sobre Nós</h4>
          <p>
            Somos uma empresa dedicada a oferecer os melhores produtos de maquiagem para nossos clientes. 
            Com uma vasta experiência no mercado, garantimos qualidade e satisfação.
          </p>
        </div>
        <div className={styles.section}>
          <h4>Links Rápidos</h4>
          <ul className={styles.list}>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/about" className={styles.link}>Sobre</a></li>
            <li><a href="/products" className={styles.link}>Produtos</a></li>
            <li><a href="/contact" className={styles.link}>Contato</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contato</h4>
          <p>Email: <a href="mailto:info@example.com" className={styles.link}>info@example.com</a></p>
          <p>Telefone: (123) 456-7890</p>
        </ div>
        <div className={styles.section}>
          <h4>Siga-nos</h4>
          <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
