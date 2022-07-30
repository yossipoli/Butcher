import React from "react";
import Gallery from "./Gallery";
import Description from "./description";
// import FullDescription from './full-description'
import AddToCartButtons from "../AddToCartButtons";
import "./index.css";
import { Link, useParams, Redirect } from "react-router-dom";
import {Products, Images} from "./../DAL/api"
import {useState , useEffect} from 'react'

function ItemPage() {
  
  const [images, setImages] = useState()
  const [product, setProduct] = useState()
  const {product_id} = useParams()

  useEffect(() => {
    async function getData(){
      setImages(await Images.getAllImagesByProductId(parseInt(product_id)))
      setProduct(await Products.getObjectById(parseInt(product_id)))
    }
    getData()
  }, [])

console.log('product: ', product);
  return (
    <div className="page">
      { product ?
        Object.keys(product).length ?
          <div className="row">
          <div className="col productPictures">
            <Gallery images={images}/>
          </div>
          <div className="col">
            <Description {...product}/>
            <AddToCartButtons />
          </div>
        </div> 
        : <Link to='/'>
            <div className="notFound row">
              You are looking for unknown product <br/>
              click here to return Home Page
            </div>
          </Link>
      : "LOADING..."
      }
      <div className="row backHome">
        <Link to="/">Back🐮Home</Link>
      </div>
    </div>
  );
}

export default ItemPage;
