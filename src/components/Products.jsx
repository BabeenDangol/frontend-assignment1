import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
const Products = ()=> {
    const {id} = useParams();
    const[product, setProduct] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true);
            try {
                const response = await fetch(`http://fakestoreapi.com/products/${id}?id=${id}`);
                const data = await response.json();
                setProduct(data);
              } catch (error) {
                console.error('Error fetching product:', error);
              } finally {
                setLoading(false);
              }
     
    }
    getProduct();

    },[id]);
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
                <img src={product.image} alt={product.title} height="400px" width= "400px"/>
            </div>
            <div className="col-md-6">
                Hello
            </div>
            </>
        )
    }
  return (
    <div>
        <div className="container">

        {loading ? <Loading/> : <ShowProduct/>}
        </div>
    </div>
  )
}
export default Products;