import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
const Products = ()=> {
    const {id} = useParams();
    const[product, setProduct] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);

                const response = await fetch(`http://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
     
    }
    getProducts();
    },[]);
    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )
    }
    const ShowProduct = ()=>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} 
                height="400px" width= "400px"/>
            </div>
            <div className="col-md-6"> 
            <h4 className="text-uppercase text-black-50">
              {product.category}
            </h4>
            <h1 className="display-5">
              {product.title}
            </h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
              ${product.price}
            </h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outile-dark">
              Add to Cart
            </button>
            </div>
            </>
        )
    }
  return (
    <div>
        <div className="container">
        <div className="row">
        {loading ? <Loading/> : <ShowProduct/>}
        </div>
        
        </div>
    </div>
  )
}
export default Products;