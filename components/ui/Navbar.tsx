import { RiSearch2Line } from "react-icons/ri";

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
      className='grid  bg-white  py-2 px-xPadding items-center justify-center grid-cols-2'
    >
      <div className="flex items-center gap-6">
        <img src="./logo.png" alt="" />

        <div className='flex gap-10 justify-center text-[0.8em]'>
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
      </div>


      <div className='flex gap-10 items-center justify-end text-[0.8em]'>

      <div className='flex gap-2 items-center border-2 border-gray-300 bg-white rounded-md w-[50%] p-2'>
        <RiSearch2Line size={20} />
        <input type='text' className='outline-none focus:outline-none w-[100%]' placeholder='Search for Images here...' />
      </div>

        <div>Upload Content</div>

        <div className='bg-green800 text-white py-2 px-4 rounded-md'>
          Sign Up
        </div>
      </div>
    </div>
  );
}
