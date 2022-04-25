import { SelectorIcon } from '@heroicons/react/solid';
import InputField from 'components/InputField';
import { HexColorInput } from 'react-colorful';

const inputs = { hex: ['hex', 'a'], rgb: ['r', 'g', 'b', 'a'], hsl: ['h', 's', 'l', 'a'] };
const formats = Object.keys(inputs);

export default ({ format, values, onChange, onFormatChange }) => {
  const handleFormatChange = () => {
    const curIndex = formats.findIndex(_format => _format === format);
    const newIndex = curIndex < formats.length - 1 ? curIndex + 1 : 0;
    onFormatChange(formats[newIndex]);
  };

  return (
    <section className='flex items-center py-2.5'>
      <div className='mr-2 flex space-x-2'>
        {inputs[format].map(name => {
          const isHex = name === 'hex';
          return (
            <InputField
              as={isHex && HexColorInput}
              key={name}
              name={name}
              type={!isHex && 'number'}
              className='flex-col-reverse items-center text-center'
              {...{ [isHex ? 'color' : 'value']: values[name] }}
              onChange={value => onChange({ ...values, [name]: formatColorInput(value, name) })}
            />
          );
        })}
      </div>
      <i
        className='pointer relative -top-2.5 text-gray-400 duration-100 hover:text-gray-700'
        onClick={handleFormatChange}
      >
        <SelectorIcon className='h-5' />
      </i>
    </section>
  );
};

function formatColorInput(value, name) {
  switch (name) {
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
