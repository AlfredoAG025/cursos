interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    autor: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        autor: 'Ed Sheeran',
        year: 2015,
    }
};

const song = 'New Song'
const { song: anotherSong, details: { autor }, details: { year } } = audioPlayer;

// console.log('Song: ', song);
// console.log('Song: ', anotherSong);
// console.log('Autor: ',  autor);
// console.log('Year: ', year);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks, milk = 'Not found'] = dbz;

console.log('Personaje 3:', milk)

export { };