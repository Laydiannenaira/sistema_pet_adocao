import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img src="/logo.png" alt="Logo Adotaí" className={styles.logo} />
            </Link>
          </div>
          
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pets" className={styles.navLink}>
              Lista de Pets
            </Link>
          </li>
          <li>
            <Link to="/historico" className={styles.navLink}>
              Histórico de Adoções
            </Link>
          </li>
          <li>
            <Link to="/cadastrar-pet" className={styles.navLink}>
              Cadastro de Pet
            </Link>
          </li>
          <li>
            <Link to="/cadastrar-adotante" className={styles.navLink}>
              Cadastro de Adotante
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
