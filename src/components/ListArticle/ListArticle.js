const ListArticle = ({item}) => {

    function imageUrl(imageId) {
        if(imageId)
            return `http://image.tmdb.org/t/p/w300/${imageId}`;
        return null;
    }

    return ( 
        <article className="listArticle">
            <div className="listArticle_image">
                <img src={imageUrl(item.poster_path)} alt={item.title ? item.title : item.name} />
            </div>

            <div>
                <p className="text_small">{item.title ? item.title : item.name}</p>
            </div>
        </article>
     );
}
 
export default ListArticle;