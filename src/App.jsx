import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Posts } from './Pages/Posts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='posts' element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
