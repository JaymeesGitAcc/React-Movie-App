import { useDispatch, useSelector } from 'react-redux';
import styles from './VideoPlayer.module.css';
import {
    hideVideoPlayer,
    displayState,
    videoID,
} from '../../features/videoPlayerSlice';
// import { videos } from '../../features/movieDetailsSlice';
import YouTube from 'react-youtube';

const VideoPlayer = () => {

    const dispatch = useDispatch();
    const state = useSelector(displayState);
    const video_ID = useSelector(videoID);

    // const videosList = useSelector(videos);

    // useEffect(() => {
    //     if (state) {
    //         const { results } = videosList;
    //         const trailers = results.filter(item => item.type === 'Trailer');
    //         const URL = `https://www.youtube.com/embed/${trailers[0].key}`;
    //         dispatch(setURL(URL));
    //         console.log('videoPlayer ran');
    //     }
    // }, [state, dispatch, videosList]);

    // const getMediaID = () => {
    //     const { results } = videosList;
    //     const trailers = results.filter(item => item.name === 'Official Trailer');
    //     const trailerID = trailers[0].key;
    //     return trailerID ? trailerID : results[0].key;
    // }

    return (
        <div className={`${styles.videoPlayer_container} ${state ? styles.show : ''}`}>
            <header className={styles.videoPlayer_header}>
                <h3>Video Player</h3>
                <button onClick={() => dispatch(hideVideoPlayer())}>Close</button>
            </header>
            {state && video_ID ?
                <YouTube
                    className={styles.videoPlayer}
                    videoId={video_ID}
                    opts={{
                        height: '100%',
                        width: '100%',
                        playerVars: {
                            autoplay: 1,
                        }
                    }}
                />
                : null
            }

        </div>
    );
}

export default VideoPlayer;