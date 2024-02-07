import Image from 'next/image';

// import clusterImg from '../../public/cluster.png';

export default function Banner() {
  return (
    <section className='flex md:flex-col gap-5 my-10 py-20 px-xPadding items-center bg-green500'>
      <div className='flex gap-2 flex-col'>
        <h1 className='text-[2em] text-orange900'>
          Join <span className='text-green1000'>Afrimages&apos;</span> Creator
          Community
        </h1>

        <h3 className='text-[1.5em] font-bold'>
          Fuel Your Creativity! Contribute Your Artwork and Flourish on
          Afrimages
        </h3>

        <p>
          Discover the brilliance of creative minds like yours, shaping every
          captivating image on Afrimages. Step into our vibrant creator
          community, where your artistic talent can shine, and your unique
          content finds a global audience.
        </p>

        <div className='flex gap-6'>
          <div className='bg-transparent border-2 border-orange800 border-solid text-orange800 py-3 px-4 rounded-md'>
            Learn More
          </div>

          <div className='bg-orange800 text-white py-3 px-8 rounded-md'>
            Join Us
          </div>
        </div>
      </div>

      <Image src={"/./cluster.png"} alt='' width={0} height={0} className='w-full '/>
    </section>
  );
}
