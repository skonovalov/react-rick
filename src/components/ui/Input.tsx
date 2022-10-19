import React, { useState } from "react";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
}

function Input({ className, label, onChange, placeholder, value = '' }: Props) {
  const [localValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(1);
    onChange(event.target.value);
  };

  return (
    <div className={`input flex flex-col gap-y-1 ${className}`}>
      <label>{ label }</label>
      <input
        type="text"
        placeholder={placeholder}
        value={localValue}
        className="rounded-md border-solid border border-black/10 px-3 py-2 w-full"
        onChange={handleChange}
      />
      <div className="errors"></div>
    </div>
  );
}

export default Input;