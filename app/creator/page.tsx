import Image from 'next/image';

import heroImg1 from '@/public/images/creator/creator-hero-img-1.png';
import heroImg2 from '@/public/images/creator/creator-hero-img-2.png';
import heroImg3 from '@/public/images/creator/creator-hero-img-3.png';
import heroImg4 from '@/public/images/creator/creator-hero-img-4.png';
import whyCollageImg1 from '@/public/images/creator/creator-why-collage-1.png';
import whyCollageImg2 from '@/public/images/creator/creator-why-collage-2.png';
import whyCollageImg3 from '@/public/images/creator/creator-why-collage-3.png';
import whyCollageImg4 from '@/public/images/creator/creator-why-collage-4.png';

export default function Creator() {
    return (
        <div className='font-lato py-14'>
            {/* Hero Section */}
            <section>
                <div className='text-center'>
                    <h1 className='font-nunito text-[40px] font-bold leading-[54px]'>
                        Showcase your{' '}
                        <span className='text-green400 border-4 border-green400 rounded-full py-2 px-3.5'>
                            Creativity
                        </span>{' '}
                        <br />{' '}
                        <span className='inline-block align-middle w-[200px] h-[70px] bg-orange-400'></span>
                        On Afrimages
                    </h1>

                    <p className='font-bold text-2xl leading-7 my-11 text-grey600'>
                        Join a vibrant community, gain exposure and set the
                        stage for future earnings.
                    </p>

                    <button className='btn-main px-10 py-2'>
                        Become a verified contributor
                    </button>
                </div>

                {/* Marquee */}

                <div className='flex items-center gap-3 mt-14 overflow-hidden pl-[100px]'>
                    {[heroImg1, heroImg2, heroImg3, heroImg4].map(
                        (image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt=''
                                width={353}
                                height={292}
                                className='w-[353px] h-[292px]'
                            />
                        )
                    )}
                </div>

                {/* Banner */}

                <div className='border-[0.5px] border-black py-5 text-center text-white font-medium text-2xl gradient-green relative mt-36 overlay-top space-x-2'>
                    <span className='text-4xl'>🎉</span>
                    Welcome to our creators community we are glad to have you
                    <span className='text-4xl'>🔥</span>
                </div>
            </section>

            {/* Why Section */}
            <section className='bg-[#F9F9F9] py-20 pb-10'>
                <div className='text-center mb-12'>
                    <h1 className='text-[2rem] font-bold leading-[3rem]'>
                        Your talent deserves recognition and we are here to
                        elevate your <span className='text-orange700'>art</span>
                    </h1>

                    <p className='max-w-[45.8125rem] mx-auto text-xl font-semibold'>
                        Create all forms of creativity from photos, vectors,
                        icons, mockups we embrace all because we understand that
                        there is no limits to your creativity.
                    </p>
                </div>

                <div className='flex justify-center gap-6'>
                    <div className='rounded-[10px] py-12 px-11 gradient-collage flex flex-col gap-7 items-center'>
                        <Image
                            src={whyCollageImg1}
                            alt=''
                            width={415}
                            height={213}
                        />

                        <Image
                            src={whyCollageImg2}
                            alt=''
                            width={293}
                            height={99}
                        />

                        <div className='flex items-center gap-5'>
                            <Image
                                src={whyCollageImg3}
                                alt=''
                                width={198}
                                height={80}
                            />

                            <Image
                                src={whyCollageImg4}
                                alt=''
                                width={198}
                                height={80}
                            />
                        </div>
                    </div>

                    <div className='max-w-[22.3125rem]'>
                        <p className='text-lg mb-8'>
                            Upload your photos, designs, illustrations, vectors
                            on{' '}
                            <a href='#' className='font-semibold text-green700'>
                                afrimages
                            </a>
                        </p>

                        <button className='py-2 px-6 btn-outline'>
                            View guidelines
                        </button>
                    </div>
                </div>
            </section>

            {/* Question Section */}
            <section></section>

            {/* CTA (Call to Action) Section*/}
            <section></section>
        </div>
    );
}
