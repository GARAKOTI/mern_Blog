import React from 'react'
import { Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/signin' element = {<SignIn/>}/>
      <Route path='/signup' element = {<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
