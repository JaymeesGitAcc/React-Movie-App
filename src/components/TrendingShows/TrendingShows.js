import { useDispatch, useSelector } from 'react-redux';
import { trendingShowsAsync } from '../../features/trendingShowsSlice';
import styles from './TrendingShows.module.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';

const TrendingShows = () => {

    const { list, loading, error } = useSelector(state => state.trendingShows);
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('day');

    useEffect(() => {
        dispatch(trendingShowsAsync(selectedOption));
    }, [dispatch, selectedOption]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <section className={styles.trendingShows_section}>
            <h1 className={styles.section_title}>Trending TV shows</h1>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="day">Today</option>
                <option value="week">This Week</option>
            </select>

            {error !== null && <div>{error}</div>}

            {loading && <Loader /> }

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