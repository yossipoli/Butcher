import React from "react";
import Gallery from "./Gallery";
import Description from "./description";
// import FullDescription from './full-description'
import AddToCartButtons from "../AddToCartButtons";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import {Products, Images} from "./../DAL/api"
import {useState , useEffect} from 'react'

function ItemPage() {
  
  const [images, setImages] = useState()
  const [product, setProduct] = useState()
  const {product_id} = useParams()

  // useEffect(() => {
    async function getData(){
      setImages(await Images.getAllImagesByProductId(parseInt(product_id)))
      setProduct(await Products.getObjectById(parseInt(product_id)))
    }
    getData()
  // }, [])

  return (
    <div className="page">
      { product ?
        <div className="row">
        <div className="col productPictures">
          <Gallery images={images}/>
        </div>
        <div className="col">
          <Description {...product}/>
          <AddToCartButtons />
        </div>
      </div>
      : "LOADING..."
      }
      <div className="row backHome">
        <Link to="/">Back🐮Home</Link>
      </div>
    </div>
  );
}

export default ItemPage;
