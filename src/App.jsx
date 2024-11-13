import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ejemplo
import LoginPage from './pages/LoginPage';
import RegistrationPage from "./pages/RegistrationPage";


function App() {  
  //Estado - UseState
  //Ciclo de vida

//Conexión
const fetchAPI = async () => {
  const response  = await axios.get("http://localhost:8080/api");
  console.log(response)
};
//Ejecución de la conexión
useEffect(() => {
fetchAPI();
}, [])

  //jsx - (el html del componente) (JavaScriptXtended)
  return (
    <Router>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            {/* <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/studyplan" element={<StudyPlan />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/teststart" element={<TestStartPage />} /> */}
        </Routes>
    </Router>
);
}

export default App