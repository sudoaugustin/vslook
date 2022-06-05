import { CheckIcon } from '@heroicons/react/outline';
import * as Tooltip from '@radix-ui/react-tooltip';
import { colord } from 'colord';
import { memo } from 'react';

const SwatchList = ({ value = '#00000000', colors, activeRef, onClose, onChange }) => {
  const handleClick = newValue => {
    onClose();
    onChange(newValue, { select: true });
  };
  return (
    <div className="grid grid-cols-5">
      {colors.map(([name, color]) => {
        const Colord = colord(color);
        const newValue = Colord.toHex();
        const isActive = Colord.isEqual(value);

        return (
          <Tooltip.Root key={name}>
            <Tooltip.Trigger
              ref={isActive ? activeRef : null}
              className="bg-pattern-transparent relative h-8 transform-gpu cursor-pointer overflow-hidden duration-150 hover:z-10 hover:scale-125"
              onClick={() => handleClick(newValue)}
              onMouseOver={() => onChange(newValue)}
              onMouseLeave={() => onChange(value, { revert: true })}
            >
              <i style={{ background: color }} className="flex h-full w-full items-center justify-center">
                {isActive && <CheckIcon className="relative z-30 mx-auto w-5 text-white mix-blend-difference" />}
              </i>
            </Tooltip.Trigger>
            <Tooltip.Content
              sideOffset={1}
              className="rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-700"
            >
              <span className="capitalize">{name}</span> {!!color && <span className="uppercase">• {color}</span>}
            </Tooltip.Content>
          </Tooltip.Root>
        );
      })}
    </div>
  );
};
export default memo(SwatchList, () => true);
