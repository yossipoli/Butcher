import users_data from './../Data/Users.json'
import carts_data from './../Data/carts.json'
import categories_data from './../Data/categories.json'
import images_data from './../Data/images.json'
import order_details_data from './../Data/order_details.json'
import orders_data from './../Data/orders.json'
import products_data from './../Data/products.json'

export default class api {
  constructor(data) {
    this._data = data;
  }

  static async login(values) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(values)
    }

    return await fetch('http://localhost:4000/customers', requestOptions)
      .then(res=>res.json())
  }

  static async getAllCategories() {
    return await fetch('http://localhost:4000/categories', {credentials: "include"}).then(res=>res.json())
  }

  static async checkCookie() {
    return await fetch('http://localhost:4000/customers/check-cookie', {credentials: "include"}).then(res=>res.json())
  }

  static async getProducts() {
    return await fetch('http://localhost:4000/products', {credentials: "include"}).then(res=>res.json())
  }

  static async getProduct(id) {
    return await fetch(`http://localhost:4000/products/${id}`, {credentials: "include"}).then(res=>res.json())
  }

  static async getImage(id) {
    return await fetch(`http://localhost:4000/images/${id}`, {credentials: "include"}).then(res=> res.json())
  }

  static async getAllImages(id) {
    return await fetch(`http://localhost:4000/images/${id}/all`, {credentials: "include"}).then(res=> res.json())
  }

  static async getCategoryId(name) {
    return await fetch(`http://localhost:4000/categories/${name}`, {credentials: "include"}).then(res=> res.json())
  }
  
  static async getCustomer() {
    return await fetch(`http://localhost:4000/customers/`, {credentials: "include"}).then(res=> res.json())
  }

  static async logout() {
    return await fetch(`http://localhost:4000/customers/logout`, {credentials: "include"})
  }
  
  static async getCustomerCart() {
    return await fetch(`http://localhost:4000/cart`, {credentials: "include"}).then(res=> res.json())
  }

  // get data() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this._data);
  //     }, 2000);
  //   });
  // }

  // getCategoryIdByName(name){
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       const category = this._data.find(category=>category.name.toLowerCase()===name.toLowerCase())
  //       resolve(category.id || null)
  //     }, 500);
  //   })
  // }

  // set data(newData) {

  //     setTimeout(() => {
  //       this._data = newData;
  //       // sessionStorage.setItem("data", JSON.stringify(this._data));
  //     }, 2000);

  // }

  // getObjectById(id) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this._data.find(obj=>obj.id === id) || {});
  //     }, 2000);
  //   });
  // }

  // getImageByProductId(id) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this._data.find(obj=>obj.product_id === id));
  //     }, 2000);
  //   });
  // }

  // getAllImagesByProductId(id) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this._data.filter(obj=>obj.product_id === id));
  //     }, 2000);
  //   });
  // }

  // addObject(newItem) {

  //     setTimeout(() => {
  //       this._data.push(newItem);
  //       // localStorage.setItem("data", JSON.stringify(this._data));
  //     }, 2000);

  // }

  // setObj(id, newItemData) {
    
  //   setTimeout(() => {
  //     this._data[this._data.indexOf(obj=>obj.id === id)]=newItemData
  //       // localStorage.setItem("data", JSON.stringify(this._data));
  //     }, 2000);

  // }

  // removeItem(id) {
      
  //     setTimeout(() => {
  //       this._data = this._data.filter(obj=>obj.id!==id)
  //       // localStorage.setItem("data", JSON.stringify(this._data));
  //     }, 2000);

  // }
}

// const ApiProductsData = JSON.parse(sessionStorage.getItem("data")) || ProductsData;
// export const Users = new api(users_data);
// export const Carts = new api(carts_data);
// export const Categories = new api(categories_data);
// export const Images = new api(images_data);
// export const Order_Details = new api(order_details_data);
// export const Orders = new api(orders_data);
// export const Products = new api(products_data);

