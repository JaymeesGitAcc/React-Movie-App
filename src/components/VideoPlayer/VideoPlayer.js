import { useDispatch, useSelector } from 'react-redux';
import styles from './VideoPlayer.module.css';
import { hideVideoPlayer } from '../../features/videoPlayerSlice';
// import { videos } from '../../features/movieDetailsSlice';
// import { useEffect } from 'react';

const VideoPlayer = () => {

    const dispatch = useDispatch();

    // const videosArray = useSelector(videos);

    // console.log(videosArray);

    return (
        <div className={styles.videoPlayer_container}>
            <header className={styles.videoPlayer_header}>
                <h3>Video Player</h3>
                <button onClick={() => dispatch(hideVideoPlayer(''))}>Close</button>
            </header>
            <iframe src="" title='video' allowFullScreen></iframe>
        </div>
    );
}

export default VideoPlayer;