export default () => {
  // console.log('○ Loading render');
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <svg className='h-12 w-12' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M37.9458 0C37.5889 0 37.266 0.14881 37.0621 0.442177L23.8401 19.5238C23.7551 19.6471 23.6999 19.8172 23.6702 19.966C23.3897 21.4541 23.9251 23.0825 25.2337 24.6599C27.3708 27.2364 31.2031 29.2517 33.935 29.2517C34.2452 29.2517 34.5426 29.2007 34.8188 29.1497C35.1459 29.0901 35.4093 28.8988 35.5665 28.6054L49.8761 1.59864C50.0546 1.26275 50.0376 0.837585 49.8422 0.510204C49.6467 0.182823 49.2728 0 48.8904 0H37.9458ZM21.4608 21.3946C14.1531 23.0697 12.3771 28.9711 10.6521 34.6939C8.94842 40.3444 7.33816 45.6803 0.761179 47.8912C0.255584 48.0612 -0.0715657 48.5544 0.0134083 49.0816C0.0983823 49.6088 0.569988 50 1.10108 50C22.3658 50 33.149 47.1003 34.3769 31.3605C34.2197 31.369 34.0965 31.4286 33.935 31.4286C30.5743 31.4286 26.1089 29.1199 23.5682 26.0544C22.1321 24.324 21.5883 22.7126 21.4608 21.3946Z'
          fill='url(#paint0_linear_297_3)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_297_3'
            x1='50'
            y1='0'
            x2='-0.0218786'
            y2='49.9647'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F97316' />
            <stop offset='1' stopColor='#FBBF24' />
          </linearGradient>
        </defs>
      </svg>
      <div className='mt-4 h-1 w-24 overflow-hidden rounded bg-gray-200'>
        <i className='animate-fill block h-full w-full bg-gray-800' />
      </div>
    </div>
  );
};
