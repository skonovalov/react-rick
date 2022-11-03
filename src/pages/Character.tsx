import { useEffect, useState } from 'react';
import { getCharacter } from '../api/characters';
import { Character } from '../types/characters';
import { useParams } from 'react-router-dom';
import CharacterBio from '../components/CharacterBio';
import CharacterImage from '../components/CharacterImage';

const initialValue = {} as Character;

function CharacterPage() {
  const [character, setCharacter] = useState(initialValue);
  const { id = '' } = useParams();

  useEffect(() => {
    (async () => {
      const character = await getCharacter(id);
      
      setCharacter(character)
    })();
  }, []);

  return (
    <div className="CharactersPage grid grid-cols-3">
      <CharacterImage
        className="bg-white border border-slate-200 rounded-lg p-4"
        alt={character.name}
        src={character.image}
      />
      <CharacterBio
        className="bg-white border border-slate-200 rounded-lg p-4 ml-4 col-span-2"
        name={character.name}
        species={character.species}
        status={character.status}
        gender={character.gender}
        origin={character.origin?.name || ''}
      />
    </div>
  );
}

export default CharacterPage;