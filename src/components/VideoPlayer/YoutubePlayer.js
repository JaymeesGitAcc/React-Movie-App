import { useDispatch, useSelector } from 'react-redux';
import styles from './YoutubePlayer.module.css';
import YouTube from 'react-youtube';
import { hideYoutubePlayer, setYoutubeID } from '../../features/youtubePlayerSlice';
import { useEffect } from 'react';

const YoutubePlayer = ({ data }) => {

    const dispatch = useDispatch();

    const { youtubeID } = useSelector(state => state.youtubePlayer);

    useEffect(() => {
        const { results } = data.videos;
        const officialTrailer = results.filter(item => item.name === 'Official Trailer');
        const trailers = results.filter(item => item.type === 'Trailer');
        const trailerID = officialTrailer.length ? officialTrailer[0].key
            : (trailers.length ? trailers[0].key
                : null);
        console.log(trailerID);
        dispatch(setYoutubeID(trailerID));

        return () => { 
            dispatch(setYoutubeID(''));
        }
    }, [dispatch]);

    return (
        <div className={styles.youtubePlayer_container}>

            <header className={styles.youtubePlayer_header}>
                <div className={styles.title_containet}>
                    <h1>Video Player</h1>
                </div>
                <div className={styles.close_btn}>
                    <button
                        onClick={() => dispatch(hideYoutubePlayer())}
                    >Close</button>
                </div>
            </header>

            <YouTube
                className={styles.youtubePlayer}
                videoId={youtubeID}
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