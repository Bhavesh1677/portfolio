import React from 'react'

function ServicesCard({iName, cardText, pText}) {
  return (
    <>
      <div className='flex justify-center items-center w-3/4 lg:w-1/4 h-80 my-6 lg:my-12 mx-5 rounded-3xl bg-indigo-200 dark:bg-indigo-900 transition-all'>
        <div className='flex flex-col justify-center items-center transition-all'>
            <i className={`text-5xl my-3 text-yellow-500 ${iName}`}></i>
            <div className='text-3xl my-3 font-semibold text-pink-600 m'>{cardText}</div>
            <p className='mx-12'>{pText}</p>
        </div>
      </div>
    </>
  )
}

export default ServicesCard
