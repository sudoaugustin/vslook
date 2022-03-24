import { useRef } from 'react';
import { colord } from 'colord';
import * as Tooltip from '@radix-ui/react-tooltip';
import { RadioGroup, RadioItem } from '@radix-ui/react-dropdown-menu';
import { ColorSwatchIcon, CheckIcon } from '@heroicons/react/outline';
import Dropdown from '../Dropdown';

export default ({ value, onChange }) => {
  const ref = useRef();
  const Colord = colord(value);

  return (
    <Dropdown
      trigger={<ColorSwatchIcon className='w-4 fill-gray-100/75' />}
      classes={{
        trigger:
          'h-6 w-6 text-gray-400 hover:text-gray-600 inline-flex justify-center items-center rounded-r-md radix-peer',
        content: 'max-h-96 w-56 overflow-y-auto',
      }}
      onOpenEffect={() => ref?.current?.scrollIntoView()}
    >
      {() => (
        <Tooltip.Provider delayDuration={500}>
          <RadioGroup value={value} onValueChange={onChange} className='space-y-4 scroll-smooth'>
            {window.$colors.map(([name, indents]) => (
              <section key={name} className='py-2'>
                <p className='mb-2 ml-2 select-none text-xs font-medium capitalize text-gray-500'>{name}</p>
                <ul className='mx-2 grid grid-cols-5 gap-2'>
                  {indents.map(([indent, value]) => {
                    const isSelected = Colord.isEqual(value);
                    return (
                      <RadioItem
                        key={indent}
                        value={value}
                        className='bg-pattern-rectangle h-8 w-8 cursor-pointer overflow-hidden rounded-full shadow-sm !outline-none ring-2 ring-transparent duration-300 focus:ring-orange-400 focus:ring-offset-2'
                      >
                        <Tooltip.Root>
                          <Tooltip.Trigger
                            style={{ background: value }}
                            className='flex h-full w-full items-center justify-center'
                          >
                            {isSelected && (
                              <i ref={ref}>
                                <CheckIcon className='w-5 text-white mix-blend-difference' />
                              </i>
                            )}
                          </Tooltip.Trigger>
                          <Tooltip.Content className='mt-1 rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700'>
                            <span className='capitalize'>{indent}</span>{' '}
                            <span className='uppercase'>{name !== 'base' && `• ${value}`}</span>
                          </Tooltip.Content>
                        </Tooltip.Root>
                      </RadioItem>
                    );
                  })}
                </ul>
              </section>
            ))}
          </RadioGroup>
        </Tooltip.Provider>
      )}
    </Dropdown>
  );
};
