import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./NotFound.module.css";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
    return (
        <>
            <Header />
            <section className={styles.pageNotFound_section}>
                <h1>Error 404</h1>
                <h2>Page not found!!!</h2>
                <button className={styles.homepage_btn}>
                    <Link to="/">Go to Homepage</Link>
                </button>
            </section>
            <Footer />
        </>
    );
}

export default NotFound;  