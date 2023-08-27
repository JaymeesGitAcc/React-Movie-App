import { Link } from 'react-router-dom';
import styles from './SideNavBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSideNav } from '../../features/sideNavSlice';

const SideNavMenu = () => {

    const [showList1, setShowList1] = useState(true);
    const [showList2, setShowList2] = useState(false);

    const dispatch = useDispatch();

    const subList_1 = {
        type: 'movies',
        list: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated']
    };

    const subList_2 = {
        type: 'shows',
        list: ['Popular', 'Airing Today', 'On The Air', 'Top Rated']
    };

    return (
        <div className={styles.menu}>

            <button className={styles.homePage_btn}>
                <Link to="/" onClick={() => dispatch(closeSideNav())}>Home</Link>
            </button>

            <div className={styles.subMenu}>
                <button onClick={() => setShowList1(state => !state)}>Movies</button>

                <div className={`
                    ${styles.listContainer_1}
                    ${showList1 && styles.showList}
                `}>
                    <ul>
                        {
                            subList_1.list.map((item, index) => {
                                return <li key={index}>
                                    <Link to={`/${subList_1.type}/${item}`}
                                        onClick={() => dispatch(closeSideNav())}>
                                        {item}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.subMenu}>
                <button onClick={() => setShowList2(state => !state)}>TV Shows</button>
                <div className={`
                    ${styles.listContainer_2}
                    ${showList2 && styles.showList}
                `}>
                    <ul>
                        {
                            subList_2.list.map((item, index) => {
                                return <li key={index}>
                                    <Link to={`/${subList_2.type}/${item}`}
                                        onClick={() => dispatch(closeSideNav())}>
                                        {item}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default SideNavMenu;