import { useEffect, useState } from 'react';
import { getCharacters } from '../api/characters';
import { CharactersResult, Character } from '../types/characters';
import CharactersItem from '../components/CharactersItem';

const initialValue: CharactersResult = {};

function CharactersPage() {
  const [characters, setCharacters] = useState(initialValue);

  useEffect(() => {
    (async () => {
      const items = await getCharacters()

      setCharacters(items)
    })();
  }, []);

  return (
    <div className="CharactersPage bg-white border border-slate-200 rounded-lg p-4">
      {characters.results?.map((item: Character) => (
        <CharactersItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          species={item.species}
        />
      ))}
    </div>
  );
}

export default CharactersPage;