import React from 'react';
import { useState } from 'react';
import { Colorbox } from './Colorbox';

export function Colorgame() {

  const [Color, setColor] = useState("orange");

  const [Colorlist, setColorlist] = useState(["crimson",]);

  const Style = {
    background: Color,
  };

  return (
    <>
      <input style={Style} type='text' onChange={(eve) => setColor(eve.target.value)}
        value={Color} />
      <button onClick={() => setColorlist([...Colorlist, Color])}>Add Me</button>

      {Colorlist.map((clr) => <Colorbox Colorbox={clr} />)}
    </>
  );
}
