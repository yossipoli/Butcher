import users_data from './../Data/Users.json'
import carts_data from './../Data/carts.json'
import categories_data from './../Data/categories.json'
import images_data from './../Data/images.json'
import order_details_data from './../Data/order_details.json'
import orders_data from './../Data/orders.json'
import products_data from './../Data/products.json'

class api {
  constructor(data) {
    this._data = data;
  }

  get data() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._data);
      }, 2000);
    });
  }

  getCategoryIdByName(name){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        const category = this._data.find(category=>category.name.toLowerCase()===name.toLowerCase())
        resolve(category.id || null)
      }, 500);
    })
  }

  set data(newData) {

      setTimeout(() => {
        this._data = newData;
        // sessionStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);

  }

  getObjectById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._data.find(obj=>obj.id === id) || {});
      }, 2000);
    });
  }

  getImageByProductId(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._data.find(obj=>obj.product_id === id));
      }, 2000);
    });
  }

  getAllImagesByProductId(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._data.filter(obj=>obj.product_id === id));
      }, 2000);
    });
  }

  addObject(newItem) {

      setTimeout(() => {
        this._data.push(newItem);
        // localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);

  }

  setObj(id, newItemData) {
    
    setTimeout(() => {
      this._data[this._data.indexOf(obj=>obj.id === id)]=newItemData
        // localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);

  }

  removeItem(id) {
      
      setTimeout(() => {
        this._data = this._data.filter(obj=>obj.id!==id)
        // localStorage.setItem("data", JSON.stringify(this._data));
      }, 2000);

  }
}

// const ApiProductsData = JSON.parse(sessionStorage.getItem("data")) || ProductsData;
export const Users = new api(users_data);
export const Carts = new api(carts_data);
export const Categories = new api(categories_data);
export const Images = new api(images_data);
export const Order_Details = new api(order_details_data);
export const Orders = new api(orders_data);
export const Products = new api(products_data);

