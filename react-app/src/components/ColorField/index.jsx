import { colord } from 'colord';
import { useRecoilState } from 'recoil';
import { useDebouncedCallback } from 'use-debounce';
import Picker from './Picker';
import Swatch from './Swatch';
import { postMessage } from '../../utils';
import { colorsState } from '../../states';

const ColorInput = ({ name, label }) => {
  console.log(`${name} Rendered`);

  const [color, setColor] = useRecoilState(colorsState(name));

  const handleChange = value => {
    setColor(value);
    handleChangeEffect(value);
  };

  const handleChangeEffect = useDebouncedCallback(value => {
    if (colord(value).isValid()) {
      postMessage({ type: 'SET_COLOR', payload: { name, value } });
    }
  }, 200);

  return (
    <fieldset>
      <label className='mb-1 block text-xs font-medium text-gray-400'>{label}</label>
      <div className='relative flex divide-x rounded-md shadow-sm'>
        <Picker value={color} onChange={handleChange} />
        <Swatch value={color} onChange={handleChange} />
        <span className='absolute inset-0 -z-10 rounded-md ring ring-transparent ring-offset-1 ring-offset-gray-200 duration-200 radix-peer-open:ring-orange-200 radix-peer-open:ring-offset-orange-400' />
      </div>
    </fieldset>
  );
};

export default ColorInput;
