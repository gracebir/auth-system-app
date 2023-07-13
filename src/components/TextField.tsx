import React from 'react'
import { tInputType } from '../../typing'

function TextField({ label, placeholder, type, onChange, value,onBlur, errorMsg, name }: tInputType) {
  return (
      <div className="flex flex-col gap-2">
          <label htmlFor="">{label}</label>
          <input name={name} value={value} onBlur={onBlur} className={`outline-none py-2 px-3 bg-very-dark text-white-color border ${errorMsg ? 'border-red-800' : 'border-dark-color'} placeholder:text-gray-400`} type={type} placeholder={placeholder} onChange={onChange} />
          {errorMsg && <span className='text-sm font-thin text-red-800'>{errorMsg}</span>}
      </div>
  )
}

export default TextField
