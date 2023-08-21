import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({item}) => {

    const imageURL = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;

    return ( 
        <article className={styles.card}>
            <Link to={`/${item.media_type}/${item.id}`}>
                <div className={styles.image_container}>
                    <img src={imageURL} 
                    alt={item.title ? item.title : item.name} 
                    className={styles.card_image}/>
                </div>
            </Link>
            <div className={styles.card_text}>
                <Link to={`/${item.media_type}/${item.id}`}>
                    <p className='text_small'>{ item.title ? item.title : item.name}</p>
                </Link>
            </div>
        </article>
     );
}
 
export default Card;