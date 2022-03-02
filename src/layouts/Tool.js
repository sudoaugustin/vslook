import * as Tabs from '@radix-ui/react-tabs';
import elements from '../../data/elements';
import Element from '../components/Element';

export default () => {
  const tabs = Object.entries(elements);

  // console.log('○ Tool render');

  return (
    <Tabs.Root defaultValue={tabs[0][0]}>
      <Tabs.List className='flex items-center justify-end px-3 py-2 '>
        {tabs.map(([name]) => (
          <Tabs.Trigger
            key={name}
            value={name}
            className='radix-active:bg-orange-50 radix-active:text-orange-400 rounded-md px-2 py-1 text-sm font-medium capitalize text-gray-400 duration-300'
          >
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map(([name, groups]) => (
        <Tabs.Content key={name} value={name} className='divide-y text-xs'>
          {groups.map((elements, i) => (
            <ul key={i} className='py-2'>
              {elements.map((props, ii) => (
                <Element key={ii} {...props} />
              ))}
            </ul>
          ))}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
