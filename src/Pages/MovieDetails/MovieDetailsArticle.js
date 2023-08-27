import { useDispatch } from "react-redux";
import { showYoutubePlayer } from "../../features/youtubePlayerSlice";
import Facts from "../../components/Facts/Facts";

const MovieDetailsArticle = ({details}) => {

    const dispatch = useDispatch();

    function releaseYear(dateValue) {
        const date = new Date(dateValue);
        return date.getFullYear();
    }

    function imageURL(path) {
        let url;
        if (path)
            url = `https://www.themoviedb.org/t/p/w300/${path}`;
        return url;
    }

    return (
        <article className="details" >
            <div className="image_container">
                <img src={imageURL(details.poster_path)} alt="" />
            </div>
            <div className="content">
                <h1 className="main_title">{details.title}&nbsp;
                    <span className="release_year">{`(${releaseYear(details.release_date)})`}</span>
                </h1>

                <Facts details={details}/>

                <div className="button_container">
                    <button
                        className="play_button"
                        onClick={() => dispatch(showYoutubePlayer())}
                    >
                        <div className="play_icon"></div>
                        Play Trailer</button>
                </div>

                <p className="tagline"><i>{details.tagline}</i></p>

                <div className="overview_container">
                    <h3>Overview</h3>
                    <p>{details.overview}</p>
                </div>
            </div>
        </article>
    );
}

export default MovieDetailsArticle;