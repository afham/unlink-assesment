import React from 'react'
import AppLayout from '../../components/layouts/AppLayout'
import { fetchAllAddress } from '../../redux/action/address';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect , useState } from 'react';
import Pagination from '../../components/common/Pagination';

function Address() {
  const dispatch = useDispatch()
	const state = useSelector((state)=>state.addressReducer);

     
	useEffect(()=>{
		dispatch(fetchAllAddress());
	},[])

  
  const [searchColumn , setSearchColumn] = useState('payload_id')
  const [searchText , setSearchText] = useState('')
  

  //-------------------Pagination-------------------------------

  
  const [currentPage,setCurrentPage]=useState(1)
  const [limitPerPage,setLimitPerPage]=useState(5)
  const startIndex = ((currentPage-1)*limitPerPage)
  const endIndex = ((currentPage-1)*limitPerPage)+limitPerPage

  let searchedData =[] 
  if(state?.data){
      searchedData=state?.data?.filter((el)=>( el[searchColumn]?.toString()?.toLowerCase().includes(searchText.toLowerCase())))
  }


  const paginatedData = searchedData?.slice(startIndex,endIndex)

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
            <select class="form-select me-2" aria-label="Default select example" onChange={(e)=>{setSearchColumn(e.target.value)}}>
                <option value="payload_id">Payload Id</option>
                <option value="nationality">Nationality</option>
                <option value="manufacturer">Manufacturer</option>
            </select>
            <input class="form-control my-3" type="text" placeholder="Search" onChange={(e)=>setSearchText(e.target.value)} style={{width:"150px"}}></input>
        </div>
        <table class="table table-bordered mb-3">
            <thead>
                <tr>
                <th scope="col" style={{width:"10px"}}>Sl No.</th>
                <th scope="col" style={{width:"170px"}}>Payload Id</th>
                <th scope="col" style={{width:"170px"}}>Nationality</th>
                <th scope="col" style={{width:"170px"}}>Manufacture</th>
                <th scope="col" style={{width:"17px"}}>Payload Mass</th>
                <th scope="col" style={{width:"120px"}}>Orbit</th>
                </tr>
            </thead>
            <tbody>
                {paginatedData?.length===0 && <tr><td className="text-center" colSpan={6}>No data found</td></tr>}
                {
                    paginatedData ? paginatedData?.map((el,ind)=>(
                        <tr key={el?.id}>
                            <td><div style={{height:"70px" }}>{startIndex+ind+1}</div></td>
                            <td><div style={{height:"70px" }}>{el?.payload_id}</div></td>
                            <td><div style={{height:"70px" }}>{el.nationality}</div></td>
                            <td><div style={{height:"70px" }}>{el?.manufacturer}</div></td>
                            <td><div style={{height:"70px" , overflow:"auto" }}>{el?.payload_mass_kg}</div></td>
                            <td>
                            {
                                <div >
                                    {el?.orbit}
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

export default Address