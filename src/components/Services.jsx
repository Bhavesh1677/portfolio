import React from 'react'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <>
      <div id='services' className='flex justify-center items-center py-24'>
        <div>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>My Services</h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center h-auto w-full'>
                <ServicesCard 
                iName={'fas fa-code'} 
                cardText={'Web Development'}
                pText={'Using Front-End libraries, I buid fast, iteractive wevsites. I use Node JS and Express app in Back-End side.'}  
                />
                <ServicesCard 
                iName={'fas fa-industry'}
                cardText={'CAD Design'}
                pText={'I have a working knowledge of drafting mechanicel drawings and careating 3D models in solidwork.'}
                />
                <ServicesCard
                iName={'fas fa-chart-bar'}
                cardText={'Data Insights'}
                pText={'I am currently getting fimiliar with data science and mechine learning technologies.'}
                />
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
