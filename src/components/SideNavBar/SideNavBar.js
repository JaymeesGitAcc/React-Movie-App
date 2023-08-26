import { closeSideNav, flag } from '../../features/sideNavSlice';
import styles from './SideNavBar.module.css';
import SideNavMenu from './SideNavMenu';
import { useDispatch, useSelector } from 'react-redux';

const SideNavBar = () => {

    const flagValue = useSelector(flag);
    const dispatch = useDispatch();

    return (
        <nav className={`${styles.sideNav} ${flagValue ? styles.show : ''}`}>
            <div className={styles.menu_container}>

                <button className={styles.close_btn}
                    onClick={() => dispatch(closeSideNav())}>
                    <div className={styles.cross}></div>
                </button>

                <SideNavMenu />
            </div>
        </nav>
    );
}

export default SideNavBar;