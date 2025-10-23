import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Home.module.css'; 

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <img 
          src="/banneradotai.png"
          alt="Adotaí - Abrigo de pets" 
          className={styles.heroImage} 
        />
        
        <div className={styles.heroText}>
          <h1>Conectando Corações e Patinhas</h1>
          <p>
            Bem-vindo ao Adotaí! Somos mais que um abrigo; somos uma ponte 
            que une lares amorosos a animais que precisam de uma segunda chance. 
            Nossa missão é resgatar, cuidar e encontrar famílias para cães e 
            gatos, transformando vidas, uma adoção por vez. Cada olhar e 
            ronronar em nosso site conta uma história de esperança. Explore, 
            conheça nossos residentes incríveis e veja como você pode fazer a 
            diferença. Adotar não só salva uma vida, mas também enche a sua 
            de alegria incomparável. Encontre seu novo melhor amigo aqui!
          </p>
        </div>
      </section>

      {/* Cards Informativos */}
      <section className={styles.infoSection}>
        <div className={styles.cardsContainer}>

          <div className={`${styles.infoCard} ${styles.cardOrange}`}>
            <h2>Porque adotar agora mesmo?</h2>
            <p>
              Todos os anos, incontáveis animais maravilhosos esperam em abrigos 
              por uma família amorosa. Escolher a adoção significa dar a um pet 
              merecedor uma nova chance e lutar contra a criação irresponsável. 
              Você ganha um amigo leal enquanto ativamente torna o mundo um lugar 
              mais gentil para os animais. É um ato de amor com uma recompensa 
              inestimável: companheirismo incondicional. Pronto para mudar uma 
              vida (e a sua)? <Link to="/pets" className={styles.adoptLink}>Adotaí, vai!</Link>
            </p>
          </div>

          <div className={`${styles.infoCard} ${styles.cardGreen}`}>
            <h2>Vem cá, me dá a mão!</h2>
            <p>
              Trazer um novo pet para casa é emocionante, mas sabemos que também 
              é uma adaptação! Por isso, o Adotaí se compromete a te apoiar. 
              Durante os primeiros dois meses após a adoção, nossa equipe oferece 
              orientação e acompanhamento. Daremos dicas sobre treinamento, 
              comportamento e adaptação à nova rotina, pelos canais de comunicação 
              que você preferir. Estamos aqui para garantir uma transição suave 
              e feliz para você e seu novo membro peludo da família.
            </p>
          </div>

          <div className={`${styles.infoCard} ${styles.cardBlue}`}>
            <h2>Vem pro lado Furry você também!</h2>
            <p>
              Há uma magia especial em compartilhar sua vida com um pet. Eles te 
              recebem com entusiasmo sem limites, oferecem conforto sem palavras 
              e te lembram de brincar. Estudos mostram que ter um animal pode 
              reduzir o estresse e aumentar a felicidade. Seja numa corrida 
              divertida no parque ou num carinho tranquilo no sofá, a presença 
              deles enriquece nossas vidas de inúmeras maneiras. Experimente a 
              alegria única e o amor incondicional que eles trazem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;