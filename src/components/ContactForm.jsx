import React from 'react'
import Btn from './Btn'

function ContactForm() {
    return (
        <div>
            <div className='bg-indigo-200 dark:bg-indigo-900 rounded-2xl p-16 md:p-10'>
                <form className='grid grid-cols-1 grid-rows-3 gap-4' action="">
                    <input className='bg-transparent border-[2.5px] dark:border-white border-indigo-950 border-solid dark:text-white h-11 rounded-xl text-xl pl-1' type='Name' placeholder='Name' />
                    <input className="bg-transparent border-[2.5px] dark:border-white border-indigo-950 border-solid dark:text-white h-11 rounded-xl text-xl pl-1" type="email" placeholder="Email" />
                    <input className="bg-transparent border-[2.5px] dark:border-white border-indigo-950 border-solid dark:text-white h-11 rounded-xl text-xl pl-1" type="text" placeholder="subject" />
                    <textarea className="bg-transparent border-[2.5px] dark:border-white border-indigo-950 border-solid dark:text-white rounded-xl text-xl pl-1" rows="3" placeholder="Message.."></textarea>
                    <Btn text={'Send...'}/>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
