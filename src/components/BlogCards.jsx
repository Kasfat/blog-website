import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BlogCards({blogsData, currentPage, selectedCategory,blogShowPerPage}) {
  console.log(blogsData);
  console.log(currentPage);
  console.log(selectedCategory);
  console.log(blogShowPerPage);
    const filteredBlogs = blogsData.filter((value) => !selectedCategory || value.category === selectedCategory)
    .slice((currentPage-1)*blogShowPerPage, currentPage*blogShowPerPage)
    console.log(filteredBlogs);console.log(selectedCategory);

  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
        {filteredBlogs.map((value,index)=> <Link key={index} className=' p-5 shadow-lg rounded-lg cursor-pointer'>
            <div>
            <img src={value.image} alt='' className=' w-full'/>
        </div>
        <h3 className=' mt-4 mb-2 font-bold cursor-pointer hover:text-blue-500'>{value.title}</h3>
        <div><p className=' mb-2 text-gray-600'><FaUser className=' inline-flex items-center mr-2 mb-1'/>{value.author}</p></div>
        <p className=' text-gray-500 text-sm'>Published: {value.published_date}</p>
        </Link>)}
        
    </div>
  )
}

export default BlogCards