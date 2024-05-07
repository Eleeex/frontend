import React from 'react';
import { TbTruckReturn } from 'react-icons/tb';
import about from '../assets/about.png';

const About = () => {
  return (
    <section className='max-padd-container py-12 xl:py-32'>
      {/* Container */}
      <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
        {/* Left side */}
        <div className='flex-1'>
          <h3 className='h3 capitalize'>Unveiling Our Product's Key Features!</h3>
          <p className='py-5 medium-15'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quia voluptates animi error! Harum numquam necessitatibus porro nemo praesentium tenetur cupiditate optio dicta a voluptatibus officia illum, ipsam tempora.
          </p>
          
          {/* Key Features */}
          <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 mt-8'>
            {/* Easy Returns Process */}
            <div className='text-center lg:text-left'>
              <div className='h-20 w-20 bg-secondary flex justify-center items-center rounded-md'>
                <TbTruckReturn className='text-white text-2xl' />
              </div>
              <div className='mt-4'>
                <h4 className='medium-18'>Easy Returns Process</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            
            {/* Secure Payment Options */}
            <div className='text-center lg:text-left'>
              <div className='h-20 w-20 bg-secondary flex justify-center items-center rounded-md'>
                <TbTruckReturn className='text-white text-2xl' />
              </div>
              <div className='mt-4'>
                <h4 className='medium-18'>Secure Payment Options</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            
            {/* Live Customer Support */}
            <div className='text-center lg:text-left'>
              <div className='h-20 w-20 bg-secondary flex justify-center items-center rounded-md'>
                <TbTruckReturn className='text-white text-2xl' />
              </div>
              <div className='mt-4'>
                <h4 className='medium-18'>Live Customer Support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side */}
        <div className='flex-1 flex justify-center items-center mt-12 xl:mt-0'>
          <img
            src={about}
            alt=''
            height={488}
            width={488}
            className='shadow-lg border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:shadow-xl hover:border-secondary'
          />
        </div>
      </div>

      {/* Add a horizontal line */}
      <hr className='mt-12 border-t border-gray-500' />
    </section>
  );
};

export default About;