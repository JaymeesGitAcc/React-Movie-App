import { useDispatch } from 'react-redux'
import { openSideNav } from '../../features/sideNavSlice';
import styles from './HamButton.module.css';

const HamButton = () => {

    const dispatch = useDispatch();

    return (
        <div className={styles.hamButton}
            onClick={() => dispatch(openSideNav())}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    );
}

export default HamButton;