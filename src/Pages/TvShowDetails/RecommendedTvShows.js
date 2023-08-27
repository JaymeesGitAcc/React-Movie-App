import { useSelector } from "react-redux";
import { loadingRec, tvShowsRec, recError } from "../../features/tvShowDetailsSlice";
import { Link } from "react-router-dom";

const RecommendedTvShows = () => {

    const data = useSelector(tvShowsRec);
    const loading = useSelector(loadingRec);
    const error = useSelector(recError);

    function imageURL(imageID) {
        let url = '';
        if (imageID) {
            url = `http://image.tmdb.org/t/p/w300/${imageID}`
        }
        return url;
    }

    if (loading)
        return <div>loading...</div>

    if (error)
        return <div>{error}</div>

    return (
        <section className="recommendations">
            {
                data.results && data.results.length > 0 &&
                <div className="recommendations_container">
                    <h1 className="rec_heading">Recommendations</h1>
                    <div className="row">
                        {
                            data.results.map(item => {
                                return <Link to={`/${item.media_type}/${item.id}`} key={item.id}>
                                    <article className="recArticle">
                                        <div className="image_box">
                                            <img src={imageURL(item.backdrop_path)} alt={item.title} />
                                        </div>

                                        <div className="recArticle_text">
                                            <p className="text_small">{item.name}</p>
                                        </div>
                                    </article>
                                </Link>
                            })
                        }
                    </div>
                </div>

            }
        </section>
    );
}
export default RecommendedTvShows;