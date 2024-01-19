// import Navigation from "../navigation/Navigation";
import { Outlet } from "react-router-dom";
import Header from "../componentes/header/Header";
import Footer from "../componentes/footer/Footer"
import Navigation from "../navigation/Navigation";
import React from 'react'

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;