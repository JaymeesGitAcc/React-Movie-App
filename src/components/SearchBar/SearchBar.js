import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery)
            navigate(`/results/${searchQuery}`);
    }

    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder='search movie, tv series, person...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <input
                    type="submit"
                    value="Search"
                    className={styles.submit_btn}
                />
            </form>
        </div>
    );
}

export default SearchBar;