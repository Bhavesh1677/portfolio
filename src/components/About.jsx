import React from 'react'
import Btn from './Btn'
import img2 from '../images/1.jpg'

function About() {
  return (
    <>
      <div id='about' className="flex justify-center items-center my-16">
        <div className='w-11/12 bg-indigo-200 dark:bg-indigo-900 rounded-[50px] py-10 px-7'>
          <div className='flex justify-center items-center my-8'>
            <div>
              <h1 className='text-4xl font-semibold'>About Me</h1>
            </div>
          </div>
          <div className='flex justify-around items-center px-16 my-10'>
            <div className='lg:w-1/2'>
              <div className='text-4xl my-5'>
                I am <span className='text-pink-600'>Bhavesh</span> and I'm a
                <span className="text-pink-600"> Web Developer.</span>
              </div>
              <p className='text-xl my-4'>
                Graduated with a Bachelor's degree in Bachelor of Computar
                Aplication as
                I completed my final year research-based project on
                Computational
                Fluid Dynamic Analysis on Helical Coil Heat Exchanger using
                ANSYS
                Fluent software and completed 6 months industry internship at
                Water
                Resource Department. I worked at WirCab Machines as a design
                engineer
                where I got proficient with AutoCAD and SolidWorks. Now I am
                a
                Full-Stack Web Developer and exploring the world of programming.
              </p>
              <Btn text={'Download Resume'}/>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <img className=' hidden lg:block lg:w-auto lg:h-[360px] rounded-[50px]' src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
