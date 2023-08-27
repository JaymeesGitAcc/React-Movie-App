import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import TrendingShows from "../../components/TrendingShows/TrendingShows";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return ( 
        <>
            <Header/>
            <Banner/>
            <TrendingMovies/>
            <TrendingShows/>
            <Footer />
        </>
     );
}

export default Home;