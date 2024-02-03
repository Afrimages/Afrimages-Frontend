type FormButtonProps = {
    type: 'main' | 'outline' | 'plain';
    className?: string;
    children: React.ReactNode;
    submit?: Boolean
};

export function FormButton({ children, type, className, submit }: FormButtonProps) {
    let styling;

    // Styles Button depending on its type
    switch (type) {
        case 'main':
            styling = 'bg-orange700 text-grey100';
            break;
        case 'outline':
            styling = 'text-orange700 border-2 border-orange700';
            break;

        default:
            styling = 'text-orange700';
            break;
    }
    return (
        <button
        type={submit ? "submit" : "button"}
            className={`w-full rounded py-3 md:w-full font-medium text-sm text-center leading-6 ${styling} ${className}`}
        >
            {children}
        </button>
    );
}
