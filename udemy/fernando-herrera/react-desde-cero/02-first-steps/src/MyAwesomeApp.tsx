const firstName = 'Freddy';
const lastName = 'Arroyo';

const favoriteGames = ['Hollow Knight', 'Metroid'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada',
}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p>{JSON.stringify(address)}</p>
        </>
    )
}