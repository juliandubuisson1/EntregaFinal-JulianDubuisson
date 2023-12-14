import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import  Navbar  from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={ <ItemListContainer /> } />  
        <Route path="/productos/:categoryId" element={ <ItemListContainer />}/>
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        <Route path="*" element={<Navigate to={"/not-found"}/> } />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
