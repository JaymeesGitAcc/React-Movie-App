import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchSliceAsync } from '../../features/searchSlice';
import styles from './SearchResults.module.css';
import ResultArticle from './ResultArticle';

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
                    return <ResultArticle  key={result.id} result={result}/>
                })
            }
        </section>
    );
}

export default SearchResults;