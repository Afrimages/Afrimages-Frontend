'use client';

import { useState } from 'react';
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
import eyeIcon from '@/public/svg/eye.svg';
import lockIcon from '@/public/svg/lock.svg';
import Navbar from '@/components/ui/Navbar';

export default function Upload() {
    const [active, setActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [formData, setFormData] = useState({
        userTitle: '',
        userDetails: '',
        userTools: '',
        userImgCatog: '',
        userVisibilty: '',
        userLicense: '',
        userRating: false,
        userPermission: false,
        userAgree: false,
    });

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        // Set the selected file to state
        setSelectedFile(file);

        setActive(true);
    };

    const handleInputChange = (name: string, value: string | boolean) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form Submitted');
    };

    return (
        <>
        <Navbar />
        <main className='px-6 bg-grey100 rounded-[10px] font-lato lg:grid lg:grid-cols-[70%_30%] lg:gap-6 lg:px-[100px] lg:py-8 mt-16'>
            {!active ? (
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
                                        onChange={handleFileInputChange}
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
            ) : null}

            {/* This section displays data as it's inputted in the Form  */}
            {active ? (
                <InputDisplay formData={formData} selectedFile={selectedFile} />
            ) : null}

            <form
                onSubmit={handleSubmit}
                className='mt-6 pb-8 space-y-4 lg:bg-white lg:mt-0 lg:py-7 lg:px-5'
            >
                <div className='grid gap-4 md:grid-cols-2 mb-4 lg:grid-cols-1'>
                    {[
                        { label: 'Image Title', name: 'userTitle' },
                        {
                            label: 'Short details about the image',
                            name: 'userDetails',
                        },
                        { label: 'Tools Used', name: 'userTools' },
                    ].map((item) => (
                        <InputText
                            key={item.label}
                            label={item.label}
                            name={item.name}
                            onChange={handleInputChange}
                        />
                    ))}

                    {[
                        {
                            label: 'Image Categories',
                            name: 'userImgCatog',
                            options: ['Select a category', 'Food', 'Travel'],
                        },
                        {
                            label: 'Afrimage Visibility',
                            name: 'userVisibility',
                            options: ['Select an option', 'Everyone', 'Nobody'],
                        },
                        {
                            label: 'License',
                            name: 'userLicense',
                            options: ['Select an option', 'Free', 'Paid'],
                        },
                    ].map((item) => (
                        <InputSelect
                            key={item.label}
                            label={item.label}
                            name={item.name}
                            options={item.options}
                            onChange={handleInputChange}
                        />
                    ))}
                </div>

                {[
                    {
                        label: 'This image contains Adult content',
                        name: 'userRating',
                    },
                    {
                        label: 'I upload image I own the right to',
                        name: 'userPermission',
                    },
                ].map((item) => (
                    <InputCheckbox
                        key={item.label}
                        label={item.label}
                        name={item.name}
                        onChange={handleInputChange}
                    />
                ))}

                {/* Custom Checkbox comp */}
                <div className='flex items-center justify-between text-lg font-medium leading-7 py-1 gap-4'>
                    <label htmlFor='userAgree' className='text-black'>
                        I Agree to all{' '}
                        <a href='' className='text-green700'>
                            Afrimage content policy
                        </a>
                    </label>

                    <input
                        type='checkbox'
                        name='userAgree'
                        id='userAgree'
                        onChange={(e) =>
                            handleInputChange('userAgree', e.target.checked)
                        }
                        className='form-checkbox h-[18px] w-[18px] border-2 border-[#49454F] bg-transparent cursor-pointer rounded-sm checked:bg-orange700 focus:bg-orange700 focus:outline-orange700 checked:hover:bg-orange700 checked:focus:bg-orange700'
                    />
                </div>

                {/* Actions Button */}
                <div className='space-y-3 md:flex md:flex-row-reverse items-center justify-center md:gap-4 md:space-y-0 pt-5 md:py-8'>
                    <FormButton
                        type='main'
                        className='flex items-center justify-center gap-2'
                    >
                        <Image src={uploadIcon} alt='' width={24} height={24} />
                        Publish
                    </FormButton>

                    <FormButton type='outline'>Save To Draft</FormButton>

                    <FormButton type='plain'>Cancel</FormButton>
                </div>
            </form>
        </main>
        </>
    );
}

type InputDisplayProps = {
    formData: {
        userDetails: string;
        userImgCatog: string;
        userTitle: string;
        // userVisibility: string;
        // userLicense: string;
    };
    selectedFile: any;
};

function InputDisplay({ formData, selectedFile }: InputDisplayProps) {
    return (
        <section className='bg-white  py-8 px-2 rounded-[10px] flex flex-col justify-end gap-4 md:px-9 md:py-6 lg:gap-2 h-full'>
            <Image
                src={selectedFile}
                alt='Selected File'
                className='bg-red-400 flex-1'
            />

            <div className='leading-6'>
                <h3 className='text-sm text-grey600 leading-6 font-medium'>
                    Title
                </h3>
                <p className='text-black font-bold min-h-[24px]'>
                    {formData.userTitle}
                </p>
            </div>

            <div className='leading-6'>
                <h3 className='text-sm text-grey600 leading-6 font-medium'>
                    Details of the image
                </h3>
                <p className='text-black font-bold min-h-[24px]'>
                    {formData.userDetails}
                </p>
            </div>

            <div className='leading-6'>
                <h3 className='text-sm text-grey600 leading-6 font-medium'>
                    Image Categories
                </h3>
                <p className='text-black font-bold min-h-[24px]'>
                    {formData.userImgCatog}
                </p>
            </div>

            <div className='flex items-center gap-9 font-medium text-lg leading-7'>
                <div className='flex items-center gap-1'>
                    {/* TODO: Set Logic to change Icon and text based on user license */}
                    <Image src={lockIcon} alt='' width={24} height={24} />
                    <p className='text-success'>Free</p>
                </div>
                <div className='flex items-center gap-1'>
                    {/* TODO: Set Logic to change icon and text based on user Visibility */}
                    <Image src={eyeIcon} alt='' width={24} height={24} />
                    <p className='text-grey900'>Everyone</p>
                </div>
            </div>
        </section>
    );
}
