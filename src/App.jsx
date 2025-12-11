import React from 'react'
import LiquorShop from './Pages/Shop'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/Shop' element={<LiquorShop/>}/>
  <Route path='*' element={<NotFound/>} />
</Routes>

{/* <LiquorShop /> */}
</>

  )
}

export default App