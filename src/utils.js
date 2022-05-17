import { v4 as uuidv4 } from 'uuid';

function chillHop() {
	return [
		{
			name: 'Lose Her Way',
			artist: 'C Y G N',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg',
			id: uuidv4(),
			active: true,
			color: ['#317346', '#228654'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=31589',
		},
		{
			name: 'Timelapse',
			artist: 'Kissamilé',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/03/7a886841c0f684c40ae9a6d1abd0c30f72269977-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#BF314D', '#DCD0B7'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=32885',
		},
		{
			name: 'Kokon',
			artist: 'Plusma, Guillaume Muschalle',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#FBDCA5', '#D49873'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=28895',
		},
		{
			name: 'Glow',
			artist: 'Tesk',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/03/efb56e836d82d26e857b341a951f0337ace66b8b-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#D9CCB1', '#DBCFB3'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=32888',
		},
		{
			name: 'Escape World',
			artist: 'C Y G N',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#F0D6C5', '#BBBEC2'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=28957',
		},
		{
			name: 'Repent',
			artist: 'mommy',
			cover:
				'https://chillhop.com/wp-content/uploads/2022/01/c0d38a1ac4ad0614301ecc77e10767b1c4f34a53-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#A9A99A', '#B8B09B'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=28895',
		},
		{
			name: 'Waiting',
			artist: 'Parkbench Epiphany',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#FCC3C5', '#A299A1'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=27504',
		},
		{
			name: 'soulsounds',
			artist: 'Parkbench Epiphany',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg',
			id: uuidv4(),
			active: false,
			color: ['#FCC3C5', '#A299A1'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=27500',
		},
	];
}

export default chillHop;
