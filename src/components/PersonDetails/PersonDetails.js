import { useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './PersonDetails.module.css';
import { errorMessage, loader, personData, personDetailsAsync } from '../../features/personDetailsSlice';
import { useEffect } from 'react';

const PersonDetails = () => {

    const { personID } = useParams();

    const loading = useSelector(loader);
    const error = useSelector(errorMessage);
    const data = useSelector(personData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(personDetailsAsync(personID));
    }, [dispatch, personID]);

    function imageURL(path) {
        let url;
        if (path)
            url = `https://www.themoviedb.org/t/p/w300/${path}`;
        return url;
    }

    if(loading)
        return <div>Loading...</div>
    
    if(error)
        return <div>{error}</div>

    return ( 
        <>
            <Header/>
            <p>Person ID: {personID}</p>

            <section className={styles.details_section}>
                <div className={styles.flex}>

                    <div className={styles.image_container}>
                        <img src={imageURL(data.profile_path)} alt="" />
                    </div>

                    <article className={styles.about_person}>
                        <h1>{data.name}</h1>
                        <p>{data.biography}</p>
                    </article>

                </div>
            </section>
        </>
     );
}
 
export default PersonDetails;