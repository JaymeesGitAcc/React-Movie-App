import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchSliceAsync } from '../../features/searchSlice';
import styles from './SearchResults.module.css';
import ResultArticle from './ResultArticle';
import Header from '../../components/Header/Header';
import SearchBarPrimary from '../../components/SearchBarPrimary/SearchBarPrimary';
import Footer from '../../components/Footer/Footer';

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
                {
                    data.results && data.results.length > 0 &&
                    <h1>Search Results related to "{query}"</h1>
                }
                <div className={styles.resultItems_container}>
                    {
                        data.results && data.results.length > 0 
                        ?
                        data.results.map(result => {
                            return <ResultArticle key={result.id} result={result} />
                        })
                        :
                        <div className={styles.no_results}>
                            <h2>No Results Found for "{query}"</h2>
                        </div>
                    }

                </div>
            </section>

            <Footer />
        </>
    );
}

export default SearchResults;