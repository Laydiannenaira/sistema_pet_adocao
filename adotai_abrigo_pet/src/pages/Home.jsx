import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaHeartbeat, FaPaw, FaBone, FaSmile } from "react-icons/fa";


const Home = () => {
    return (
        <div>
            <section className={styles.firstSection}>
                <div className={styles.fsText}>
                    <h1>Transforme um gesto em amor</h1>
                    <p>Adotar é dar amor e uma nova chance a quem precisa de cuidado e carinho.</p>

                    <Link to="/pets" className={styles.adoptButton}>
                        ADOTE AGORA
                    </Link>
                </div>

                <div className={styles.fsImage}>
                    <img src="/sections-photos/animals.png"></img>
                </div>
            </section>

            <section className={styles.secondSection}>
                <h2>
                    No Adotaí você encontra um amigo
                    <br></br>
                    <span className={styles.secondSectionText}>PARA A VIDA TODA</span>
                </h2>

                <div className={styles.petsContainer}>
                    <div className={`${styles.petShape} ${styles.blue}`}>
                        <img src="/sections-photos/dog-bluebg.jpg"></img>
                    </div>
                    <div className={`${styles.petShape} ${styles.orange}`}>
                        <img src="/sections-photos/cat-orangebg.jpg"></img>
                    </div>
                    <div className={`${styles.petShape} ${styles.green}`}>
                        <img src="/sections-photos/dog-greenbg.jpg"></img>
                    </div>
                    <div className={`${styles.petShape} ${styles.purple}`}>
                        <img src="/sections-photos/cat-purplebg.jpg"></img>
                    </div>
                </div>
            </section>

            <section className={styles.thirdSection}>
                <h2>Adote com responsabilidade</h2>

                <div className={styles.responsibilityCards}>
                    <div className={styles.card}>
                        <div className={`${styles.iconCircle} ${styles.health}`}>
                            <FaHeartbeat className={styles.cardIcon}/>
                        </div>
                        <h3>Saúde</h3>
                        <p>Além de adotar, você precisa cuidar da saúde do seu novo amigo,
                            mantendo sempre seu cartão de vacinação atualizado e visitas ao veterinário.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.iconCircle} ${styles.food}`}>
                            <FaBone className={styles.cardIcon} />
                        </div>
                        <h3>Alimentação</h3>
                        <p>Forneça alimentação balanceada e adequada à idade e porte do seu pet.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.iconCircle} ${styles.fun}`}>
                            <FaPaw className={styles.cardIcon} />
                        </div>
                        <h3>Lazer</h3>
                        <p> Proporcione momentos de diversão e exercícios, estimulando o bem-estar físico e mental.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={`${styles.iconCircle} ${styles.love}`}>
                            <FaSmile className={styles.cardIcon} />
                        </div>
                        <h3>Carinho</h3>
                        <p>  Dedique atenção e afeto, fortalecendo o vínculo e a confiança com seu amigo.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;