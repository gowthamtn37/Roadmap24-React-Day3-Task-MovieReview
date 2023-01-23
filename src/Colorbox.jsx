import React from 'react';

export function Colorbox({ Colorbox }) {
  const sty = {
    backgroundColor: Colorbox,
    height: '40px',
    width: '500px'
  };

  return (
    <div>
      <br />
      <div style={sty}></div>
    </div>
  );
}
