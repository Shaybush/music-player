import React from "react";
const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async() => {
    //return array
    //const selectedSong = songs.filter(stateSong => stateSong.id === song.id);

    //because its just one element in array we choose the first place
    //setCurrentSong(selectedSong[0]);

    //better way
    await setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
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
    //The song must play while we setup the current song
    //check if the song even playing and if its playing the second if fix the delay thing
    if(isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? `selected` : ""}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
