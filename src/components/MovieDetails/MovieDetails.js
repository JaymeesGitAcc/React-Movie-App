import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    detailsOb,
    displayVideoPlayer,
    error,
    loading,
    movieDetailsAsync,
    setVideoID,
    videoID,
    videoPlayerState
} from "../../features/movieDetailsSlice";
import styles from './MovieDetails.module.css';
import SearchBar from '../SearchBar/SearchBar';
import YoutubePlayer from "../VideoPlayer/YoutubePlayer";

const MovieDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const loader = useSelector(loading);
    const errorFlag = useSelector(error);
    const details = useSelector(detailsOb);
    const state = useSelector(videoPlayerState);
    const video_id = useSelector(videoID);

    const [videoId, setVideoId] = useState(null);

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

    // function getVideoID() {
    //     const { results } = videos;
    //     const trailer = results.filter(item => item.name === 'Official Trailer');
    //     const trailerID = trailer.length ? trailer[0].key
    //         : (results.length ? results[0].key
    //             : null);
    //     return trailerID;
    // }

    if (loader)
        return <div>loading...</div>

    if (errorFlag)
        return <div>{error}</div>

    if (details.videos) {
        const { results } = details.videos;
        const trailer = results.filter(item => item.name === 'Official Trailer');
        const trailerID = trailer.length ? trailer[0].key
            : (results.length ? results[0].key
                : null);
        setVideoId(trailerID);
    }

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
                                    onClick={() => dispatch(displayVideoPlayer())}
                                >Play trailer</button>
                            </div>
                            <h3><i>{details.tagline}</i></h3>

                            <div>
                                <h3>Overview</h3>
                                <p>{details.overview}</p>
                            </div>
                        </div>
                    </article>

                    {state && 
                        // <section className={styles.videoPlayer_container}>
                        //     <header className={styles.videoPlayer_header}>
                        //         <h3>Video Player</h3>
                        //         <button
                        //             className={`${styles.action_btn} ${styles.close_btn}`}
                        //             onClick={() => dispatch(hideVideoPlayer())}>Close</button>
                        //     </header>
                        //     <YouTube
                        //         className={styles.videoPlayer}
                        //         videoId={getVideoID()}
                        //         opts={{
                        //             height: '100%',
                        //             width: '100%',
                        //             playerVars: {
                        //                 autoplay: 1,
                        //             }
                        //         }}
                        //     />
                        // </section>
                        <YoutubePlayer videoId={videoId}/>
                    }
                </div>
            </section>
        </>
    );
}

export default MovieDetails;