import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {

    const currentYear = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <footer className={styles.app_footer}>

            <section className={styles.info_container}>

                <article className={styles.links_container}>
                    <h3>Quick Links</h3>
                    <ul className={styles.footer_links}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies/Popular">Popular Movies</Link>
                        </li>
                        <li>
                            <Link to="/shows/Popular">Popular TV Shows</Link>
                        </li>
                    </ul>
                </article>

                <article className={styles.contact_info}>
                    <h3>Contact</h3>
                    <p>Email : <span>jaymees1999@gmail.com</span></p>
                    <p>Phone : <span>+91 9305622768</span></p>
                </article>

            </section>

            <section className={styles.copyright}>
                Copyright &copy; <span>{currentYear()}</span>
            </section>

            <div className={styles.footer_text}>
                <p>Developed by Andrew James</p>
            </div>
        </footer>
    );
}

export default Footer;