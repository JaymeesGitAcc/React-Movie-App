import { useDispatch } from 'react-redux';
import styles from './YoutubePlayer.module.css';
import YouTube from 'react-youtube';
import { hideVideoPlayer } from '../../features/movieDetailsSlice';

const YoutubePlayer = (videoID) => {

    const dispatch = useDispatch();
    // const [videoID, setVideoID] = useState(null);
    // const video_ID = useSelector(videoID);
    // useEffect(() => {
    //     if(videosObj) {
    //         const { results } = videosObj;
    //         const trailer = results.filter(item => item.name === 'Official Trailer');
    //         const trailerID = trailer.length ? trailer[0].key
    //             : (results.length ? results[0].key
    //                 : null);
    //         setVideoID(trailerID);
    //     }
    // }, [])


    return (
        <div className={styles.youtubePlayer_container}>

            <header className={styles.youtubePlayer_header}>
                <div className={styles.title_containet}>
                    <h1>Video Player</h1>
                </div>
                <div className={styles.close_btn}>
                    <button
                        onClick={() => dispatch(hideVideoPlayer())}
                    >Close</button>
                </div>
            </header>

            <YouTube
                className={styles.youtubePlayer}
                videoId={videoID}
                opts={
                    {
                        height: '100%',
                        width: '100%',
                        playerVars: {
                            autoplay: 1,
                        }
                    }
                }
            />

        </div>
    );
}

export default YoutubePlayer;