import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faAngleLeft,
	faPause,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	//Ref this useRef state use for audio to take the audio from the jsx and import the reperance here
	const audioRef = useRef(null);
	//event handles
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};
	const getTime = time => {
		return (
			Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
		);
	};
	const dragHandler = e => {
		//available while the song playing to drag
		audioRef.current.currentTime = e.target.value;
		// set the current time in the list
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const timeUpdateHandler = e => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration });
	};
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					title={getTime(songInfo.currentTime)}
					min={0}
					onChange={dragHandler}
					max={songInfo.duration}
					value={songInfo.currentTime}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon size="2x" className="skip-back" icon={faAngleLeft} />
				{
					<FontAwesomeIcon
						size="2x"
						onClick={playSongHandler}
						className="play"
						icon={isPlaying ? faPause : faPlay}
					/>
				}
				<FontAwesomeIcon
					size="2x"
					className="skip-forward"
					icon={faAngleRight}
				/>
			</div>
			{/* working with the useRef פה הוא מקבל את ההפניה */}
			<audio
				onLoadedMetadata={timeUpdateHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	);
};
export default Player;
