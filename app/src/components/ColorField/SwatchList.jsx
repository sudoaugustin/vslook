import { CheckIcon } from '@heroicons/react/outline';
import * as Tooltip from '@radix-ui/react-tooltip';
import { colord } from 'colord';
import { memo } from 'react';

const SwatchList = ({ value, colors, activeRef, onSelect, onPreview }) => (
  <div className='grid grid-cols-5'>
    {colors.map(([indent, color]) => {
      const Colord = colord(color);
      const newValue = Colord.toHex();
      const isActive = Colord.isEqual(value);
      return (
        <Tooltip.Root key={indent}>
          <Tooltip.Trigger
            ref={isActive ? activeRef : null}
            className='bg-pattern-rectangle pointer relative h-8 duration-150 hover:z-10 hover:scale-125'
            onClick={() => onSelect(newValue)}
            onMouseOver={() => onPreview(newValue)}
            onMouseLeave={() => onPreview(value, { revert: true })}
          >
            <i style={{ background: color }} className='absolute inset-0 flex items-center justify-center'>
              {isActive && <CheckIcon className='mx-auto w-5 text-white mix-blend-difference' />}
            </i>
          </Tooltip.Trigger>
          <Tooltip.Content
            sideOffset={1}
            className='rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700'
          >
            <span className='capitalize'>{indent}</span> <span className='uppercase'>• {color}</span>
          </Tooltip.Content>
        </Tooltip.Root>
      );
    })}
  </div>
);

export default memo(SwatchList, () => true);
