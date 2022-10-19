import React from 'react';

interface Props {
  children: React.ReactNode
}

function Content({ children }: Props) {
  return (
    <div className="content">
      { children }
    </div>
  );
}

export default Content;