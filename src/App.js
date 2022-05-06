import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import AllWinesPage from "./Pages/AllWines.js";
import ProfilePage from "./Pages/Profile.js";
import QuizPage from "./Pages/Quiz.js";
import MainNavigation from "./Components/Layout/MainNavigation.js";
import HomePage from "./Pages/Home.js";
import Dashboard from "./Pages/Dashboard.js";

import ResultsPage from "./Pages/Results.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-wines" element={<AllWinesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/take-the-quiz" element={<QuizPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/results" element={<ResultsPage/>} />
        {/* <ProtectedRoute path="/dashboard" element={<Dashboard/>}/> */}
      

        
        {/* <Route exact path="/dashboard">
          <Navigate exact from="/profile" to="dashboard" />
        </Route>
        <Route path="*">
          <Navigate from="/" to="dashboard" />
  </Route>*/}
      </Routes> 
      

    </div>
    
  );
  
}

export default App;
