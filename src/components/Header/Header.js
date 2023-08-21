import { Link } from "react-router-dom"; 
import styles from './Header.module.css';
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <Link to="/">
                    <h2>MovieQuest</h2>
                </Link>
            </div>

            <NavBar />
        </header>
     );
}
 
export default Header;