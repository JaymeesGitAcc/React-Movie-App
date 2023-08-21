import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const SubList = ({innerList}) => {
    return (
        <ul className={styles.subList}>
            {innerList.list.map((item, index) => {
                return <li key={index}>
                    <Link to={`/${innerList.type}/${item}`}>
                        { item }
                    </Link>
                </li>
            })}
        </ul>
    );
}

export default SubList;