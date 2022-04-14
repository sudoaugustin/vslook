import Element from './Element';
import { expandState } from 'states';
import { useRecoilState } from 'recoil';

export default ({ elements }) => {
  const [isExpand, setExpand] = useRecoilState(expandState(elements[0].title));

  return (
    <ul className={`overflow-hidden py-1 duration-200 ${isExpand ? 'max-h-full' : 'max-h-[2.375rem]'}`}>
      {elements.map((props, i) => (
        <Element key={i} {...props} isExpand={i === 0 ? isExpand : undefined} onExpandToggle={setExpand} />
      ))}
    </ul>
  );
};
