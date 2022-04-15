import Element from './Element';
import { isExpandState } from 'states';
import { useRecoilState } from 'recoil';

export default ({ children }) => {
  const [isExpand, setExpand] = useRecoilState(isExpandState(children[0].title));

  return (
    <ul className={`overflow-hidden py-1 duration-200 ${isExpand ? 'max-h-full' : 'max-h-[2.375rem]'}`}>
      {children.map((props, i) => (
        <Element key={i} {...props} isExpand={i === 0 ? isExpand : undefined} onExpandToggle={setExpand} />
      ))}
    </ul>
  );
};
