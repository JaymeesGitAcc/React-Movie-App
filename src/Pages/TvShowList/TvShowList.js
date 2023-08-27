import React, { useEffect } from "react";
import ListArticle from "../../components/ListArticle/ListArticle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tvShowListAsync } from "../../features/tvShowListSlice";
import Header from "../../components/Header/Header";
import SearchBarPrimary from "../../components/SearchBarPrimary/SearchBarPrimary";
import Footer from "../../components/Footer/Footer";

const TvShowList = () => {

    const { show_by } = useParams();

    const dispatch = useDispatch();

    const { list, loading, error } = useSelector(state => state.tvShowList);

    useEffect(() => {
        const showBy = show_by.toLowerCase().split(' ').join('_');
        dispatch(tvShowListAsync(showBy));
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
                <h1>{show_by} TV Shows</h1>
                <div className='list_container'>
                    {
                        list.results &&
                        list.results.map(item => {
                            return <ListArticle key={item.id} item={item} />
                        })
                    }
                </div>

            </section>

            <Footer />
        </React.Fragment>
     );
}
 
export default TvShowList;