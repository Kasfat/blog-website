import React, { useEffect, useState } from "react";
import ApiData from "../services/GlobalApi";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";

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
  }, [currentPage, blogShowPerPage, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section */}
      <div>page category</div>

      {/* blog card section */}
      <div>
        <BlogCards
          blogsData={blogsData}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          blogShowPerPage={blogShowPerPage}
        />
      </div>

      {/* pagination section */}
      <div>
        <Pagination handlePageChange = {handlePageChange}  currentPage={currentPage} blogsData={blogsData} blogShowPerPage={blogShowPerPage}/>
      </div>
    </div>
  );
}

export default BlogPage;
