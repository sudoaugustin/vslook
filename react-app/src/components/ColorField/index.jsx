import { useState } from 'react';
import { useDebounce } from 'react-use';
import Picker from './Picker';
import Swatch from './Swatch';
import { postMessage } from '../../utils';

import { colord } from 'colord';

const ColorInput = ({ name, label }) => {
  const [color, setColor] = useState(window.$theme[name]);

  useDebounce(
    () => {
      const Colord = colord(color);
      const windowValue = window.$theme[name];
      // console.log(name, color, window.$theme[name]);
      if (color && (!windowValue || !Colord.isEqual(windowValue))) {
        // console.log(`!! ${name} change triggered`);
        postMessage({ type: 'SET_COLOR', payload: { name, value: color } });
      }
    },
    200,
    [color],
  );

  return (
    <fieldset>
      <label className='mb-1 block text-xs font-medium text-gray-400'>{label}</label>
      <div className='relative flex divide-x rounded-md shadow-sm'>
        <Picker value={color || '#00000000'} onChange={setColor} />
        <Swatch value={color || '#00000000'} onChange={setColor} />
        <span className='absolute inset-0 -z-10 rounded-md ring ring-transparent ring-offset-1 ring-offset-gray-200 duration-200 radix-peer-open:ring-orange-200 radix-peer-open:ring-offset-orange-400' />
      </div>
    </fieldset>
  );
};

export default ColorInput;
