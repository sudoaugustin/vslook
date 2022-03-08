import Tool from './layouts/Tool';
import Loading from './layouts/Loading';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { setGlobals, setTheme } from './utils';

export default () => {
  const [isReady, setIsReady] = useState(false);

  useEffectOnce(() => {
    console.log('Effect Once runned');
    setTheme();
    setGlobals();
    setIsReady(true);
    const observer = new MutationObserver(setTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
  });

  return <div className='select-none'>{isReady ? <Tool /> : <Loading />}</div>;
};
