import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchSliceAsync } from '../../features/searchSlice';

const SearchResults = () => {

    const { query } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.searchResults);

    useEffect(() => {
        dispatch(searchSliceAsync(query));
    },[dispatch, query]);

    if(loading)
        return <div>loading...</div>

    if(error)
        return <div>{error}</div>

    if(data.results)
        return ( 
            <section>
                <Link to="/">Go back to home...</Link>
                <h1>Search Results related to :{query}</h1>
                <ul style={{padding: "1rem 2rem"}}>
                    {
                        data.results.map(result => {
                            return <li key={result.id}>
                                {result.title ? result.title: result.name}
                                <p>Type: {result.media_type}</p>
                            </li>
                        })
                    }
                </ul>
            </section>
        );
}
 
export default SearchResults;