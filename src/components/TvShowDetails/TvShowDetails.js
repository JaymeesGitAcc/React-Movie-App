import { useParams, Link } from 'react-router-dom';
import styles from './TvShowDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showDetailsAsync } from '../../features/tvShowDetailsSlice';

const TvShowDetails = () => {
    const { id } = useParams();
    const {details, loading, error} = useSelector(state => state.showDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showDetailsAsync(id));
    } ,[dispatch]);

    if(loading)
        return <div>loading...</div>

    if(error)
        return <div>{error}</div>

    return ( 
        <section>
            <Link to="/">Go back to Home...</Link>
            <h1>Tv show id: {id}</h1>
            <div className={styles.details}>
                <div className={styles.image_container}>
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`} alt="" />
                </div>
                <div className={styles.about_show}>
                    <h1>{details.name}</h1>
                    <h3><i>{details.tagline}</i></h3>
                    <p>{details.overview}</p>
                </div>
            </div>
        </section>
     );
}
 
export default TvShowDetails;