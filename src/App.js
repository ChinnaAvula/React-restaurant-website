import NavBar from './Components/NavBar'
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import About from './Components/About'
import Contact from './Components/Contact';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
