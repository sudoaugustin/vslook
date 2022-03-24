import { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { Tool, Loading } from './layouts';
import { setGlobals, getTheme } from './utils';
import { themeState } from './states';

export default () => {
  const setTheme = useSetRecoilState(themeState);
  const [isReady, setIsReady] = useState(false);

  useEffectOnce(() => {
    console.log('Theme effect runned');
    const _setTheme = () => setTheme(getTheme());
    _setTheme();
    const observer = new MutationObserver(_setTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
  });

  useEffectOnce(() => {
    console.log('Global effect runned');

    setGlobals();
    setIsReady(true);
  });

  return <div className='select-none'>{isReady ? <Tool /> : <Loading />}</div>;
};
