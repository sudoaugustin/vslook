import Fieldset from 'components/Fieldset';
import Picker from './Picker';
import Swatch from './Swatch';

export default props => {
  return (
    <Fieldset {...props}>
      {({ value, onChange }) => (
        <>
          <Picker value={value} onChange={onChange} />
          <Swatch value={value} onChange={onChange} />
        </>
      )}
    </Fieldset>
  );
};
