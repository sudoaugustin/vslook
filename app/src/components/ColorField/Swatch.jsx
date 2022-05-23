import { ColorSwatchIcon } from '@heroicons/react/outline';
import Menu from 'components/Menu';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { paletteState } from 'states';
import { getColorsFromPalette } from 'utils';
import SwatchList from './SwatchList';

export default ({ value, onChange }) => {
  const ref = useRef(null);
  const palette = useRecoilValue(paletteState);

  return (
    <Menu onOpen={() => ref?.current?.scrollIntoView()}>
      {() => (
        <button className='radix-peer flex h-6 w-6 items-center justify-center rounded-r-md text-gray-400 hover:text-gray-600'>
          <ColorSwatchIcon className='w-4 fill-gray-100' />
        </button>
      )}
      {({ setOpen }) => (
        <div className='max-h-96 w-64 overflow-y-auto'>
          {getColorsFromPalette(palette).map(([name, colors]) => (
            <section key={name} className='space-y-1.5 scroll-smooth px-1.5 py-3'>
              <p className='select-none text-xs font-medium uppercase text-gray-500'>{name}</p>
              <SwatchList
                value={value}
                colors={colors}
                activeRef={ref}
                onClose={() => setOpen(false)}
                onChange={onChange}
              />
            </section>
          ))}
        </div>
      )}
    </Menu>
  );
};
