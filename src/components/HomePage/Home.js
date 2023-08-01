import TrendingMovies from "../../features/trendingMovies/TrendingMovies/TrendingMovies";
import TrendingShows from "../../features/trendingTvShows/TrendingShows/TrendingShows";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
    return ( 
        <section>
            <SearchBar/>
            <TrendingMovies/>
            <TrendingShows/>
        </section>
     );
}

export default Home;