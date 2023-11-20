import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Detail } from './components/Detail';


function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
     </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
