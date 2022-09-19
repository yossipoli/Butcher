
//POST requests options
function getRequestOption(obj) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify(obj)
  }
  return requestOptions
}

export default class api {

  static async register(values) {
    const requestOptions = getRequestOption(values)
    return await fetch('http://localhost:4000/customers/register', requestOptions).then(res=>res.json())
  }

  static async login(values) {
    const requestOptions = getRequestOption(values)
    return await fetch('http://localhost:4000/customers', requestOptions) .then(res=>res.json())
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

  static async addToCart(product) {
    const requestOptions = getRequestOption(product)
    return await fetch('http://localhost:4000/cart/add', requestOptions).then(res=> res.json())
  }

  static async removeFromCart(product_id) {
    const requestOptions = getRequestOption(product_id)
    return await fetch('http://localhost:4000/cart/remove', requestOptions).then(res=> res.json())
  }
}


