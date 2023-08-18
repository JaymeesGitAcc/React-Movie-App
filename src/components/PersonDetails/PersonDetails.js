import { useSelector, useDispatch } from 'react-redux';
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

    function resolveGender(num) {
        switch (num) {
            case 1: return 'Female';
            case 2: return 'Male';
            default: return 'Not Specified';
        }
    }

    if (loading)
        return <div>Loading...</div>

    if (error)
        return <div>{error}</div>

    return (
        <>
            <Header />

            <section className={styles.details_section}>
                <div className={styles.info_container}>

                    <div className={styles.image_container}>
                        <img src={imageURL(data.profile_path)} alt="" />
                    </div>

                    <article className={styles.about_person}>
                        <h1 className={styles.person_name}>{data.name}</h1>

                        <div className={styles.biography}>
                            <h3>Biography</h3>
                            <p>{data.biography}</p>
                        </div>

                        <div className={styles.personal_info}>
                            <h3 className={styles.personal_info_head}>Personal Info</h3>

                            <div className={styles.lists_container}>

                                <ul>
                                    <li>
                                        <h4>Known For</h4>
                                        <p>{data.known_for_department}</p>
                                    </li>
                                    <li>
                                        <h4>Gender</h4>
                                        <p>{resolveGender(data.gender)}</p>
                                    </li>

                                    <li>
                                        <h4>Date of Birth</h4>
                                        <p>{data.birthday}</p>
                                    </li>

                                    {
                                        data.deathday &&
                                        <li>
                                            <h4>Date of Death</h4>
                                            <p>{data.deathday}</p>
                                        </li>
                                    }
                                    <li>
                                        <h4>Place of Birth</h4>
                                        <p>{data.place_of_birth}</p>
                                    </li>

                                </ul>

                                {
                                    data.also_known_as &&
                                    <ul>
                                        <h4>Also Known As</h4>
                                        {
                                            data.also_known_as.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })
                                        }
                                    </ul>
                                }
                            </div>


                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}

export default PersonDetails;