import React from 'react'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Header/>

    <Outlet/>
    {/* it chnages shit inside the outlet and everyting else remians constant -- as they were before only the outlet changes */}

    <Footer/>
    </>
  )
}
