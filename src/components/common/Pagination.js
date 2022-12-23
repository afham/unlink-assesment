import React from 'react'

function Pagination( { currentPage , limitPerPage , data , changeCurrentPage }) {
    
    const noOfPages = Math.ceil((data ? data.length : 0) / limitPerPage);

    const pages=new Array(noOfPages).fill().map((el,index)=>index+1).filter((el,index,arr)=>{
        if(noOfPages<=5){
            return index <=5;
        }
        else{
            if(currentPage==1 || currentPage==2 ||currentPage==3 ){
                return el<5 || el===arr.length
            }
            else if(currentPage===arr.length || currentPage===arr.length-1 || currentPage===arr.length-2  ){
                return el>arr.length-4 || el===1
            }
            else{
                return el===currentPage-1 || el===currentPage+1 || el===currentPage ||el===arr.length || el===1
            }
        }
    })
    return (
        <div className="pagination-wrapper mt-2">
            <nav aria-label="...">
            <ul className="pagination  justify-content-center investor-table-pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous"  onClick={()=>changeCurrentPage('prev')}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    pages.map((el,index)=>{
                        if(noOfPages>5){
                            if(currentPage==1 || currentPage==2 ||currentPage==3 ){
                                return(
                                    <>
                                        <li key={el} className={`page-item ${el===currentPage && 'active' }`}>
                                                <a className='page-link' onClick={()=>changeCurrentPage(el)}>{el}</a>
                                        </li>
                                        { index==3 && <span style={{margin:"0px 10px"}}>....</span> }
                                    </>)
                            }
                            else if(currentPage===noOfPages || currentPage===noOfPages-1 || currentPage===noOfPages-2  ){
                                return(
                                    <>
                                        <li key={el} className={`page-item ${el===currentPage && 'active' }`}>
                                                <a className='page-link'onClick={()=>changeCurrentPage(el)}>{el}</a>
                                        </li>
                                        { index==0 && <span style={{margin:"0px 10px"}}>....</span> }
                                    </>)
                            }
                            else{
                                return(
                                    <>
                                        <li key={el} className={`page-item ${el===currentPage && 'active' }`}>
                                                <a className='page-link'onClick={()=>changeCurrentPage(el)}>{el}</a>
                                        </li>
                                        { index==3 && <span style={{margin:"0px 10px"}}>....</span> }
                                        { index==0 && <span style={{margin:"0px 10px"}}>....</span> }
                                    </>)
                            }
                        }
                        return <li key={el} className={`page-item ${el===currentPage && 'active' }`}><a className='page-link'onClick={()=>changeCurrentPage(el)}>{el}</a></li>
                    })
                }
                 <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" onClick={()=>changeCurrentPage('next')}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
           
            </ul>
            </nav>
        </div>
    )
}

export default Pagination