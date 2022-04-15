import { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { useSetRecoilState } from 'recoil';
import { paletteState, themeState } from 'states';
import { Tool, Loading } from 'layouts';
import { getColors } from 'utils';

export default () => {
  const setTheme = useSetRecoilState(themeState);
  const setPalette = useSetRecoilState(paletteState);
  const [isReady, setReady] = useState(false);

  useEffectOnce(() => {
    setTheme(getColors());
    const observer = new MutationObserver(() => setTheme(getColors()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
  });

  useEffectOnce(() => {
    window.addEventListener('message', e => {
      const { type, payload } = e.data;
      switch (type) {
        case 'SET_INIT_VALUES':
          setPalette(payload.palette);
          setReady(true);
          break;

        case 'SET_PALETTE':
          setPalette(payload);
          break;

        default:
          break;
      }
    });
  });

  return <div className='select-none'>{isReady ? <Tool /> : <Loading />}</div>;
};
