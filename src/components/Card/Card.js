import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({item}) => {

    const imageURL = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;
    return ( 
        <article className={styles.card}>
            <Link to={`/movie/${item.id}`}>
                <div className={styles.image_container}>
                    <img src={imageURL} alt="" />
                </div>
            </Link>
            <div className={styles.card_text}>
                <Link to={`/movie/${item.id}`}>
                    <p>{item.title}</p>
                </Link>
            </div>
        </article>
     );
}
 
export default Card;