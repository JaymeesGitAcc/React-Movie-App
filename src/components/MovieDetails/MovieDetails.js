import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsAsync } from "../../features/movieDetailsSlice";
import { showVideoPlayer, setURL, displayState } from "../../features/videoPlayerSlice";
import styles from './MovieDetails.module.css';


const MovieDetails = () => {

    // console.log('MovieDetails rendered');

    const { id } = useParams();
    const dispatch = useDispatch();
    const videoPlayer = useSelector(displayState);

    const { details, loading, error, videos } = useSelector(state => state.movieDetails);

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

    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    if(videoPlayer) {
        const { results } = videos;
        const trailers = results.filter(item => item.type === 'Trailer');
        // console.log(trailers[0]);
        const URL = `https://www.youtube.com/embed/${trailers[0].key}`;
        dispatch(setURL(URL));
    }

    return (
        <section className={styles.movieDetails_section} >
            <Link to="/">Go to Home Page...</Link>

            <article className={styles.details}>
                <div className={styles.image_container}>
                    <img src={imageURL(details.poster_path)} alt="" />
                </div>
                <div className={styles.about_movie}>
                    <h1>{details.title}&nbsp;
                        {`(${releaseYear(details.release_date)})`}
                    </h1>

                    <div>
                        <button onClick={() => dispatch(showVideoPlayer())}>Play trailer</button>
                    </div>
                    <h3><i>{details.tagline}</i></h3>

                    <div>
                        <h3>Overview</h3>
                        <p>{details.overview}</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default MovieDetails;