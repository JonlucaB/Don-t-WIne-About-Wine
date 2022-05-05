import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import AllWinesPage from "./Pages/AllWines";
import ProfilePage from "./Pages/Profile";
import QuizPage from "./Pages/Quiz";
import MainNavigation from "./Components/Layout/MainNavigation";
import HomePage from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

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
