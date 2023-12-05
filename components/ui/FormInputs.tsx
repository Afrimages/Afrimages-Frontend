import Image from 'next/image';

import infoIcon from '@/public/svg/info.svg';

type InputTextProps = {
    label: string;
    name: string;
    onChange: (name: string, value: string | boolean) => void;
};

type InputSelectProps = {
    label: string;
    name: string;
    options: string[];
    onChange: (name: string, value: string | boolean) => void;
};

export function InputText({ label, name, onChange }: InputTextProps) {
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
                onChange={(e) => onChange(name, e.target.value)}
                className='border-2 border-grey500 rounded-[10px] mt-1.5 px-3 py-3 w-full font-bold text-grey600 bg-transparent'
            />
        </div>
    );
}

export function InputSelect({
    label,
    name,
    options,
    onChange,
}: InputSelectProps) {
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
                onChange={(e) => onChange(name, e.target.value)}
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

export function InputCheckbox({ label, name, onChange }: InputTextProps) {
    return (
        <div className='flex items-center justify-between text-lg font-medium leading-7 py-1 gap-4'>
            <label htmlFor={name} className='text-black'>
                {label}
            </label>

            <input
                type='checkbox'
                name={name}
                id={name}
                onChange={(e) => onChange(name, e.target.checked)}
                className='form-checkbox h-[18px] w-[18px] border-2 border-[#49454F] bg-transparent cursor-pointer rounded-sm checked:bg-orange700 focus:bg-orange700 focus:outline-orange700 checked:hover:bg-orange700 checked:focus:bg-orange700'
            />
        </div>
    );
}
