// import { useEffect, useState } from 'react';
// import { getCharacters } from '../api/characters';
// import { CharactersResult, Character } from '../types/characters';
import CharacterImage from '../components/CharacterImage';

// const initialValue: CharactersResult = {};

function CharacterPage() {
  // const [characters, setCharacters] = useState(initialValue);

  // useEffect(() => {
  //   (async () => {
  //     const items = await getCharacters()

  //     setCharacters(items)
  //   })();
  // }, []);

  return (
    <div className="CharactersPage grid grid-cols-3">
      <CharacterImage
        className="bg-white border border-slate-200 rounded-lg p-4"
      />
      {/* {characters.results?.map((item: Character) => (
        <CharactersItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          species={item.species}
        />
      ))} */}
    </div>
  );
}

export default CharacterPage;