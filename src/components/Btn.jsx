import React from 'react'

function Btn({text,link}) {
  return (
    <div>
        <a 
            className='
                no-underline 
                inline-block 
                bg-gradient-to-r from-pink-400 to-violet-500
                text-white
                text-xl 
                py-2 
                px-12 
                my-4 
                font-normal 
                rounded-[50px]
                hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-400
                transition-all
                duration-300'
            href={link}>
            {text}
        </a>
    </div>
  )
}

export default Btn
