import Image from 'next/image'

import heroImg1 from '@/public/images/creator/creator-hero-img-1.png'
import heroImg2 from '@/public/images/creator/creator-hero-img-2.png'
import heroImg3 from '@/public/images/creator/creator-hero-img-3.png'
import heroImg4 from '@/public/images/creator/creator-hero-img-4.png'
import whyCollageImg1 from '@/public/images/creator/creator-why-collage-1.png'
import whyCollageImg2 from '@/public/images/creator/creator-why-collage-2.png'
import whyCollageImg3 from '@/public/images/creator/creator-why-collage-3.png'
import whyCollageImg4 from '@/public/images/creator/creator-why-collage-4.png'
import ctaCollageImg from '@/public/images/creator/creator-cta-colllage.png'

import heartOutlineIcon from '@/public/svg/heart-outline.svg'
import atomIcon from '@/public/svg/atom.svg'
import feedbackIcon from '@/public/svg/feedback.svg'
import uploadIcon from '@/public/svg/upload-linear.svg'
import tagsIcon from '@/public/svg/tags.svg'
import monitorIcon from '@/public/svg/monitor.svg'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export default function Creator() {
  return (
    <>
      <Navbar />
      <div className=' py-32'>
        {/* Hero Section */}
        <section>
          <div
            className='text-center
          px-xPadding'
          >
            <h1
              className='
              text-lg 
                    font-bold 
                    leading-[80px]'
            >
              Showcase your{' '}
              <span
                className='text-green400
                        border-4 
                        border-green400 
                        rounded-full 
                        py-1 
                        px-3.5'
              >
                Creativity
              </span>{' '}
              <br />{' '}
              <span
                className='inline-block 
              align-middle 
              w-[200px] 
              h-[70px] 
              rounded-full 
              bg-orange-300
              bg-span-img 
              mr-3'
              ></span>
              On Afrimages
            </h1>

            <div
              className='flex 
            flex-col 
            gap-8 
            items-center 
            justify-center 
            my-5'
            >
              <p
                className='md:text-[18px]
                text-md 
              leading-7 
              text-grey600'
              >
                Join a vibrant community, gain exposure and set the stage for
                future earnings.
              </p>

              <button className='btn-main px-6 py-4 w-fit rounded-full'>
                Become a verified contributor
              </button>
            </div>
          </div>

          {/* Marquee */}

          <div className='marquee flex items-center gap-6 my-14'>
            {[heroImg1, heroImg2, heroImg3, heroImg1].map((image, index) => (
              <Image
                key={index}
                src={image}
                alt=''
                width={353}
                height={292}
                className='w-[353px] h-[292px]'
              />
            ))}
          </div>

          {/* Banner */}

          {/* <div className=' py-5 text-center text-white font-medium text-2xl gradient-green relative mt-36 overlay-top space-x-2'>
                    <span className='text-4xl'>🎉</span>
                    Welcome to our creators community we are glad to have you
                    <span className='text-4xl'>🔥</span>
                </div> */}
        </section>

        {/* Info Section */}
        <section
          className='bg-offWhite 
        py-20
        flex 
        flex-col 
        gap-20
        '
        >
          <div className='md:text-left text-center px-xPadding'>
            <h1
              className='md:text-3xl
              text-mdl
             font-medium 
             w-4/5 
             md:m-0
             m-auto 
             leading-[3rem]'
            >
              Your talent deserves recognition and we are here to elevate your{' '}
              <span className='text-orange700'>Art.</span>
            </h1>

            <span
              className='md:block 
            hidden 
            w-full
            mx-auto 
            h-[1px] 
            my-4
            bg-grey500'
            ></span>

            <p
              className='md:w-4/5
              w-3/5 
            mx-auto 
            md:mx-0
            text-md 
            md:text-base
            font-normal'
            >
              Create all forms of creativity from photos, vectors, icons,
              mockups we embrace all because we understand that there is no
              limits to your creativity.
            </p>
          </div>

          <div
            className='grid 
          sm:grid-cols-1
          grid-cols-2 
          px-xPadding 
          justify-center 
          gap-6 
          md:gap-10
          items-center'
          >
            <div className='sm:order-2 rounded-[10px] py-12 px-11 gradient-collage flex flex-col gap-7 items-center'>
              <Image src={whyCollageImg1} alt='' width={415} height={213} />

              <Image src={whyCollageImg2} alt='' width={293} height={99} />

              <div className='grid grid-cols-2 items-center gap-5'>
                <Image src={whyCollageImg3} alt='' width={198} height={80} />

                <Image src={whyCollageImg4} alt='' width={198} height={80} />
              </div>
            </div>

            <div
              className='
            px-[10%]
            md:px-0 
            flex 
            flex-col 
            gap-3
            md:gap-6 
            md:items-start
            items-center 
            justify-center'
            >
              <p
                className='text-mdl 
              md:text-3xl
              md:text-left
              text-center'
              >
                Upload your photos, designs, illustrations, vectors on{' '}
                <a href='#' className='font-semibold text-green700'>
                  afrimages
                </a>
              </p>

              <button className='py-2 px-6 btn-outline'>View guidelines</button>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className='my-24'>
          <h1
            className='text-center 
          text-[2rem] 
          md:text-2xl
          font-bold
          max-w-xl mx-auto'
          >
            Why you should become a contributor on{' '}
            <span className='text-green800 font-bold'>afrimages</span>
          </h1>

          <div
            className='flex 
          md:flex-col
          items-center 
          justify-center 
          gap-8 
          mt-9 
          mb-6'
          >
            {[
              {
                text: 'Get recognized and given due credit for your creativity; as a contributor on afrimages you can be rest assured that we wont take credit for your work as your name or initials will be attached to every upload ',
                icon: heartOutlineIcon,
              },
              {
                text: 'Visibility and exposure; contributing on afrimages will gurantee you the necessary exposure  and visibility that your work and creativity deserves to get',
                icon: atomIcon,
              },
              {
                text: 'Feedback and tips; we know that as a creative one of the most important things apart from getting credit is feedback that is why at afrimages we have made it imperative to encourage our users to give feedback.   ',
                icon: feedbackIcon,
              },
            ].map((item, index) => (
              <div
                key={item.text.slice(0, 10)}
                className={`border 
                border-gray-200 
                shadow-sm 
                rounded-[10px] 
                md:w-[80%]
                w-[330px] 
                md:h-auto
                h-[210px]
                py-3.5 
                px-7 
                ${index === 0 || index === 2 ? 'bg-offWhite' : ''}`}
              >
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center ${
                    index === 0 || index === 2
                      ? 'bg-[#EBE5D6]'
                      : 'bg-transparent border border-black'
                  }`}
                >
                  <Image src={item.icon} alt='' width={20} height={20} />
                </div>

                <p
                  className='mt-4 
                leading-[19px] 
                tracking-[0.5px] 
                text-[#545454]
                md:text-sm'
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* <div className='text-center'>
                <button className='btn-main px-10 py-4 w-fit'>
                        Become a verified contributor
                    </button>
                </div> */}
        </section>

        <section
          className='my-16 
        flex 
        flex-col 
        items-center 
        justify-center
        px-xPadding'
        >
          <h1
            className='md:font-medium
            font-bold 
            md:text-[1.6em]
          text-[2em] 
          leading-[38px] 
          text-center 
          md:w-4/5
          w-3/5 '
          >
            Creative tools we provided to make your uploading easy and seamless
          </h1>

          <div
            className='flex 
          sm:flex-col
          items-center 
          justify-between gap-9 mt-8'
          >
            {[
              {
                heading: 'Batch uploading',
                text: 'You can upload your content in batches',
                icon: uploadIcon,
              },

              {
                heading: 'Tags and initials',
                text: 'Personalize your content by adding tags',
                icon: tagsIcon,
              },
              {
                heading: 'Monitor your downloads',
                text: 'You can monitor how our users react to your content  ',
                icon: monitorIcon,
              },
            ].map((item) => (
              <div
                key={item.heading}
                className='text-center 
                bg-white 
                shadow-md 
                px-5 
                md:py-8
                py-16 
                rounded-md 
                sm:w-[80%]
                w-1/3 
                md:h-[200px]
                border 
                border-gray-100'
              >
                <div
                  className='rounded-full 
                w-8 h-8 flex items-center justify-center bg-white shadow-md mx-auto'
                >
                  <Image src={item.icon} alt='' width={20} height={20} />
                </div>

                <h3
                  className='mt-3.5 
                mb-1 
                md:text-base
                text-xl 
                md:font-semibold
                font-medium 
                leading-6'
                >
                  {item.heading}
                </h3>

                <p
                  className='
                  md:font-normal
                  font-light 
                leading-4 
                md:text-xs
                text-sm'
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Question Section */}
        <section className='px-xPadding my-16'>
          <h1
            className='
          md:text-[18px]
          text-2xl 
          font-medium 
          text-center'
          >
            Do you have questions for us ? <br /> We are available to answer
            your questions{' '}
          </h1>

          <form className='mx-auto w-full border border-black mt-9 rounded-lg'>
            <input
              type='text'
              aria-multiline
              required
              placeholder='Type your questions'
              className='bg-offWhite 
              px-6
              py-7 
              w-full  
              placeholder:text-[#545454] 
              font-light 
              md:font-normal
                md:text-xs
              focus:outline-none'
            />

            <div className='px-6 py-3.5 w-[80%] md:w-full flex items-center gap-3 justify-between border-t border-black'>
              <input
                type='email'
                maxLength={40}
                placeholder='Your email address'
                required
                className='flex-1
                md:text-xs
                placeholder:text-[#545454]
                font-light 
                md:font-normal
                border-none 
                border-b-2 
                border-gray-500'
              />

              <button
                type='submit'
                className='py-2.5 px-10 border border-black font-medium rounded text-sm md:text-xs hover:bg-orange800 hover:text-white transition-all hover:border-orange800'
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        {/* CTA (Call to Action) Section*/}
        <section
          className='bg-offWhite 
        flex 
        sm:flex-col-reverse
        items-center 
        justify-center 
        gap-20
        py-24
        px-xPadding'
        >
          <div className='leading-6 gradient-collage rounded-[10px] flex flex-col gap-1 py-12 px-8 '>
            <h1 className='font-bold md:text-[18px] text-xl max-w-[388px]'>
              We welcome you to a world of creativity and exposure
            </h1>

            <p className='md:text-xs my-3 text-sm'>
              Trust us with your creativity and explore a new world
            </p>

            <button className='btn-main px-5 py-4 w-fit'>
              Become a verified contributor
            </button>
          </div>

          <Image src={ctaCollageImg} width={500} height={365} alt='' />
        </section>
      </div>

      <Footer />
    </>
  )
}
