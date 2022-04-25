export default ({ as, name, state, type, label, inputRef, className, onChange, ...rest }) => {
  const Tag = as || 'input';

  const classes = {
    normal: 'ring-transparent ring-offset-gray-200 focus:ring-orange-200 focus:ring-offset-orange-500',
    invalid: 'ring-red-200 ring-offset-red-500',
  };

  return (
    <fieldset className={`flex flex-col items-start gap-y-1.5 ${className}`}>
      <label htmlFor={name} className='text-xs font-medium uppercase text-gray-500'>
        {label || name}
      </label>
      <Tag
        id={name}
        ref={inputRef}
        type={type || 'text'}
        className={`w-full rounded-md bg-gray-50 py-1 px-1.5 text-sm font-medium text-gray-600 ring ring-offset-1 duration-200 [text-align:inherit] selection:bg-orange-400 selection:text-orange-50 focus:text-gray-800 ${
          classes[state || 'normal']
        }`}
        onChange={e => onChange(typeof e === 'string' ? e : e.target.value)}
        {...rest}
      />
    </fieldset>
  );
};
