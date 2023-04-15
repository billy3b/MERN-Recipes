import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CreateRecipe from "./pages/create-recipe";
import SavedRecipe from "./pages/saved-recipe";
import './App.css'; 
import Navbar from "./components/navbar";
import 'tachyons';
import Particle from "./components/Particles";
import { SavedRecipes } from "./pages/saved-recipe";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Particle />
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/saved-recipe" element={<SavedRecipes />} />
        <Route path="/newuser/register" element={<Register />} />
        <Route path="/log/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
       

    </div>
  );
}

export default App;
