import React, { useEffect, useState } from "react";
import ApiData from "../services/GlobalApi";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

function BlogPage() {
  const [blogsData, setBlogsData] = useState([]);
  const [isError, setIsError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogShowPerPage = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  console.log(ApiData);
  const getBlogsData = async () => {
    try {
        let modifiedApiData = ApiData;
      
     
        const res = await modifiedApiData.get(
          `/blogs?page=${currentPage}&limit=${blogShowPerPage}`
        );
        //fillter by category
        if (selectedCategory) {
          modifiedApiData += `&category=${selectedCategory}`;
        }
      setBlogsData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getBlogsData();
    console.log(selectedCategory);
  }, [currentPage, blogShowPerPage, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  // console.log(blogsData);

  return (
    <div>
      {/* category section */}
      <div><CategorySelection onSelectCategory = {handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>

      
      <div className=" flex flex-col lg:flex-row gap-8">
        {/* blog card component */}
        <BlogCards
          blogsData={blogsData}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          blogShowPerPage={blogShowPerPage}
        />
{/* sidebar  component */}
        <Sidebar/>
      </div>

      {/* pagination section */}
      <div>
        <Pagination handlePageChange = {handlePageChange}  currentPage={currentPage} blogsData={blogsData} blogShowPerPage={blogShowPerPage}/>
      </div>
    </div>
  );
}

export default BlogPage;
