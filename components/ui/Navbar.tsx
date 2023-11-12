export default function Navbar({ active = 0 }) {
  const nav = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Collections',
      link: '/collections',
    },
    {
      title: 'Categories',
      link: '/categories',
    },
    {
      title: 'About',
      link: '/about',
    },
  ];
  return (
    <div
      className='grid  bg-white  py-2 px-xPadding items-center justify-center'
      style={{ gridTemplateColumns: '1fr 2fr 1fr' }}
    >
      <div>
        <h2>Afrimages</h2>
      </div>

      <div className='flex gap-10 justify-center'>
        {nav.map((item, i) => {
          return (
            <a
              href={item.link}
              className={active == i ? 'font-bold text-orange800' : ''}
              key={i}
            >
              {item.title}
            </a>
          );
        })}
      </div>

      <div className='flex gap-10 items-center'>
        <div>Upload Content</div>

        <div className='bg-green800 text-white py-3 px-4 rounded-md'>
          Sign Up
        </div>
      </div>
    </div>
  );
}
