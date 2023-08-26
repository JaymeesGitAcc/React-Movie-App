import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import SubList from './SubList';

const NavBar = () => {

    const subList_1 = {
        type: 'movies',
        list: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated']
    };
    const subList_2 = {
        type: 'shows',
        list: ['Popular', 'Airing Today', 'On The Air', 'Top Rated']
    };

    return (
        <div className={styles.navbar_container}>
            <nav className={styles.navbar}>

                <ul className={styles.navList}>
                    <li className={styles.navList_item}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className={styles.navList_item}>
                        Movies
                        <div className={styles.subList_container}>
                            <SubList innerList={subList_1} />
                        </div>
                    </li>
                    <li className={styles.navList_item}>
                        TV Shows
                        <div className={styles.subList_container}>
                            <SubList innerList={subList_2} />
                        </div>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default NavBar;