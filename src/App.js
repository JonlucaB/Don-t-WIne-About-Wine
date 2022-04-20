import "./App.css";
import { Route, Routes } from "react-router-dom";

import AllWinesPage from "./Pages/AllWines";
import ProfilePage from "./Pages/Profile";
import QuizPage from "./Pages/Quiz";
import MainNavigation from "./Components/Layout/MainNavigation";
import HomePage from "./Pages/Home";

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
