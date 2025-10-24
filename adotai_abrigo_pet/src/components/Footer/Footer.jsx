import React from 'react';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src="/logo.png" alt="Logo Adotaí" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4>ADOTE</h4>
            <ul>
              <li>
                <Link to="/pets" className={styles.navLink}>
                  Lista de animais
                </Link>
              </li>
              <li>
                <Link to="/historico" className={styles.navLink}>
                  Histórico de Adoções
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>SOBRE O ADOTAÍ</h4>
            <ul>
              <li>
                <Link to="/" className={styles.navLink}>
                  Quem somos
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.navLink}>
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <Link to="/" className={styles.navLink}>
                  Termo de Uso e Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Adotaí: Abrigo de Pets - Rua dos bichos, número 172, Petlândia</p>
        <p>© 2025 Adotaí. Todos os direitos reservados. Desenvolvido pelo Squad 8 - Bootcamp Avanti Full Stack - 2025</p>
      </div>
    </footer>
  );
};

export default Footer;