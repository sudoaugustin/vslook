import * as Tabs from '@radix-ui/react-tabs';
import Elements from 'components/Elements';
import styles from 'data/styles';

export default () => {
  const tabs = Object.entries(styles);

  // console.log('○ Tool render');

  return (
    <Tabs.Root defaultValue={tabs[0][0]}>
      <Tabs.List className='flex items-center justify-end px-3 py-2 text-xs'>
        {tabs.map(([name]) => (
          <Tabs.Trigger
            key={name}
            value={name}
            className='rounded-full px-2 py-1 font-medium capitalize text-gray-400 duration-300 hover:text-gray-600 radix-active:bg-orange-50 radix-active:text-orange-500'
          >
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map(([name, styles]) => (
        <Tabs.Content key={name} value={name} className='divide-y divide-gray-300 text-xs'>
          {styles.map((elements, i) => (
            <Elements key={i}>{elements}</Elements>
          ))}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
