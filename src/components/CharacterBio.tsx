interface Props {
  className?: string;
  gender: string;
  name: string;
  origin: string;
  species: string;
  status: string;
}

function CharacterBio({ className, gender, name, origin, species, status, }: Props) {
  return (
    <div
      className={`CharacterBio ${className}`}
    >
      <h1 className="font-sans text-xl font-bold mb-4">
        { name }
      </h1>
      <p className="flex gap-x-2 font-medium text-sm mb-2 pb-4 border-b">
        <span className="text-slate-500">
          статус:
        </span>
        { status }
      </p>
      <p className="flex gap-x-2 font-medium text-sm mb-2 pb-4 border-b">
        <span className="text-slate-500">
          вид:
        </span>
        { species }
      </p>
      <p className="flex gap-x-2 font-medium text-sm mb-2 pb-4 border-b">
        <span className="text-slate-500">
          пол:
        </span>
        { gender }
      </p>
      <p className="flex gap-x-2 font-medium text-sm">
        <span className="text-slate-500">
          место рождения:
        </span>
        { origin }
      </p>
    </div>
  );
}

export default CharacterBio;