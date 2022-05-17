import React from 'react';
const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
	const songSelectHandler = () => {
		//return array
		//const selectedSong = songs.filter(stateSong => stateSong.id === song.id);

		//because its just one element in array we choose the first place
		//setCurrentSong(selectedSong[0]);

		//better way
		setCurrentSong(song);
	};
	return (
		<div onClick={songSelectHandler} className="library-song">
			<img alt={song.name} src={song.cover} />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};
export default LibrarySong;
