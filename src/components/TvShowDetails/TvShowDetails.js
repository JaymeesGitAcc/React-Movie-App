import { useParams, Link } from 'react-router-dom';
import styles from './TvShowDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showDetailsAsync } from '../../features/tvShowDetailsSlice';
import { showYoutubePlayer } from '../../features/youtubePlayerSlice';
import YoutubePlayer from '../VideoPlayer/YoutubePlayer';
import SearchBar from '../SearchBar/SearchBar';

const TvShowDetails = () => {
    const { id } = useParams();
    const { details, loading, error } = useSelector(state => state.showDetails);
    const dispatch = useDispatch();

    const { playerState } = useSelector(state => state.youtubePlayer);

    useEffect(() => {
        dispatch(showDetailsAsync(id));
    }, [dispatch, id]);

    function releaseYear(dateString) {
        const date = new Date(dateString);
        return date.getFullYear();
    }

    function imageURL(path) {
        const url = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${path}`;
        return url;
    }

    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    return (

        <>
            <Link to="/">Go back to Home...</Link>
            <SearchBar/>

            <section className={styles.tvShowDetails_section}>

                <div className={styles.details}>

                    <div className={styles.image_container}>
                        <img src={imageURL(details.poster_path)} alt="" />
                    </div>
                    <div className={styles.about_show}>
                        <h1>{details.name}&nbsp;{`(${releaseYear(details.first_air_date)})`}</h1>

                        <div>
                            <button onClick={() => dispatch(showYoutubePlayer())}>Watch trailer</button>
                        </div>
                        
                        <h3><i>{details.tagline}</i></h3>
                        <p>{details.overview}</p>
                    </div>

                </div>

                {playerState && details && <YoutubePlayer data={details} />}
            </section>
        </>
    );
}

export default TvShowDetails;