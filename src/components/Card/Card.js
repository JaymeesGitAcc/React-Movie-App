import styles from './Card.module.css';

const Card = ({item}) => {
    const imageURL = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`;
    return ( 
        <article className={styles.card}>
            <div className={styles.image_container}>
                <img src={imageURL} alt="" />
            </div>
            <div className={styles.card_text}>
                <p>{item.title}</p>
            </div>
        </article>
     );
}
 
export default Card;