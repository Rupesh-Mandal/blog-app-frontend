import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home.js"
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import About from "./pages/About"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
