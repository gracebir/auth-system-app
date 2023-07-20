'use client';

export const Button = ({handleClick, text}:{handleClick?: ()=> void, text:string}) => {
  return (
    <button type='submit' onClick={handleClick} className="bg-blue-color px-6 lg:px-7 py-1 lg:py-2 rounded-lg font-semibold">{text}</button>
  )
}
