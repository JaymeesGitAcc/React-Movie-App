import { Link } from "react-router-dom"; 
import styles from './Header.module.css';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <Link to="/">
                    <h2>MovieQuest</h2>
                </Link>
            </div>
        </header>
     );
}
 
export default Header;