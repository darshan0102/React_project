import React from 'react'
import Home from './Home'
import Error from './Error'
import RegisterPage from './RegisterPage'
import OT from './OT'
import BlogPage from './BlogPage'
import Wishlist from './Wishlist'
import ShopList from './ShopList'
import Cart from './Cart' 
import ContactUS from './ContactUS'
import AboutUs from './AboutUs'
import ProductGridCart from './ProductGridCart'

const Layout = () => {
  return (
    <div>
        
        <Home/>
         <Error/>
       <RegisterPage/> 
        <OT/>  
        <BlogPage/>
        <Wishlist/>
        <Cart/>
        <ShopList/>
       <ContactUS/>
       <AboutUs/>
       <ProductGridCart/>
    </div>
  )
  
}

export default Layout