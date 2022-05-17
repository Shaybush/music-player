import React, { useState, useEffect } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Songs from './components/Songs';
import Library from './components/Library';
import data from './utils';
function App() {
	//state
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[2]);
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div className="App">
			<Songs currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
			/>
			<Library songs={songs} setCurrentSong={setCurrentSong} />
		</div>
	);
}

export default App;
