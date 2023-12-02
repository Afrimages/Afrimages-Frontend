import Image from 'next/image';

import infoIcon from '@/public/svg/info.svg';

type InputTextProps = {
    label: string;
    name: string;
};

type InputSelectProps = {
    label: string;
    name: string;
    options: string[];
};

export function InputText({ label, name }: InputTextProps) {
    return (
        <div>
            <div className='flex items-center justify-between text-lg font-medium leading-7'>
                <label htmlFor={name}>{label}</label>

                <button>
                    <Image src={infoIcon} alt='' />
                </button>
            </div>

            <input
                type='text'
                name={name}
                id={name}
                className='border-2 border-grey500 rounded-[10px] mt-1.5 px-3 py-3 w-full font-bold text-grey600 bg-transparent'
            />
        </div>
    );
}

export function InputSelect({ label, name, options }: InputSelectProps) {
    return (
        <div>
            <div className='flex items-center justify-between text-lg font-medium leading-7'>
                <label htmlFor={name}>{label}</label>

                <button>
                    <Image src={infoIcon} alt='' />
                </button>
            </div>

            <select
                name={name}
                id={name}
                className='border-2 border-grey500 rounded-[10px] mt-1.5 px-3 py-3 w-full font-bold text-grey600 appearance-none bg-transparent'
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export function InputCheckbox({ label, name }: InputTextProps) {
    return (
        <div className='flex items-center justify-between text-lg font-medium leading-7 py-1 gap-4'>
            <label htmlFor={name} className='text-black'>
                {label}
            </label>

            <input
                type='checkbox'
                name={name}
                id={name}
                className='h-[18px] w-[18px] border-2 border-[#49454F] bg-transparent'
            />
        </div>
    );
}
