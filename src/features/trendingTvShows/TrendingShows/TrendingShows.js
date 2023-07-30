import { useDispatch, useSelector } from 'react-redux';
import { trendingShowsAsync } from '../trendingShowsSlice';
import styles from './TrendingShows.module.css';
import { useEffect, useState } from 'react';

const TrendingShows = () => {

    const { list, loading, error } = useSelector(state => state.trendingShows);
    const dispatch = useDispatch();
    const [weekDay, setWeekDay] = useState('day');

    useEffect(() => {
        dispatch(trendingShowsAsync(weekDay));
    }, [dispatch, weekDay]);

    return (
        <section className={styles.trendingShows_section}>
            <h1 className={styles.section_title}>Trending On TV</h1>

            <div className={styles.buttons_container}>
                <button onClick={() => setWeekDay('day')}>Today</button>
                <button onClick={() => setWeekDay('week')}>This Week</button>
            </div>

            {error !== null && <div>{error}</div>}

            {loading && <div>loading...</div>}

            <div className={styles.row}>
                {
                    list.results &&
                    list.results.map(obj => {
                        return <div key={obj.id}>
                            <div className={styles.image_container}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${obj.poster_path}`}
                                    alt={obj.name} />
                            </div>

                            <div className={styles.card_text}>
                                <p>{obj.name}</p>
                            </div>
                        </div>
                    })
                }
            </div>


        </section>
    );
}

export default TrendingShows;