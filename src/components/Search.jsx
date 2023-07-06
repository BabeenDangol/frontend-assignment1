import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
const Search = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            const jsonData = await response.json();
            setData(jsonData);
            setFilteredData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // const Loading=()=>{
    //     <>
    //     Loading...
    //     </>
    // }
    // const ShowProducte =()=>{
    //     return(
    //         <></>
    //     )
    // }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder'>Latest Product</h1>
                        <nav class="navbar navbar-light bg-light">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-3" type="submit">Search</button>
                            </form>
                        </nav>
                        <hr />
                        {/* {loading ? <Loading/> : <ShowProduct/>} */}
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Search;