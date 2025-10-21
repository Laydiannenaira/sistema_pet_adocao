import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Adotaí: Abrigo de Pets - Rua dos bichos, número 172, Petlândia</p>
      <hr />
      <p>Desenvolvido pelo Squad 8 - Bootcamp Avanti Full Stack - 2025</p>
    </footer>
  );
};

export default Footer;