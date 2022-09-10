import logo from './logo.svg';
import './App.css';
import SlideNavbar from './Pages/SlideNavbar/SlideNavbar';
import Hearders from './Pages/SlideNavbar/Hearders';
import { Routes, Route, Link } from "react-router-dom";
import Post from './Pages/Post/Post';
import Home from './Pages/Home/Home';
import Navbar from './Pages/SlideNavbar/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/post' element={<Post></Post>}></Route>
      </Routes>
    </div>
  );
}

export default App;
