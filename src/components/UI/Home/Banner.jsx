import Image from "next/image";

// import clusterImg from '../../public/cluster.png';

export default function Banner() {
  return (
    <section className="items-center gap-5 py-20 my-10 space-y-10 md:flex px-xPadding bg-green500 md:space-y-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-[2em] text-orange900">
          Join <span className="text-green1000">Afrimages&apos;</span> Creator Community
        </h1>

        <h3 className="text-[1.5em] font-bold">
          Fuel Your Creativity! Contribute Your Artwork and Flourish on Afrimages
        </h3>

        <p>
          Discover the brilliance of creative minds like yours, shaping every captivating image on Afrimages. Step into
          our vibrant creator community, where your artistic talent can shine, and your unique content finds a global
          audience.
        </p>

        <div className="flex gap-6">
          <div className="px-4 py-3 bg-transparent border-2 border-solid rounded-md border-orange800 text-orange800">
            Learn More
          </div>

          <div className="px-8 py-3 text-white rounded-md bg-orange800">Join Us</div>
        </div>
      </div>

      <Image src={"/./cluster.png"} alt="" width={0} height={0} className="w-full" unoptimized={true} />
    </section>
  );
}
