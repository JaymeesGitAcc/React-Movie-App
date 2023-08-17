import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showDetailsAsync } from '../../features/tvShowDetailsSlice';
import YoutubePlayer from '../VideoPlayer/YoutubePlayer';
import TvShowDetailsArticle from './TvShowDetailsArticle';
import Header from '../Header/Header';

const TvShowDetails = () => {

    const { id } = useParams();
    const { details, loading, error } = useSelector(state => state.showDetails);
    const dispatch = useDispatch();

    const { playerState } = useSelector(state => state.youtubePlayer);

    useEffect(() => {
        dispatch(showDetailsAsync(id));
    }, [dispatch, id]);


    function backdgropImage(path) {
        const url = `https://www.themoviedb.org/t/p/original/${path}`;
        return url;
    }

    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    return (
        <>
            <Header/>

            <section className="details_section"
                style={{ backgroundImage: `url(${backdgropImage(details.backdrop_path)})` }}>

                <div className="article_container">
                    {details && <TvShowDetailsArticle details={details}/>}
                </div>

                {playerState && details && <YoutubePlayer data={details} />}
            </section>
        </>
    );
}

export default TvShowDetails;