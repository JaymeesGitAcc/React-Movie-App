import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchSliceAsync } from '../../features/searchSlice';
import styles from './SearchResults.module.css';

const SearchResults = () => {

    const { query } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.searchResults);

    useEffect(() => {
        dispatch(searchSliceAsync(query));
    }, [dispatch, query]);

    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    return (
        <section className={styles.searchResults_section}>
            <Link to="/">Go back to home...</Link>
            <h1>Search Results related to :{query}</h1>
            {
                data.results &&
                data.results.map(result => {
                    return <article className={styles.result_item} key={result.id}>
                        <div className={styles.image_container}>
                            <img
                                src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${result.poster_path}`}
                                alt={result.title ? result.title : result.name}
                            />
                        </div>

                        <div className={styles.details}>
                            <Link to={`/${result.media_type}/${result.id}`}>
                                <b>{result.title ? result.title : result.name}</b>
                            </Link>
                            <p>{result.overview}</p>
                        </div>
                    </article>
                })
            }
        </section>
    );
}

export default SearchResults;