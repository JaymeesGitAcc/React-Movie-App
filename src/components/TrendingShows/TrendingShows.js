import { useDispatch, useSelector } from 'react-redux';
import { trendingShowsAsync } from '../../features/trendingShowsSlice';
import styles from './TrendingShows.module.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const TrendingShows = () => {

    const { list, loading, error } = useSelector(state => state.trendingShows);
    const dispatch = useDispatch();
    const [weekDay, setWeekDay] = useState('day');

    useEffect(() => {
        dispatch(trendingShowsAsync(weekDay));
    }, [dispatch, weekDay]);

    return (
        <section className={styles.trendingShows_section}>
            <h1 className={styles.section_title}>Trending TV shows</h1>

            <div className={styles.buttons_container}>
                <button onClick={() => setWeekDay('day')}>Today</button>
                <button onClick={() => setWeekDay('week')}>This Week</button>
            </div>

            {error !== null && <div>{error}</div>}

            {loading && <div>loading...</div>}

            <div className={styles.row}>
                {
                    list.results &&
                    list.results.map(item => {
                        return <Card key={item.id} item={item}/>
                    })
                }
            </div>


        </section>
    );
}

export default TrendingShows;