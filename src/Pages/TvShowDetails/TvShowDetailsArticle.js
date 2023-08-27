import { useDispatch } from "react-redux";
import { showYoutubePlayer } from "../../features/youtubePlayerSlice";
import Facts from "../../components/Facts/Facts";

const TvShowDetailsArticle = ({ details }) => {

    const dispatch = useDispatch();

    const releaseYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    }

    const imageURL = (path) => {
        const url = `https://www.themoviedb.org/t/p/w300/${path}`;
        return url;
    }

    return (
        <article className="details">

            <div className="image_container">
                <img
                    src={imageURL(details.poster_path)}
                    alt={details.name}
                />
            </div>

            <div className="content">
                <h1 className="main_title">
                    {details.name}&nbsp;
                    <span className="release_year">{`(${releaseYear(details.first_air_date)})`}</span>
                </h1>

                <Facts details={details} />

                <div className="button_container">
                    <button
                        className="play_button"
                        onClick={() => dispatch(showYoutubePlayer())}
                    >
                        <span className="play_icon"></span>
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

export default TvShowDetailsArticle;