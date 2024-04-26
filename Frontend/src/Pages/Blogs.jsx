import React from 'react';
import BlogPage from '../Components/BlogPage';

const Blogs = () => {
    
    return (
        <div>
        <div className='py-40 bg-black text-center text-white px-4'>
           <h2 className='text-5xl lg:text-6xl leading-snug font-bold mt-6'>All Blogs are here</h2>
       </div>
       <div className='max-w-7xl mx-auto'>
           {/* all blogs container */}
           <BlogPage></BlogPage>
       </div>
      </div>
    );
};

export default Blogs;