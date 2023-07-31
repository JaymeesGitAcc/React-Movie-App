import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery)
            console.log(searchQuery);
        setSearchQuery('');
    }

    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder='search movie, tv series...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <input
                    type="submit"
                    value="Submit"
                    className={styles.submit_btn}
                />
            </form>
        </div>
    );
}

export default SearchBar;