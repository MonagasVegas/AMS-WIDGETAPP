import { Routes, Route, HashRouter } from 'react-router-dom'
import { Home } from './Components/Home/index'

function App () {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          {/*  El * significa para todas las rutas */}
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
