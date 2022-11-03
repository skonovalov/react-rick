interface Props {
  alt: string;
  className?: string;
  src: string;
}

function CharacterImage({ alt = '', className, src = '' }: Props) {
  return (
    <div
      className={`CharacterImage ${className}`}
    >
      <img
        className="rounded-lg"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
}

export default CharacterImage;