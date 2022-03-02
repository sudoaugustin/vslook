import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { EyeIcon } from '@heroicons/react/solid';
import ColorField from './ColorField';
import { postMessage } from '../utils';

const Element = ({ title = '', styles = {}, preview }) => {
  const states = Object.keys(styles);
  const [state, setState] = useState(states[0]);

  const handleStateChange = newState => setState(newState || states[0]);

  // console.log(`○○ Element render (${title})`);

  return (
    <li className={`group ml-3 p-3 pl-0 ${styles[state] ? 'space-y-2 border-b last:border-0' : 'pb-0'}`}>
      <article className='flex items-center justify-between'>
        <div className='inline-flex space-x-2'>
          <h1 className='font-medium text-gray-600 group-first:uppercase group-first:text-gray-800 '>{title}</h1>
          {preview && (
            <EyeIcon
              className='w-3.5 cursor-pointer text-gray-300 hover:text-gray-400'
              onClick={() => postMessage({ type: 'OPEN_PREVIEW', payload: { name: preview, show: true } })}
            />
          )}
        </div>
        <ToggleGroup.Root type='single' value={state} onValueChange={handleStateChange}>
          {states
            .filter(state => state !== 'normal')
            .map(state => (
              <ToggleGroup.Item
                key={state}
                value={state}
                className='radix-on:text-orange-600 rounded px-1 text-gray-400 duration-300 hover:text-gray-600'
              >
                {state}
              </ToggleGroup.Item>
            ))}
        </ToggleGroup.Root>
      </article>

      <div className='grid grid-cols-3 gap-3 sm:grid-cols-4'>
        {styles[state]?.map(props => (
          <ColorField key={props.name} {...props} />
        ))}
      </div>
    </li>
  );
};

export default Element;
