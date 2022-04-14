import Menu from 'components/Menu';
import { useRef } from 'react';
import { colord } from 'colord';
import * as Tooltip from '@radix-ui/react-tooltip';
import { ColorSwatchIcon, CheckIcon } from '@heroicons/react/outline';

export default ({ value, onChange }) => {
  const ref = useRef();
  const Colord = colord(value);

  return (
    <Menu
      trigger={<ColorSwatchIcon className='w-4 fill-gray-100/75' />}
      classes={{
        trigger:
          'h-6 w-6 text-gray-400 hover:text-gray-600 inline-flex justify-center items-center rounded-r-md radix-peer',
        content: 'max-h-96 w-60 overflow-y-auto',
      }}
      onOpenEffect={() => {
        window.$initColor = value;
        ref?.current?.scrollIntoView();
      }}
    >
      {({ setOpen }) => (
        <Tooltip.Provider>
          {window.$colors.map(([name, indents]) => (
            <section key={name} className='space-y-1.5 scroll-smooth px-1.5 py-2'>
              <p className='select-none text-xs font-medium uppercase text-gray-500'>{name}</p>
              <ul className='grid grid-cols-5'>
                {indents.map(([indent, _value]) => {
                  const isActive = Colord.isEqual(_value);
                  return (
                    <li
                      key={indent}
                      ref={isActive ? ref : null}
                      className='bg-pattern-rectangle pointer relative h-8 ring ring-transparent ring-offset-1 ring-offset-transparent duration-1000 hover:z-10 hover:ring-orange-200 hover:ring-offset-orange-400'
                      onClick={() => setOpen(false) || onChange(_value)}
                    >
                      <Tooltip.Root>
                        <Tooltip.Trigger
                          style={{ background: _value }}
                          className='flex h-full w-full items-center justify-center'
                          onMouseOver={() => onChange(_value)}
                          onMouseLeave={() => onChange(window.$initColor)}
                        >
                          {isActive && <CheckIcon className='w-5 text-white mix-blend-difference' />}
                        </Tooltip.Trigger>
                        <Tooltip.Content className='mt-0.5 rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700'>
                          <span className='capitalize'>{indent}</span>{' '}
                          <span className='uppercase'>{name !== 'base' && `• ${_value}`}</span>
                        </Tooltip.Content>
                      </Tooltip.Root>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </Tooltip.Provider>
      )}
    </Menu>
  );
};
