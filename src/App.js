import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Post from './Pages/Post/Post';
import Home from './Pages/Home/Home';
import Navbar from './Pages/SlideNavbar/Navbar/Navbar';
import SignIn from './Pages/SignInOut/SignIn';
import SignUp from './Pages/SignInOut/SignUp';
import { ToastContainer } from 'react-toastify';
import SeeMore from './Pages/Home/SeeMore';
import Profile from './Pages/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/post' element={<Post></Post>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/seeMore/:id' element={<SeeMore></SeeMore>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
