import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    detailsObj,
    error,
    loading,
    movieDetailsAsync,
    movieRecommendations,
} from "../../features/movieDetailsSlice";
import YoutubePlayer from "../VideoPlayer/YoutubePlayer";
import MovieDetailsArticle from "./MovieDetailsArticle";
import Header from "../Header/Header";
import RecommendedMovies from "./RecommendedMovies";
import SearchBarPrimary from "../SearchBarPrimary/SearchBarPrimary";

const MovieDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const loader = useSelector(loading);
    const errorFlag = useSelector(error);
    const details = useSelector(detailsObj);

    const { playerState } = useSelector(state => state.youtubePlayer);

    useEffect(() => {
        dispatch(movieDetailsAsync(id));
        dispatch(movieRecommendations(id));

    }, [dispatch, id]);

    function backdgropImage(path) {
        let url;
        if (path)
            url = `https://www.themoviedb.org/t/p/original/${path}`;
        return url;
    }

    if (loader)
        return <div>loading...</div>

    if (errorFlag)
        return <div>{error}</div>

    return (
        <>
            <Header />

            <SearchBarPrimary />

            <section className="details_section"
                style={{ backgroundImage: `url(${backdgropImage(details.backdrop_path)})` }}>

                <div className="article_container">
                    {details && <MovieDetailsArticle details={details} />}
                </div>

                {playerState && details &&
                    <YoutubePlayer data={details} />
                }
            </section>

            <RecommendedMovies />
        </>
    );
}

export default MovieDetails;