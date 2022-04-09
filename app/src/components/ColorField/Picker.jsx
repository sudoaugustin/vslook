import Menu from './Menu';
import { useState } from 'react';
import { colord } from 'colord';
import { SelectorIcon } from '@heroicons/react/solid';
import { RgbaColorPicker, HexColorInput } from 'react-colorful';

const inputs = {
  hex: ['hex', 'a'],
  rgb: ['r', 'g', 'b', 'a'],
  hsl: ['h', 's', 'l', 'a'],
};

export default ({ value, onChange }) => {
  const colors = getColors(value);
  const [format, setFormat] = useState('rgb');
  const color = colors[format];

  const handleChange = ({ a, ...values }) => {
    const Colord = colord(values.hex || values).alpha(a);
    onChange(Colord.toHex());
  };

  const handleFormatChange = () => {
    const formats = Object.keys(inputs);
    const curIndex = formats.findIndex(_format => _format === format);
    const newIndex = curIndex < formats.length - 1 ? curIndex + 1 : 0;
    setFormat(formats[newIndex]);
  };

  return (
    <Menu
      trigger={<i style={{ background: value }} className='block h-full w-full' />}
      classes={{
        trigger: 'bg-pattern-rectangle h-6 flex-1 rounded-l-md overflow-hidden radix-peer',
        content: 'w-60 p-2',
      }}
    >
      {() => (
        <>
          <RgbaColorPicker color={colors.rgb} onChange={handleChange} />
          <section className='flex items-center pt-3'>
            <div className='flex space-x-1.5'>
              {inputs[format].map(name => {
                const isHex = name === 'hex';
                const Tag = isHex ? HexColorInput : 'input';
                const props = { [isHex ? 'color' : 'value']: color[name], type: isHex ? 'text' : 'number' };
                return (
                  <fieldset className='text-center' key={name}>
                    <Tag
                      id={name}
                      className='w-full rounded-md border border-gray-200 bg-gray-100 p-1 text-center text-sm font-medium text-gray-700 ring-orange-200 duration-200 focus:border-orange-300 focus:ring-[3px]'
                      onChange={e => handleChange({ ...color, [name]: formatInput(e?.target?.value || e, name) })}
                      {...props}
                    />
                    <label htmlFor={name} className='text-xs font-medium uppercase text-gray-500'>
                      {name}
                    </label>
                  </fieldset>
                );
              })}
            </div>
            <i
              className='cursor-pointer pl-2 text-gray-400 duration-200 hover:text-gray-700'
              onClick={handleFormatChange}
            >
              <SelectorIcon className='h-5' />
            </i>
          </section>
        </>
      )}
    </Menu>
  );
};

function getColors(value) {
  const Colord = colord(value);
  return {
    rgb: Colord.toRgb(),
    hsl: Colord.toHsl(),
    hex: { hex: Colord.toHex(), a: Colord.alpha() },
  };
}

function formatInput(value, name) {
  switch (name) {
    // case 'hex':
    //   return value.substring(0, 7);

    case 'a':
      value = parseFloat(value);
      return 0 <= value && value <= 1 ? value : 1;

    case 'h':
      value = parseInt(value);
      return 0 <= value && value <= 359 ? value : 359;

    case 's':
    case 'l':
      value = parseInt(value);
      return 0 <= value && value <= 100 ? value : 100;

    case 'r':
    case 'g':
    case 'b':
      value = parseInt(value);
      return 0 <= value && value <= 255 ? value : 255;

    default:
      return value;
  }
}
