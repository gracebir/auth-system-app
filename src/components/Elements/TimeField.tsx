'use client'

type tInputProps = {
    type: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: any;
    value: string | number;
    name: string;
    touched?: boolean
    errorMsg?: string | undefined;
    label: string;
}

function TimeField({label, placeholder, type, touched, onChange, value,onBlur, errorMsg, name}:tInputProps) {
  return (
    <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="">{label}</label>
        <input name={name} value={value} onBlur={onBlur} className={`outline-none py-1 px-2 bg-very-dark text-white-color border ${touched===true && errorMsg ? 'border-red-800' : 'border-dark-color'} placeholder:text-gray-400`} type={type} placeholder={placeholder} onChange={onChange} />
        {errorMsg && touched && <span className='italic text-xs font-thin text-red-800'>{errorMsg}</span>}
     </div>
  )
}

export default TimeField