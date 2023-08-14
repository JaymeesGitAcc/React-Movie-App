import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    detailsObj,
    error,
    loading,
    movieDetailsAsync,
} from "../../features/movieDetailsSlice";
import styles from './MovieDetails.module.css';
import SearchBar from '../SearchBar/SearchBar';
import YoutubePlayer from "../VideoPlayer/YoutubePlayer";
import { showYoutubePlayer } from "../../features/youtubePlayerSlice";

const MovieDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const loader = useSelector(loading);
    const errorFlag = useSelector(error);
    const details = useSelector(detailsObj);

    const { playerState } = useSelector(state => state.youtubePlayer);

    useEffect(() => {
        dispatch(movieDetailsAsync(id));
    }, [dispatch, id]);


    function releaseYear(dateValue) {
        const date = new Date(dateValue);
        return date.getFullYear();
    }

    function imageURL(path) {
        let url;
        if (path)
            url = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${path}`;
        return url;
    }

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
            <Link to="/">Go to Home Page...</Link>
            <SearchBar />

            <section className={styles.movieDetails_section}
                style={{ backgroundImage: `url(${backdgropImage(details.backdrop_path)})` }}>

                <div className={styles.movieDetails_hero}>
                    <article className={styles.details} >
                        <div className={styles.image_container}>
                            <img src={imageURL(details.poster_path)} alt="" />
                        </div>
                        <div className={styles.about_movie}>
                            <h1>{details.title}&nbsp;
                                {`(${releaseYear(details.release_date)})`}
                            </h1>

                            <div>
                                <button
                                    className={`${styles.action_btn} ${styles.open_btn}`}
                                    onClick={() => dispatch(showYoutubePlayer())}
                                >Play trailer</button>
                            </div>

                            <h3><i>{details.tagline}</i></h3>

                            <div>
                                <h3>Overview</h3>
                                <p>{details.overview}</p>
                            </div>
                        </div>
                    </article>

                    {playerState && details &&
                        <YoutubePlayer data={details} />
                    }
                </div>
            </section>
        </>
    );
}

export default MovieDetails;