import styles from './Facts.module.css';

const Facts = ({ details }) => {

    const getReleaseDate = (release_date) => {
        const dateObject = new Date(release_date);
        const date = dateObject.getDate();
        const month = dateObject.getMonth();
        const year = dateObject.getFullYear();
        return `${date}/${month}/${year}`;
    }

    const getRunTime = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const runtime = `${hours}h ${minutes}m`;
        return runtime;
    }

    return (
        <div className={styles.facts}>
            {
                details.release_date &&
                <div className={styles.releaseDate}>
                    <p>{getReleaseDate(details.release_date)}</p>
                </div>
            }

            {
                details.genres &&
                <ul className={styles.genres}>
                    {
                        details.genres.map(item => {
                            return <li
                                className={styles.listItem}
                                key={item.id}>
                                <p>
                                    {item.name}
                                </p>
                            </li>
                        })
                    }
                </ul>
            }

            {
                details.runtime &&
                <div>{getRunTime(details.runtime)}</div>
            }
        </div>
    );
}

export default Facts;