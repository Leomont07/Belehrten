import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ejemplo
import LoginPage from './pages/LoginPage';


function App() {  
  //Estado - UseState
  //Ciclo de vida

//Conexión
const fetchAPI = async () => {
  const response  = await axios.get("http://localhost:8080/api");
  console.log(response)
};

useEffect(() => {
fetchAPI();
}, [])

  //jsx - (el html del componente) (JavaScriptXtended)
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<LoginPage />} />
            {/* Agrega más rutas según necesites */}
        </Routes>
    </Router>
);
}

export default App