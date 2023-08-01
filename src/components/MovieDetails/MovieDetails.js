import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetailsAsync } from "../../features/movieDetailsSlice";
import styles from './MovieDetails.module.css';

const MovieDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { details, loading, error } = useSelector(state => state.movieDetails);

    useEffect(() => {
        dispatch(movieDetailsAsync(id));
    }, [dispatch, id]);

    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    return (
        <section className={styles.movieDetails_section} >
            <Link to="/">Go to Home Page...</Link>

            <div className={styles.details}>
                <div className={styles.image_container}>
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`} alt="" />
                </div>
                <div className={styles.about_movie}>
                    <h1>{details.title}</h1>
                    <p>{details.overview}</p>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;