interface Props {
  children: string;
  className?: string;
  onClick: () => void;
  type: 'button' | 'submit';
}

function Button({ className, children, onClick, type = 'button' }: Props) {
  return (
    <button
      type={type}
      className={`button rounded-sm bg-indigo-500 py-1.5 px-3 text-white ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

export default Button;