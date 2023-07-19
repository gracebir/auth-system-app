'use client';

type typeDayInput = {
   isEnable?: boolean
   startDay: string
   endDay: string 
}

const BoxDay = ({isEnable}: typeDayInput) => {
  return (
    <div>
      {isEnable ? (
        <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button></button>
        </div>
      ): (
        <div>

        </div>
      )}
    </div>
  )
}

export default BoxDay
