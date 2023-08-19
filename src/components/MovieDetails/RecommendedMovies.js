import { useSelector } from "react-redux";
import { moviesRec } from "../../features/movieDetailsSlice";

const RecommendedMovies = () => {

    const data = useSelector(moviesRec);

    return (
        <section className="recommendations">
            <h1>Recommendations</h1>
            {
                data.results ?
                    <div className="recommendations_container">
                        {
                            data.results.map(item => {
                                return <article key={item.id} className="recArticle">
                                    <div className="image_box">
                                        <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} alt={item.title} />
                                    </div>

                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                </article>
                            })
                        }
                    </div> :
                    <div>No Recommendations</div>

            }
        </section>
    );
}
export default RecommendedMovies;