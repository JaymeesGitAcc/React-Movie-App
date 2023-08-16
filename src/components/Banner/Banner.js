import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Banner.module.css';
import { useEffect, useState } from 'react';

const Banner = () => {

    const [backdropURL, setBackdropURL] = useState('');
    const { list } = useSelector(state => state.trendingMovies);

    useEffect(() => {
        if (list.results) {
            const { results } = list;
            const imageID = results[0].backdrop_path;
            const url = `https://www.themoviedb.org/t/p/original/${imageID}`;
            setBackdropURL(url);
        }
    }, [list]);

    return (
        <section className={styles.banner_section}
            style={{ backgroundImage: `url(${backdropURL})` }}>
            <div className={styles.content_wrapper}>
                <div className={styles.banner_text}>
                    
                    <h1>Welcome to MovieQuest. Your Film Adventure Awaits.</h1>
                    <h3>Explore, Discover, Repeat!</h3>

                </div>
                    <SearchBar />
            </div>
        </section>
    );
}

export default Banner;