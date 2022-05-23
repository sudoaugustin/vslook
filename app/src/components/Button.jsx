export default ({ label, variant = 'fill', ...rest }) => {
  const classes = {
    fill: 'text-white border-transparent bg-orange-500 hover:bg-orange-600',
    outline: 'text-gray-500 hover:text-gray-600 hover:border-gray-300',
  };
  return (
    <button
      className={`w-full select-none rounded-md border p-1 text-center font-medium duration-150 ${classes[variant]}`}
      {...rest}
    >
      {label}
    </button>
  );
};
