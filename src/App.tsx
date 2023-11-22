import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Detail } from './components/Detail';
import { Results } from './components/Results';


function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path='/results/:query' element={<Results/>}/>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
