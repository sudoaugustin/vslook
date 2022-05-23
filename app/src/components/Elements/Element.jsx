import { ChevronUpIcon, EyeIcon } from '@heroicons/react/solid';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import ColorField from 'components/ColorField';
import Select from 'components/Select';
import { useState } from 'react';
import { postMessage } from 'utils';

const options = {
  font: [
    { name: 'Normal', value: '' },
    { name: 'Bold', value: 'bold' },
    { name: 'Italic', value: 'italic' },
    { name: 'Strike', value: 'strikethrough' },
    { name: 'Underline', value: 'underline' },
  ],
};

const Element = ({ title = '', styles = {}, preview, isExpand, onExpandToggle }) => {
  const states = Object.keys(styles);
  const [state, setState] = useState(states[0]);

  const handleStateChange = newState => setState(newState || states[0]);

  // console.log(`○○ Element render (${title})`);

  return (
    <li className={`group ml-3 py-2 pr-2 ${styles[state] ? 'space-y-1 border-b last:border-0' : 'pb-0'}`}>
      <article className='flex items-center justify-between'>
        <div className='inline-flex items-center space-x-2 text-gray-400'>
          <h1 className='font-medium text-gray-600 group-first:uppercase group-first:text-gray-800 '>{title}</h1>
          {isExpand !== undefined && (
            <ChevronUpIcon
              className={`pointer w-5 duration-200 ${!isExpand && 'rotate-180'}`}
              onClick={() => onExpandToggle(!isExpand)}
            />
          )}
          {preview && (
            <i
              title='Preview element'
              onClick={() => postMessage({ type: 'PREVIEW', payload: { name: preview, show: true } })}
            >
              <EyeIcon title='Preview element' className='pointer w-3.5' />
            </i>
          )}
        </div>
        <ToggleGroup.Root type='single' value={state} onValueChange={handleStateChange}>
          {states
            .filter(state => state !== 'normal')
            .map(state => (
              <ToggleGroup.Item
                key={state}
                value={state}
                className='rounded px-1 text-gray-400 duration-300 hover:text-gray-600 radix-on:text-orange-500'
              >
                {state}
              </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
      </article>

      <div className='grid grid-cols-4 gap-x-2 gap-y-4'>
        {styles[state]?.map(({ type, ...rest }, i) =>
          type === 'select' ? (
            <Select key={i} {...rest} options={options[rest.label.toLowerCase()]} />
          ) : (
            <ColorField key={i} {...rest} />
          ),
        )}
      </div>
    </li>
  );
};

export default Element;
