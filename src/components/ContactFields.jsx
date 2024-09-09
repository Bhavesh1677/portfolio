import React from 'react'

function ContactFields({iName, title, pText}) {
    return (
        <div>
            <div className='flex items-center md:my-2'>
                <i className={`text-4xl text-yellow-500 my-5 mx-4 ${iName}`}></i>
                <div>
                    <h3 className='text-2xl text-pink-600 font-semibold'>{title}</h3>
                    <p>{pText}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactFields
