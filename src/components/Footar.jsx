import React from 'react'

function Footar() {
  return (
    <>
      <div className='h-20 flex justify-around items-center bg-indigo-200 dark:bg-indigo-900 text-black dark:text-white'>
        <div className='text-center text-black dark:text-white'>© Copyright 2024. All Rights Reserved</div>
        <div className='flex justify-center items-center py-1'>
            <i className="fa-brands fa-instagram px-6 text-3xl hover:text-pink-600 cursor-pointer"></i>
            <i className="fa-brands fa-github px-6 text-3xl hover:text-pink-600 cursor-pointer"></i>
            <i className="fa-brands fa-linkedin px-6 text-3xl hover:text-pink-600 cursor-pointer"></i>
            <i className="fa-brands fa-facebook px-6 text-3xl hover:text-pink-600 cursor-pointer"></i>
        </div>
      </div>
    </>
  )
}

export default Footar
