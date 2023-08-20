import { useSelector, useDispatch } from 'react-redux';
import { trendingMoviesAsync } from '../../features/trendingMoviesSlice';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './TrendingMovies.module.css';

const TrendingMovies = () => {

    const { list, loading, error } = useSelector((state) => state.trendingMovies);
    const [weekDay, setWeekDay] = useState('day');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trendingMoviesAsync(weekDay));
    }, [dispatch, weekDay])

    return (
        <section className={styles.trendingMovies_section}>

            <h1 className={styles.section_title}>Trending Movies</h1>

            <div className={`${styles.buttons_container}`}>
                <button onClick={() => setWeekDay('day')}>Today</button>
                <button onClick={() => setWeekDay('week')}>This Week</button>
            </div>

            {loading && <div>loading....</div>}

            {error !== null && <div>{error}</div>}

            {
                list.results && 
                <div className={`${styles.padding_topBottom} row`}>
                    {
                        list.results.map((movie) => {
                            return <Card key={movie.id} item={movie} />
                        })
                    }
                </div>
            }
        </section>
    );
}

export default TrendingMovies;