export default () => {
  // console.log('○ Loading render');
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <svg
        className='w-12 fill-transparent stroke-[2.5px]'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 12L7.02388 6.14574C5.81867 4.72784 3.5 5.58013 3.5 7.44104V16.559C3.5 18.4199 5.81867 19.2722 7.02388 17.8543L16.9761 6.14574C18.1813 4.72784 20.5 5.58013 20.5 7.44104V16.559C20.5 18.4199 18.1813 19.2722 16.9761 17.8543L16.25 17L12 12Z'
          stroke='url(#paint0_linear_906_98)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_906_98'
            x1='21'
            y1='8.15385'
            x2='6.3474'
            y2='23.0837'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F59E0B' />
            <stop offset='0.5625' stopColor='#F97316' />
          </linearGradient>
        </defs>
      </svg>

      <div className='mt-4 h-1 w-24 overflow-hidden rounded bg-gray-200'>
        <i className='block h-full w-full animate-fill bg-gray-800' />
      </div>
    </div>
  );
};
