import { useState, useEffect } from 'react';
import Element from './Element';

export default ({ elements }) => {
  const rootName = elements[0].title;
  const [shrink, setShrink] = useState(!!window.$shrink[rootName]);

  useEffect(() => {
    window.$shrink[rootName] = shrink;
  }, [shrink]);

  return (
    <ul className={`overflow-hidden py-1 duration-200 ${shrink ? 'max-h-[2.475rem]' : 'max-h-full'}`}>
      {elements.map((props, i) => (
        <Element key={i} {...props} shrink={i === 0 ? shrink : undefined} onShrinkToggle={setShrink} />
      ))}
    </ul>
  );
};
