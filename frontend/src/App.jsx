import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import SoloReciepe from './components/SoloReciepe'
import EditReciepe from './components/EditReciepe'
function App() {
  const uri = 'http://localhost:5000'
  return (
  <>
  <div className='h-screen backdrop-blur-sm'>
    <Routes>
      <Route path='/' element={<Hero uri={uri} />} />
      <Route path='/recipe/:id' element={<SoloReciepe uri={uri} />}/>
      {/* <Route path='/edit/:id' element={<EditReciepe uri={uri} />}/> */}
    </Routes>
    </div>
    </>
  )
}

export default App
