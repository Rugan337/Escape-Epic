import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Index from './pages/Index.jsx'
import { Routes, Route, Link } from 'react-router'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Destination from './pages/Destination.jsx'
import England from './pages/England.jsx'
import Germany from './pages/Germany.jsx'
import Netherland from './pages/Netherland.jsx'
import Greece from './pages/Greece.jsx'
import Italy from './pages/Italy.jsx'
import Austria from './pages/Austria.jsx'
import Spain from './pages/Spain.jsx'
import Switzerland from './pages/Switzerland.jsx'
import France from './pages/France.jsx'
import Indianblog from './pages/Indianblog.jsx'
import Europeblog from './pages/Europeblog.jsx'
import Trekkingtrailsblog from './pages/Trekkingtrailsblog.jsx'
import Autumnfestivalsblog from './pages/Autumnfestivalsblog.jsx'
import Bordervillagesblog  from './pages/Bordervillagesblog.jsx'
import Oldesttemplesblog  from './pages/Oldesttemplesblog.jsx'
import Streetfoodblog from './pages/Streetfoodblog.jsx'
import Streetarttoursblog from './pages/Streetarttoursblog.jsx'
import Lisbonlocalblog   from './pages/Lisbonlocalblog.jsx'
import Europeancastlesblog from './pages/Europeancastlesblog.jsx'
import Europeanvineyardsblog from './pages/Europeanvineyardsblog.jsx'
import Europeshoestringblog from './pages/Europeshoestringblog.jsx'
import Bestchristmasmarketsblog from './pages/Bestchristmasmarketsblog.jsx'
import Movieliteraturelocations from './pages/Movieliteraturelocations.jsx'














function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/England' element={<England />} />
        <Route path='/Germany' element={<Germany />} />
        <Route path='/Netherland' element={<Netherland />} />
        <Route path='/Greece' element={<Greece />} />
        <Route path='/Italy' element={<Italy />} />
        <Route path='/Austria' element={<Austria />} />
        <Route path='/Spain' element={<Spain />} />
        <Route path='/Switzerland' element={<Switzerland />} />
        <Route path='/France' element={<France />} />
         <Route path='/Indianblog' element={<Indianblog />} />
         <Route path='/Europeblog' element={<Europeblog />} />
         <Route path='/Trekkingtrailsblog' element={<Trekkingtrailsblog />} />
          <Route path='/Autumnfestivalsblog' element={<Autumnfestivalsblog />} />
        <Route path='/Bordervillagesblog' element={<Bordervillagesblog />} />
        <Route path='/Oldesttemplesblog' element={<Oldesttemplesblog />} />
        <Route path='/Streetfoodblog' element={<Streetfoodblog />} />
        <Route path='/Streetarttoursblog' element={<Streetarttoursblog />} />
        <Route path='/Lisbonlocalblog' element={<Lisbonlocalblog />} />
        <Route path='/Europeancastlesblog' element={< Europeancastlesblog />} />
        <Route path='/Europeanvineyardsblog' element={<Europeanvineyardsblog />} />
        <Route path='/Europeshoestringblog' element={<Europeshoestringblog />} />
        <Route path='/Bestchristmasmarketsblog' element={<Bestchristmasmarketsblog />} />
        <Route path='/Movieliteraturelocations' element={<Movieliteraturelocations />} />
      
        



      </Routes>
    </>
  )
}

export default App
