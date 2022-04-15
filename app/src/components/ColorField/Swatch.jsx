import Menu from '../Menu';
import { colord } from 'colord';
import { paletteState } from 'states';
import { toColorsArray } from 'utils';
import { useRecoilValue } from 'recoil';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Fragment, useRef, useState } from 'react';
import { ColorSwatchIcon, CheckIcon } from '@heroicons/react/outline';

export default ({ value, onChange }) => {
  const ref = useRef(null);
  const palette = useRecoilValue(paletteState);
  const [initValue, setInitValue] = useState(value);
  const Colord = colord(initValue);

  return (
    <Menu onOpen={() => ref?.current?.scrollIntoView()}>
      {() => (
        <button className='radix-peer flex h-6 w-6 items-center justify-center rounded-r-md text-gray-400 hover:text-gray-600'>
          <ColorSwatchIcon className='w-4 fill-gray-100' />
        </button>
      )}
      {({ setOpen }) => (
        <Fragment>
          {toColorsArray(palette).map(([name, indents]) => (
            <section key={name} className='space-y-1.5 scroll-smooth px-1.5 py-3'>
              <p className='select-none text-xs font-medium uppercase text-gray-500'>{name}</p>
              <div className='grid grid-cols-5'>
                {indents.map(([indent, value]) => {
                  const isActive = Colord.isEqual(value);
                  return (
                    <Tooltip.Root key={indent}>
                      <Tooltip.Trigger
                        ref={isActive ? ref : null}
                        className='bg-pattern-rectangle pointer relative h-8 duration-150 hover:z-10 hover:scale-125'
                        onClick={() => setInitValue(value) || setOpen(false) || onChange(value)}
                        onMouseOver={() => onChange(value)}
                        onMouseLeave={() => onChange(initValue)}
                      >
                        <i style={{ background: value }} className='absolute inset-0 flex items-center justify-center'>
                          {isActive && <CheckIcon className='mx-auto w-5 text-white mix-blend-difference' />}
                        </i>
                      </Tooltip.Trigger>
                      <Tooltip.Content className='mt-0.5 rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700'>
                        <span className='capitalize'>{indent}</span>{' '}
                        <span className='uppercase'>{name !== 'base' && `• ${value}`}</span>
                      </Tooltip.Content>
                    </Tooltip.Root>
                  );
                })}
              </div>
            </section>
          ))}
        </Fragment>
      )}
    </Menu>
  );
};
