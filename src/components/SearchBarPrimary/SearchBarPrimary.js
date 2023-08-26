import { useState } from 'react';
import styles from './SearchBarPrimary.module.css';
import { useNavigate } from 'react-router-dom';

const SearchBarPrimary = () => {

    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue)
            navigate(`/results/${inputValue}`);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return ( 
        <div>
            <form className={styles.searchForm}
                onSubmit={handleSubmit}>
                <input 
                    className={styles.inputField}
                    type="text" 
                    placeholder="search movies, tv shows..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className={styles.searchBtn}>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBarPrimary;