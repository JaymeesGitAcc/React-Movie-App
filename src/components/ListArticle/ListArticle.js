import { Link } from "react-router-dom";

const ListArticle = ({ item }) => {

    function imageUrl(imageId) {
        if (imageId)
            return `http://image.tmdb.org/t/p/w300/${imageId}`;
        return null;
    }

    function getOverview(content) {
        if (content) {
            const maxWords = 15;
            const textContent = content.trim();
            const words = textContent.split(' ');

            if (words.length > maxWords) {
                const limitedWords = words.slice(0, maxWords);
                const limitedText = limitedWords.join(' ');
                return `${limitedText}...`;
            }
        }
        return content;
    }

    function navigateToDetailsPage() {
        const media_type = item.title ? 'movie' : 'tv';
        const id = item.id;
        return `/${media_type}/${id}`;
    }

    function resolveDate() {
        const dateString = item.release_date ? item.release_date : item.first_air_date;
        const dateObj = new Date(dateString);
        const date = dateObj.getDay();
        const monthName = dateObj.toLocaleString('en-US', { month: 'short' });
        const year = dateObj.getFullYear();
        return `${date} ${monthName}, ${year}`;
    }

    return (
        <article className="listArticle">
            <Link to={navigateToDetailsPage()}>
                <div className="listArticle_image">
                    <img
                        className="image"
                        src={imageUrl(item.poster_path)}
                        alt={item.title ? item.title : item.name} />
                </div>
            </Link>

            <div className="listArticle_info">
                <Link to={navigateToDetailsPage()}>
                    <p className="text_small listArticle_title">{item.title ? item.title : item.name}</p>
                </Link>
                <p className="listArticle_date text_small">{resolveDate()}</p>

                <div className="listArticle_overview">
                    <p>
                        {getOverview(item.overview)}
                        <Link to={navigateToDetailsPage()} className="know_more">know more</Link>
                    </p>
                </div>
            </div>
        </article >
    );
}

export default ListArticle;