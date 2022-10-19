import { Link } from 'react-router-dom';

interface Props {
  id: number;
  image: string;
  name: string;
  species: string;
}

function CharactersItem({ id, image = '', name = '', species = '' }: Props) {
  return (
    <Link
      to={`/characters/${id}`}
      className="CharactersItem flex items-center p-4 border-b border-slate-200"
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full"
      />

      <div className="flex flex-col pl-4">
        <p className="pb-2 text-sky-700 hover:text-sky-900 font-bold text-sm">
          {name}
        </p>
        <p className="text-xs text-gray-500">
          {species}
        </p>
      </div>
    </Link>
  );
}

export default CharactersItem;
