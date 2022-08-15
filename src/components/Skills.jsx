import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import PostgreSQL from '../assets/new/psql.png'
import Bootstrap from '../assets/new/bootstrap.png'
import Figma from '../assets/new/figma.png'
import Express from '../assets/new/express.png'
import Jquery from '../assets/new/jquery.png'
import MUI from '../assets/new/mui.png'
import Nginx from '../assets/new/nginx.png'
import Photoshop from '../assets/new/Photoshop.svg'
import Redux from '../assets/new/redux.png'
import API from '../assets/new/api.png'
import Sass from '../assets/new/sass.png'
import Styled from '../assets/new/styled.png'



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#E44D26] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#0277BD] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#FFD600] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#00D7FE] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#764ABC] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Redux} alt="HTML icon" />
                        <p className='my-4'>Redux</p>
                    </div>
                    <div className='shadow-md shadow-[#eeeeee] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#8CC84B] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#828282] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                        <p className='my-4'>Express</p>
                    </div>
                    <div className='shadow-md shadow-[#4CAF50] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#2F6792] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PostgreSQL} alt="HTML icon" />
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#FFC400] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#44A8B3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#764ABC] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#007FFF] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MUI} alt="HTML icon" />
                        <p className='my-4'>MUI</p>
                    </div>
                    <div className='shadow-md shadow-[#F24E1E] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Figma} alt="HTML icon" />
                        <p className='my-4'>Figma</p>
                    </div>
                    <div className='shadow-md shadow-[#eeeeee] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                        <p className='my-4'>AWS</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
