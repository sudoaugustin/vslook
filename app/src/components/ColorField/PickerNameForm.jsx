import Button from 'components/Button';
import InputField from 'components/InputField';
import { merge } from 'lodash/fp';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { paletteState } from 'states';
import { postMessage } from 'utils';

export default ({ value, onHideForm, onHideMenu }) => {
  const [name, setName] = useState('');
  const [isValid, setValid] = useState(true);
  const [palette, setPalette] = useRecoilState(paletteState);

  const handleSubmit = () => {
    if (name.length < 1) return setValid(false);

    const names = name.toLowerCase().split('/', 2);
    const isGruped = !!names[1];
    const newColors = merge(palette.colors, { [isGruped ? names[0] : 'base']: { [names[!isGruped ? 0 : 1]]: value } });

    postMessage({ type: 'SET_PALETTE_COLORS', payload: newColors });
    setPalette({ ...palette, colors: merge(palette.colors, newColors) });
    onHideForm();
    onHideMenu();
  };

  return (
    <section className='-mx-2.5 border-t px-2.5'>
      <InputField
        name='name'
        value={name}
        state={!isValid && 'invalid'}
        className='py-2.5'
        autoFocus
        onChange={value => {
          setName(value);
          setValid(true);
        }}
      />
      <div className='flex space-x-1.5'>
        <Button label='Cancel' variant='outline' onClick={onHideForm} />
        <Button label='Add' onClick={handleSubmit} />
      </div>
    </section>
  );
};
