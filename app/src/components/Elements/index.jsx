import { useRecoilState } from 'recoil';
import { isExpandState } from 'states';
import Element from './Element';

export default ({ children }) => {
  const [isExpand, setExpand] = useRecoilState(isExpandState(children[0].title));

  return (
    <ul className={`overflow-hidden duration-200 ${isExpand ? 'max-h-screen' : 'max-h-10'}`}>
      {children.map((props, i) => (
        <Element key={i} {...props} isExpand={i === 0 ? isExpand : undefined} onExpandToggle={setExpand} />
      ))}
    </ul>
  );
};
