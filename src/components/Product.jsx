import React from 'react'
import {useState,useEffect} from 'react';

const Product= () =>{
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);
    let componentMounted = true;
    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return ()=>{
                componentMounted = false;
            }
        }
        getProduct();
    },[]);


    return (
        
       <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                    <hr/>
                </div>
            </div>
        </div>
       </div> 
    )
}
export default Product;