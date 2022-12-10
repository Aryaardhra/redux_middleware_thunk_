import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Products from './components/product/Products'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import WomensSection from './components/product/WomensSection'
import MensSection from './components/product/MensSection'
import JewellerySection from  './components/product/JewellerySection'
import ElectronicsSection  from './components/product/ElectronicsSection'

export default function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Carousel/>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path ='/home' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path ='/contact' element={<Contact/>}/>
      <Route  path='/product' element= {<Products/>}>
      <Route path='womens' element={<WomensSection/>} />
                <Route path="mens" element={<MensSection />} />
                <Route path="jewelery" element={<JewellerySection />} />
                <Route path="electronics" element={<ElectronicsSection />} />
                </Route>
    </Routes>
    </>
  )
}

