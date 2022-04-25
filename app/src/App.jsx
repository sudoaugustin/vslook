import Loading from 'layouts/Loading';
import Tool from 'layouts/Tool';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { paletteState, themeState } from 'states';
import { getCSSColors } from 'utils';

export default () => {
  const setTheme = useSetRecoilState(themeState);
  const setPalette = useSetRecoilState(paletteState);
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffectOnce(() => {
    setTheme(getCSSColors());
    const observer = new MutationObserver(() => setTheme(getCSSColors()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
  });

  useEffectOnce(() => {
    setPalette(window.$palette);
    setDataLoaded(true);
  });

  return <div className='select-none'>{isDataLoaded ? <Tool /> : <Loading />}</div>;
};
