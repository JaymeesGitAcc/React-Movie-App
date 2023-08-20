import TrendingMovies from "../TrendingMovies/TrendingMovies";
import TrendingShows from "../TrendingShows/TrendingShows";
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