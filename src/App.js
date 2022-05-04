import "./App.css";
import { Route, Routes } from "react-router-dom";

import AllWinesPage from "./Pages/AllWines.js";
import ProfilePage from "./Pages/Profile.js";
import QuizPage from "./Pages/Quiz.js";
import MainNavigation from "./Components/Layout/MainNavigation.js";
import HomePage from "./Pages/Home.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-wines" element={<AllWinesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/take-the-quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
