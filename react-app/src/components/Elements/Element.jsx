import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { EyeIcon, ChevronUpIcon } from '@heroicons/react/solid';
import ColorField from '../ColorField';
import { postMessage } from '../../utils';

const Element = ({ title = '', styles = {}, preview, shrink, onShrinkToggle }) => {
  const states = Object.keys(styles);
  const [state, setState] = useState(states[0]);

  const handleStateChange = newState => setState(newState || states[0]);

  // console.log(`○○ Element render (${title})`);

  return (
    <li className={`group ml-3 py-2 pr-2 ${styles[state] ? 'space-y-1 border-b last:border-0' : 'pb-0'}`}>
      <article className='flex items-center justify-between'>
        <div className='inline-flex items-center space-x-2'>
          <h1 className='font-medium text-gray-600 group-first:uppercase group-first:text-gray-800 '>{title}</h1>
          {!!title && shrink !== undefined && (
            <ChevronUpIcon
              className={`w-5 cursor-pointer text-gray-300 duration-200 hover:text-gray-400 ${shrink && 'rotate-180'}`}
              onClick={() => onShrinkToggle(!shrink)}
            />
          )}
          {preview && (
            <EyeIcon
              className='w-3.5 cursor-pointer text-gray-300 hover:text-gray-400'
              onClick={() => postMessage({ type: 'OPEN_PREVIEW', payload: { name: preview, show: true } })}
            />
          )}
        </div>
        <ToggleGroup.Root
          type='single'
          value={state}
          // className='scrollbar-hidden inline-flex max-w-[200px] items-center overflow-scroll'
          onValueChange={handleStateChange}
        >
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
        {styles[state]?.map(props => (
          <ColorField key={props.name} {...props} />
        ))}
      </div>
    </li>
  );
};

export default Element;
