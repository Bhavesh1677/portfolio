import React from 'react'
import ContactFields from './ContactFields'
import ContactForm from './ContactForm'



function Contact() {
  return (
    <div id='contact'>
      <div className='flex justify-center items-center py-24'>
        <div className="contact">

          <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center w-full my-12'>

            <div className='mx-5 w-3/4 md:w-2/5 flex flex-row md:flex-col'>
              <div>
                <div className='text-3xl text-pink-600 font-semibold my-5'>
                  Don't be shy
                </div>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              </div>
              <div>
                <ContactFields iName={"fa-solid fa-user"} title={"Name : "} pText={"Bhavesh Vinod Pawar"} />
                <ContactFields iName={"fa-solid fa-location-dot"} title={"Address :"} pText={"Jalgaon, maharashtra"} />
                <ContactFields iName={"fa-solid fa-envelope i"} title={"Email :"} pText={"pawarbhavesh16@gmail.com"} />
              </div>
            </div>

            <div className='mx-5 w-3/4 md:w-2/5'>
              <ContactForm />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
