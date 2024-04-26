import React, { useEffect, useState } from 'react';

import { data } from 'autoprefixer';

const BlogPage = () => {
    const[blogs,setBlogs]=useState([]);
   
    
    useEffect(()=>{
        fetch('generated.json'
       
        )
          .then(function(response){
            
            return response.json();
          })
          .then(function(myJson) {
           
            setBlogs(myJson)
          }),[]})
        
    // console.log(blogs);
    return (
        <div>
            {/* category section */}
            {/* <div>Page Category</div> */}


            {/* blogcard section */}
            <div>
                This is the blog page
            </div>


            {/* Pagination */}
            {/* <div> Pagination</div> */}
        </div>
    );
};

export default BlogPage;