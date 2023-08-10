import { useDispatch, useSelector } from 'react-redux';
import styles from './VideoPlayer.module.css';
import {
    hideVideoPlayer,
    displayState,
    source,
    setURL
} from '../../features/videoPlayerSlice';
import { videos } from '../../features/movieDetailsSlice';
import { useEffect } from 'react';

const VideoPlayer = () => {

    const dispatch = useDispatch();
    const state = useSelector(displayState);
    const url = useSelector(source);

    const videosList = useSelector(videos);

    useEffect(() => {
        if (state) {
            const { results } = videosList;
            const trailers = results.filter(item => item.type === 'Trailer');
            const URL = `https://www.youtube.com/embed/${trailers[0].key}`;
            dispatch(setURL(URL));
            console.log('videoPlayer ran');
        }
    }, [state, dispatch, videosList]);


    return (
        <div className={`${styles.videoPlayer_container} ${state ? styles.show : ''}`}>
            <header className={styles.videoPlayer_header}>
                <h3>Video Player</h3>
                <button onClick={() => dispatch(hideVideoPlayer())}>Close</button>
            </header>
            <iframe 
                src={url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share"
                allowFullScreen></iframe>
        </div>
    );
}

export default VideoPlayer;