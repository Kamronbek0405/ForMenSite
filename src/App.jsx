
import './App.css'
import { MainLayout } from './layout/main-layout'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Women } from './pages/women'
import { Sale } from './pages/sale'
import { Children } from './pages/children'
import { Collection } from './pages/collection'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/children' element={<Children/>}/>
      <Route path='/collection' element={<Collection/>}/>
      </Route>
     
    </Routes>
    </>
  )
}

export default App
