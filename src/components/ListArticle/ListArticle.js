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

    function resolveMediaType(item) {
        const media_type = item.title ? 'movie' : 'tv';
        const id = item.id;
        return `/${media_type}/${id}`;
    }

    function resolveDate(item) {
        const dateString = item.release_date ? item.release_date : item.first_air_date;
        const dateObj = new Date(dateString);
        const date = dateObj.getDay();
        const monthName = dateObj.toLocaleString('en-US', {month: 'short'});
        const year = dateObj.getFullYear();
        return `${date} ${monthName}, ${year}`;
    }

    return (
        <article className="listArticle">
            <div className="listArticle_image">
                <Link to={resolveMediaType(item)}>
                    <img src={imageUrl(item.poster_path)} alt={item.title ? item.title : item.name} />
                </Link>
            </div>

            <div className="listArticle_info">
                <p className="text_small listArticle_title">{item.title ? item.title : item.name}</p>

                <p className="listArticle_date text_small">{resolveDate(item)}</p>

                <div className="listArticle_overview">
                    <p>
                        {getOverview(item.overview)}
                        <Link to={resolveMediaType(item)}>know more</Link>
                    </p>
                </div>
            </div>
        </article >
    );
}

export default ListArticle;