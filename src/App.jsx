import React from 'react'
import Navbar from './components/navbar'
import Poem from './components/poem'
 import Poet from './components/poet'
 import Poet2 from './components/poet2'
 import Poet3 from './components/poet3'
 import Poet4 from './components/poet4'
 import Poet5 from './components/poet5'
 import Drawing from './components/drawing'
 import Fun from './components/fun'
 import Dash from './components/dash'
 import Mathq from './components/mathq'
 import Game from './components/game'
 import Phone from './components/phone'
 import Final from './components/final'
 import Cert from './components/cert'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Cardalpha from './components/cardalpha'
import './components/nav.css'
import './app.css'

function App() {
  return (
    <HashRouter>

    <Routes>
      <Route   path="/"
      element = {<Navbar/>}
      />
   <Route   path="/ABC"
   element = {<Cardalpha/>}
   />
   <Route   path="/poem1"
   element = {<Poem/>}
   />
   <Route   path="/twinkle"
   element = {<Poet/>}
   />
   <Route   path="/jonny"
   element = {<Poet2/>}
   />
   <Route   path="/monkey"
   element = {<Poet3/>}
   />
   <Route   path="/doll"
   element = {<Poet4/>}
   />
   <Route   path="/poet5"
   element = {<Poet5/>}
   />
   <Route   path="/fun"
   element = {<Fun/>}
   />
  
   <Route   path="/draw"
   element = {<Drawing/>}
   />
   <Route   path="/dash"
   element = {<Dash/>}
   />
   <Route   path="/mathq"
   element = {<Mathq/>}
   />
   <Route   path="/game"
   element = {<Game/>}
   />
   <Route   path="/phone"
   element = {<Phone/>}
   />
   <Route   path="/final"
   element = {<Final/>}
   />
   <Route   path="/cert"
   element = {<Cert/>}
   />
  
  
    </Routes>
    </HashRouter>
  
  )
}

export default App
