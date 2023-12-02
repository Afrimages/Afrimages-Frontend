import Image from 'next/image';

import {
    InputText,
    InputSelect,
    InputCheckbox,
} from '@/components/ui/FormInputs';

import { FormButton } from '@/components/ui/FormButtons';

import videoIcon from '@/public/svg/video.svg';
import imageIcon from '@/public/svg/image.svg';
import collectionIcon from '@/public/svg/collection.svg';
import uploadIcon from '@/public/svg/upload.svg';

export default function Upload() {
    return (
        <main className='px-6 bg-grey100 rounded-[10px] font-lato lg:grid lg:grid-cols-[70%_30%] lg:gap-6 lg:px-[100px] lg:py-8'>
            <div className='text-center flex flex-col items-center justify-center gap-7 bg-white min-h-[90dvh] '>
                <div>
                    <h1 className='font-bold text-[1.75rem] leading-[2.5rem]'>
                        Upload Content
                    </h1>

                    <p className='text-orange700 text-sm leading-6 font-medium'>
                        Upload the Image you want to share on afrimage
                    </p>
                </div>

                <div className='flex items-center justify-center gap-6'>
                    {[
                        {
                            label: 'Video',
                            name: 'user-video',
                            accept: 'video/*',
                            multiple: false,
                            iconUrl: videoIcon,
                        },
                        {
                            label: 'Image',
                            name: 'user-img',
                            accept: 'image/*',
                            multiple: false,
                            iconUrl: imageIcon,
                        },
                        {
                            label: 'Collection',
                            name: 'user-collection',
                            multiple: true,
                            iconUrl: collectionIcon,
                        },
                    ].map((item) => (
                        <div key={item.label} className='w-fit'>
                            <label
                                htmlFor={item.name}
                                className='bg-orange400 rounded-xl w-[4.25rem] h-[4.25rem] flex items-center justify-center cursor-pointer'
                            >
                                <Image src={item.iconUrl} alt='' />

                                <input
                                    type='file'
                                    name={item.name}
                                    id={item.name}
                                    accept={item.accept || undefined}
                                    multiple={item.multiple}
                                    className='hidden'
                                />
                            </label>

                            <p className='text-orange700 mt-1 font-medium text-sm leading-6'>
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <form
                action=''
                className='mt-6 pb-8 space-y-4 lg:bg-white lg:mt-0 lg:py-7 lg:px-5'
            >
                <div className='grid gap-4 md:grid-cols-2 mb-4 lg:grid-cols-1'>
                    {[
                        { label: 'Image Title', name: 'user-title' },
                        {
                            label: 'Short details about the image',
                            name: 'user-details',
                        },
                        { label: 'Tools Used', name: 'user-tools' },
                    ].map((item) => (
                        <InputText
                            key={item.label}
                            label={item.label}
                            name={item.name}
                        />
                    ))}

                    {[
                        {
                            label: 'Image Categories',
                            name: 'user-img-catog',
                            options: ['Select a category', 'Food', 'Travel'],
                        },
                        {
                            label: 'Afrimage Visibility',
                            name: 'user-visibility',
                            options: ['Select an option', 'Everyone', 'Nobody'],
                        },
                        {
                            label: 'License',
                            name: 'user-license',
                            options: ['Select an option', 'Free', 'Paid'],
                        },
                    ].map((item) => (
                        <InputSelect
                            key={item.label}
                            label={item.label}
                            name={item.name}
                            options={item.options}
                        />
                    ))}
                </div>

                {[
                    {
                        label: 'This image contains Adult content',
                        name: 'user-rating',
                    },
                    {
                        label: 'I upload image I own the right to',
                        name: 'user-permission',
                    },
                ].map((item) => (
                    <InputCheckbox
                        key={item.label}
                        label={item.label}
                        name={item.name}
                    />
                ))}

                {/* Custom Checkbox comp */}
                <div className='flex items-center justify-between text-lg font-medium leading-7 py-1 gap-4'>
                    <label htmlFor='user-agree' className='text-black'>
                        I Agree to all{' '}
                        <a href='' className='text-green700'>
                            Afrimage content policy
                        </a>
                    </label>

                    <input
                        type='checkbox'
                        name='user-agree'
                        id='user-agree'
                        className='h-[18px] w-[18px] border-2 border-[#49454F] bg-transparent'
                    />
                </div>

                {/* Actions Button */}
                <div className='space-y-3 md:flex md:flex-row-reverse items-center justify-center md:gap-4 md:space-y-0 pt-5 md:py-8'>
                    <FormButton
                        type='main'
                        className='flex items-center justify-center gap-2'
                    >
                        <Image src={uploadIcon} alt='' />
                        Publish
                    </FormButton>

                    <FormButton type='outline'>Save To Draft</FormButton>

                    <FormButton type='plain'>Cancel</FormButton>
                </div>
            </form>
        </main>
    );
}
