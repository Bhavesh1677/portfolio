import React from 'react' 
import Btn from './Btn'
import img1 from '../images/bg.png'

function Home() {

  return (
    <>
      <div id='home' className='flex md:flex-row flex-col justify-around items-center w-full my-14 px-16 top-0 md:pl-0 py-24'>
        <div className=' hidden md:block md:w-1/3'>
          <img className='w-11/12' src={img1} alt="" />
        </div>
        <div className='md:w-1/3 text-6xl md:text-5xl 2xl:text-6xl'>
          Hi, My Name is <span className='text-pink-600'>Bhavesh</span>
          <div>and I am a Passionate</div>
          <span className='text-pink-600'>Web Developer.</span><br />
          <Btn text={'GitHub'} link={'https://github.com/Bhavesh1677'}/>
        </div>
      </div>
    </>
  )
}

export default Home
