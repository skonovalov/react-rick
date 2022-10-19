import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
}

function Form({ children, className }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className={`${className} form`}
      onSubmit={handleSubmit}
    >
      { children }
    </form>
  );
}

export default Form;