import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchSliceAsync } from '../../features/searchSlice';
import styles from './SearchResults.module.css';
import ResultArticle from './ResultArticle';
import Header from '../Header/Header';
import SearchBarPrimary from '../SearchBarPrimary/SearchBarPrimary';

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
        <>
            <Header />

            <SearchBarPrimary />
            <section className={styles.searchResults_section}>
                <h1>Search Results related to :{query}</h1>
                <div className={styles.resultItems_container}>
                    {
                        data.results &&
                        data.results.map(result => {
                            return <ResultArticle key={result.id} result={result} />
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default SearchResults;