import { Link } from 'react-router-dom';
import styles from './SearchResults.module.css';

const ResultArticle = ({ result }) => {

    function getOverview(content) {
        if (content) {
            const maxWords = 15;
            const textContent = content.trim();
            const words = textContent.split(' ');

            if (words.length > maxWords) {
                const limitedWords = words.slice(0, maxWords);
                const limitedText = limitedWords.join(' ');
                return `${limitedText}...`;
            }
        }
        return content;
    }

    function imageURL(imageId) {
        if (imageId) {
            const url = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${imageId}`;
            return url;
        }
        return null;
    }

    function resolveDate() {
        const dateString = result.release_date ? result.release_date : result.first_air_date;
        const dateObj = new Date(dateString);
        const date = dateObj.getDay();
        const monthName = dateObj.toLocaleString('en-US', { month: 'short' });
        const year = dateObj.getFullYear();
        return date ? `${date} ${monthName}, ${year}` : `${monthName}, ${year}`;
    }

    return (
        <article className={styles.result_item}>
            <Link  to={`/${result.media_type}/${result.id}`}>
                <div className={styles.image_container}>
                    <img
                        src={
                            result.poster_path ?
                                imageURL(result.poster_path) :
                                imageURL(result.profile_path)
                        }
                        alt={result.title ? result.title : result.name}
                    />
                </div>
            </Link>

            <div className={styles.details}>
                <Link to={`/${result.media_type}/${result.id}`}>
                    <p className={styles.title}>
                        <b>{result.title ? result.title : result.name}</b>
                    </p>
                </Link>

                {
                    (result.releaseDate || result.first_air_date) && 
                    <p className={styles.releaseDate}>{resolveDate()}</p>
                }

                <div className={styles.overview}>
                    <p>
                        {getOverview(result.overview)}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default ResultArticle;