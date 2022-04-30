import { useRecoilState } from 'recoil';
import { valueState } from 'states';
import { useDebouncedCallback } from 'use-debounce';
import { postMessage } from 'utils';

export default ({ name, label, children }) => {
  // console.log(`${name} Rendered`);

  const [value, setValue] = useRecoilState(valueState(name));

  const handleChange = (value, { select, revert } = {}) => {
    if (select) window.$theme[name] = value;
    value && setValue(value);
    handleEffect({ name, value: revert ? (window.$theme[name] ? value : undefined) : value });
  };

  const handleEffect = useDebouncedCallback(payload => {
    postMessage({ type: 'SET_THEME', payload });
  }, 200);

  return (
    <fieldset>
      <label className='mb-1 flex items-baseline text-xs font-medium text-gray-400'>{label}</label>
      <div className='relative flex divide-x rounded-md shadow-sm'>
        {children({ value, onChange: handleChange })}
        <span className='absolute inset-0 -z-10 rounded-md ring ring-transparent ring-offset-1 ring-offset-gray-200 duration-200 radix-peer-open:ring-orange-200 radix-peer-open:ring-offset-orange-400' />
      </div>
    </fieldset>
  );
};
