import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegistrationPage from "./pages/RegistrationPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import ResultsPage from "./pages/ResultsPage";
//import StudyPage from "./pages/StudyPlan";
import TestPage from "./pages/TestPage";
import TestStartPage from "./pages/TestStartPage";
import UserManagement from "./pages/UserManagement"
import './index.css';

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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/teststart" element={<TestStartPage />} />
            <Route path="/userManagement" element={<UserManagement />} />
            {/* <Route path="/studyplan" element={<StudyPlan />} /> */}
        </Routes>
    </Router>
);
}

export default App