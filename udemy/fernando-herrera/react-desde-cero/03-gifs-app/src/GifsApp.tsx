import { mockGifs, type Gif } from "./gifs.mock";
import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
    const mockGifs: Gif[] = []
    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />

            <SearchBar placeholder="Buscar gifs" />

            <PreviousSearches />

            <GifsList gifs={mockGifs} />
        </>
    );
}
