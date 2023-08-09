import { useDispatch, useSelector } from 'react-redux';
import styles from './VideoPlayer.module.css';
import {
    hideVideoPlayer,
    displayState,
    source
} from '../../features/videoPlayerSlice';

const VideoPlayer = () => {

    const dispatch = useDispatch();
    const state = useSelector(displayState);
    const url = useSelector(source);

    return (
        <div className={`${styles.videoPlayer_container} ${state ? styles.show : ''}`}>
            <header className={styles.videoPlayer_header}>
                <h3>Video Player</h3>
                <button onClick={() => dispatch(hideVideoPlayer())}>Close</button>
            </header>
            <iframe title='Youtube player' src={url}>
            </iframe>
        </div>
    );
}

export default VideoPlayer;