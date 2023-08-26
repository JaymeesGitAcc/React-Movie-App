import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieListAsync } from '../../features/moviesListSlice';
import ListArticle from '../ListArticle/ListArticle';
import SearchBarPrimary from '../SearchBarPrimary/SearchBarPrimary';

const MovieList = () => {

    const { show_by } = useParams();
    const dispatch = useDispatch();

    const { list, loading, error } = useSelector(state => state.movieList);

    useEffect(() => {
        const showBy = show_by.toLowerCase().split(' ').join('_');
        dispatch(movieListAsync(showBy));
    }, [show_by, dispatch])


    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    return (
        <React.Fragment>
            <Header />
            <SearchBarPrimary />
            <section className='listing_section'>
                <h1>{show_by} Movies</h1>
                <div className='list_container'>
                    {
                        list.results &&
                        list.results.map(item => {
                            return <ListArticle key={item.id} item={item} />
                        })
                    }
                </div>

            </section>
        </React.Fragment>
    );
}

export default MovieList;