import { useSelector, useDispatch } from 'react-redux';
import { trendingMoviesAsync } from '../../features/trendingMoviesSlice';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './TrendingMovies.module.css';
import Loader from '../../components/Loader/Loader';

const TrendingMovies = () => {

    const { list, loading, error } = useSelector((state) => state.trendingMovies);

    const [selectedOption, setSelectedOption] = useState('day');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trendingMoviesAsync(selectedOption));
    }, [dispatch, selectedOption])

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <section className={styles.trendingMovies_section}>

            <h1 className={styles.section_title}>Trending Movies</h1>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="day">Today</option>
                <option value="week">This Week</option>
            </select>

            {loading && <Loader />}

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