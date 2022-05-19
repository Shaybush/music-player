import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Songs from "./components/Songs";
import Library from "./components/Library";
import NavBar from "./components/NavBar"
import data from "./data";
function App() {
  //state
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  return (
    <div className="App">
      <NavBar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Songs currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus} 
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
