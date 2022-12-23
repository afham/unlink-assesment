import React from 'react'
import AppLayout from '../../components/layouts/AppLayout'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAllHistory } from '../../redux/action/history';
import { useEffect , useState } from 'react';
import Pagination from '../../components/common/Pagination';
import moment from 'moment'

function History() {
    const dispatch = useDispatch()
	const state = useSelector((state)=>state.historyReducer);

    
	useEffect(()=>{
		dispatch(fetchAllHistory());
	},[])


    const [searchColumn , setSearchColumn] = useState('title')
    const [searchText , setSearchText] = useState('')
    
    //-------------------Pagination-------------------------------

    
    const [currentPage,setCurrentPage]=useState(1)
    const [limitPerPage,setLimitPerPage]=useState(5)
    const startIndex = ((currentPage-1)*limitPerPage)
    const endIndex = ((currentPage-1)*limitPerPage)+limitPerPage

    let searchedData =[] 
    if(state?.data){
        searchedData=state?.data?.filter((el)=>(el[searchColumn]?.toString()?.toLowerCase().includes(searchText.toLowerCase()) ))
    }


    const paginatedData = searchedData?.slice(startIndex,endIndex)
    console.log("🚀 ~ paginatedData", paginatedData)

    const changeCurrentPage = (type) => {
        const noOfPages = Math.ceil((searchedData?.length) / limitPerPage);
        if(type==="next"){
            if(currentPage===noOfPages) return
                setCurrentPage((prev)=>prev+1)
            }
        else if(type==="prev"){
            if(currentPage===1) return
                setCurrentPage((prev)=>prev-1)
            }
        else{
            setCurrentPage(type)
        }
    }


 

    return (
        <AppLayout>
            {
                state?.loading &&
                <div className='d-flex justify-content-center align-items-center my-5'>
                <div class="spinner-border" role="status">
                </div>
                </div>
            }
            {
            state?.data &&
            <>
            <div className='d-flex justify-content-end align-items-center'>
                <select class="form-select me-2" aria-label="Default select example"  onChange={(e)=>{setSearchColumn(e.target.value)}}>
                    <option value="title">Title</option>
                    <option value="details">Details</option>
                    <option value="flight_number">Flight No.</option>
                </select>
                <input class="form-control my-3" type="text" placeholder="Search" onChange={(e)=>setSearchText(e.target.value)} style={{width:"150px"}}></input>
            </div>
            <table class="table table-bordered mb-3">
                <thead>
                    <tr>
                    <th scope="col" style={{width:"10px"}}>Sl No.</th>
                    <th scope="col" style={{width:"170px"}}>Title</th>
                    <th scope="col" style={{width:"170px"}}>Event Date</th>
                    <th scope="col" style={{width:"10px"}}>Flight No</th>
                    <th scope="col">Details</th>
                    <th scope="col" style={{width:"120px"}}>Links</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData?.length===0 && <tr><td className="text-center" colSpan={6}>No data found</td></tr>}
                    {
                       paginatedData ? paginatedData?.map((el,ind)=>(
                            <tr key={el?.id}>
                                <td><div style={{height:"70px" }}>{startIndex+ind+1}</div></td>
                                <td><div style={{height:"70px" }}>{el?.title}</div></td>
                                <td><div style={{height:"70px" }}>{ moment.utc(el.event_date_utc).format("DD-MM-YYYY") }</div></td>
                                <td><div style={{height:"70px" }}>{el?.flight_number}</div></td>
                                <td><div style={{height:"70px" , overflow:"auto" }}>{el?.details}</div></td>
                                <td>
                                {
                                    <div className='d-flex flex-column'>
                                        {el?.links?.reddit && <a href={el?.links?.reddit}>Reddit</a>}
                                        {el?.links?.article &&<a href={el?.links?.article}>Article</a>}
                                        {el?.links?.wikipedia && <a href={el?.links?.wikipedia}>Wikipidea</a>}
                                    </div>
                                }
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={5}>No Data Found</td>
                        </tr>
                    }
                </tbody>
            </table>
            <Pagination  currentPage={currentPage} limitPerPage={limitPerPage} data={searchedData}  changeCurrentPage={changeCurrentPage} />
            </>
            }
        </AppLayout>
    )
}

export default History