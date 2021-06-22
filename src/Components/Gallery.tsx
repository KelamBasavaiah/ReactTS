import React, { useState, useEffect } from 'react';
import useGetListCount from '../Components/customHook';
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import '../App.css';
import gCss from '../CssModules/Gallery.module.css'


const Gallery=()=>{
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setrefresh] = useState(0); 
    
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    const[recordCount,setRecordCount]=useState(0)
  

    useEffect(() => {
        setLoading(false);
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(
                result => {
                    setRecordCount(result.length);
                    setList(result);
                    setLoading(true);                    
                    setList(result.slice(offset, offset + perPage));
                    setPageCount(Math.ceil(result.length / perPage)); 
                    console.log(list, loading,offset,pageCount);                     
                }
        )                                                     
        //return()=>{alert('Use effect Clean up Function running')}
    }, [refresh,offset]);

    const handlePageClick = (e:any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage *perPage)
    };
    let tableRows = null;

    if (list) {
        tableRows = <React.Fragment>
            {list.map((data:any, index) => {
                return (
                    <div className={gCss.card}>
                        <img src={data.url} className={gCss.img}></img>
                        <p>Title:- {data.title}</p>
                    </div>

                );
            })}
        </React.Fragment>
    }
    const spinner={
        color:'blue',
        textalign:'center'
    }
   
    return (
        <div>           
            <p>Records count {recordCount} . By custom hook.</p> <p>Refreshed {refresh}</p>
            <button onClick={()=> setrefresh(refresh+1)}>refresh</button><br></br>
            
            {tableRows}
           
            <div  className='paginationPostion'>
                    <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    //subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                    </div>
        </div>
    );

}
export default  Gallery;