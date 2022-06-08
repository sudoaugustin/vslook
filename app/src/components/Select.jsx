import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import * as Select from '@radix-ui/react-select';
import Fieldset from 'components/Fieldset';

export default ({ options, ...props }) => {
  return (
    <Fieldset {...props}>
      {({ value, onChange }) => (
        <Select.Root value={value} onValueChange={value => onChange(value, { select: true })}>
          <Select.Trigger className='flex h-6 w-full items-center justify-between px-1.5 leading-none text-gray-800'>
            <Select.Value>{options.find(option => option.value === value).name}</Select.Value>
            <Select.Icon>
              <SelectorIcon className='w-4 cursor-pointer text-gray-400' />
            </Select.Icon>
          </Select.Trigger>

          <Select.Content className='rounded-md border border-gray-200 bg-white p-0.5 text-xs shadow'>
            <Select.Viewport>
              {options.map(({ name, value }) => (
                <Select.Item
                  key={name}
                  value={value}
                  className='flex cursor-pointer justify-between rounded-md px-1.5 py-1 text-gray-600 duration-150 focus:bg-gray-100 focus:text-gray-800 radix-active:text-orange-600'
                >
                  <Select.ItemText>{name}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon className='w-4 text-orange-500' />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      )}
    </Fieldset>
  );
};
