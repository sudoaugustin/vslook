import { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { colorsState, themeState } from 'states';
import { Tool, Loading } from 'layouts';
import { setGlobals, getColors } from 'utils';

export default () => {
  const setTheme = useSetRecoilState(themeState);
  const setColors = useSetRecoilState(colorsState);
  const [isReady, setReady] = useState(false);

  useEffectOnce(() => {
    console.log('Theme effect runned');
    setTheme(window.$theme);
  });

  useEffectOnce(() => {
    console.log('Colors effect runned');
    const _setColors = () => setColors(getColors());
    _setColors();
    const observer = new MutationObserver(_setColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
  });

  useEffectOnce(() => {
    console.log('Global effect runned');
    setGlobals();
    setReady(true);
  });

  return <div className='select-none'>{isReady ? <Tool /> : <Loading />}</div>;
};
