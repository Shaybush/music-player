import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faPause,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //Ref this useRef state use for audio to take the audio from the jsx and import the reperance here
  //UseEffect
  //use that to run every time currentSong changed
  useEffect(() =>{
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //set the song every time the current song had update
  }, [currentSong])
  //event handles
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(! isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(! isPlaying);
    }
  };
  // make the time easy to read from stack-overflow
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    //available while the song playing to drag
    audioRef.current.currentTime = e.target.value;
    // set the current time in the list
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  //button direction forward or back
  const skipTrackHandler =(dir) =>{
    //find the index of the song
    let currentIndex =songs.findIndex((song) => song.id ===currentSong.id);
    if(dir === "skip-back")
    {
      if((currentIndex -1) % songs.length === -1){
        setCurrentSong(songs[songs.length-1])
        //The return make sure the second setCurrentSong we'll not append
        return;
      }
      setCurrentSong(songs[(currentIndex - 1)% songs.length])
    }
    //skip forward
    else{
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    }
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          title={getTime(songInfo.currentTime)}
          min={0}
          max={songInfo.duration || 0}
          onChange={dragHandler}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} size="2x" className="skip-back" icon={faAngleLeft} />
        {
          <FontAwesomeIcon
            size="2x"
            onClick={playSongHandler}
            className="play"
            icon={isPlaying ? faPause : faPlay}
          />
        }
        <FontAwesomeIcon
        onClick={() => skipTrackHandler("skip-forward")}
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
      {/* working with the useRef פה הוא מקבל את ההפניה */}
    </div>
  );
};
export default Player;
