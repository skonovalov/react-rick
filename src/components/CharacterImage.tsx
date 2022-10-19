interface Props {
  className?: string;
}

function CharacterImage({ className }: Props) {
  return (
    <div
      className={`CharacterImage ${className}`}
    >
      CharacterImage
    </div>
  );
}

export default CharacterImage;