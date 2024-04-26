import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='px-4 py-32 mx-auto mb-9' style={{ backgroundSize: 'cover',backgroundImage: 'url("https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?cs=srgb&dl=pexels-freestockpro-2166553.jpg&fm=jpg")' }}>
            <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-6xl leading-snug font-bold mt-6'>Search your favorite Location </h1>
                <p className='text-gray-700 lg:3/5 mx-auto mt-5 font-primary'>This website is made for the tour lover and they can find any tourist spot easily from here<span className='text-amber-600'>.........</span> </p>
                <div className='mt-5'>
                    <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Learn More  <FaArrowRight className='ml-1'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;