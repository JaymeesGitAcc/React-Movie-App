import TrendingMovies from "../../features/trendingMovies/TrendingMovies/TrendingMovies";
import TrendingShows from "../../features/trendingTvShows/TrendingShows/TrendingShows";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
    return ( 
        <>
            <Header/>
            <Banner/>
            <TrendingMovies/>
            <TrendingShows/>
        </>
     );
}

export default Home;