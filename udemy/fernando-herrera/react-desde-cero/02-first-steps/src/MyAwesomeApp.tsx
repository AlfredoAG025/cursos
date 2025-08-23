import type { CSSProperties } from "react";

const firstName = 'Freddy';
const lastName = 'Arroyo';

const favoriteGames = ['Hollow Knight', 'Metroid'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada',
}

const myStyles: CSSProperties = {
    backgroundColor: '#bababa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}
export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}