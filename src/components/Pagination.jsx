import React from 'react'

function Pagination({handlePageChange, currentPage, blogsData, blogShowPerPage}) {
    const totalPage = Math.ceil(blogsData.length / blogShowPerPage)
    // console.log(totalPage);
    const renderPaginationLink = () =>{
       return  Array.from({length:totalPage},(_,i)=> i+1).map((pageNumber) =>(
        <li className={pageNumber === currentPage ? "activePagination": ""} key={pageNumber}>
                    <a className='flex px-2 py-1 border-[#ccc] border-[1px] rounded text-black hover:bg-[#aaa]' href='#' onClick={()=>handlePageChange(pageNumber)}>{pageNumber}</a>
                </li>
            ))
    }
  return (
    <ul className=' flex flex-wrap gap-4 justify-center items-center list-none m-0 p-0 my-8 '>
        <li>
            <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}>Prev</button>
        </li>
        <div className='flex gap-2'>{renderPaginationLink()}</div>
        <li>
            <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage=== totalPage}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination