import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Muhammed Anas AK
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Passionate and self-taught MERN stack developer capable of learning and adopting the latest
          technologies. A solid mind to commit to tasks and responsibility to track and review progress until
          the committed job is completed. Possess a solid commitment to the team environment and enjoy
          working as a team member and independently.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          {/* Social icons */}
      <div className='flex lg:hidden  mt-10  top-[35%] '>
        <ul className='flex space-x-5'>
          <li className='w-[60px] h-[60px] flex justify-between items-center  bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between items-center  bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
             <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between items-center  bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center  bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
