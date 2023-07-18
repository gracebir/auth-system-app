import React from 'react'

type tInputProps = {
    type: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: any;
    value: string | number;
    name: string;
    errorMsg?: string | undefined;
    label: string;
}

function TextField({label, placeholder, type, onChange, value,onBlur, errorMsg, name}:tInputProps) {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor="">{label}</label>
        <input name={name} value={value} onBlur={onBlur} className={`outline-none py-2 px-3 bg-very-dark text-white-color border ${errorMsg ? 'border-red-800' : 'border-dark-color'} placeholder:text-gray-400`} type={type} placeholder={placeholder} onChange={onChange} />
        {errorMsg && <span className='text-sm font-thin text-red-800'>{errorMsg}</span>}
     </div>
  )
}

export default TextField
