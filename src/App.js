import NavBar from "./NavBar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Fav from "./pages/Fav";
import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} /> 
          <Route path="/fav" element={<Fav />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
