import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/Pages/AboutMe/AboutMe";
import Login from "./Components/Pages/Authentication/Login/Login";
import Register from "./Components/Pages/Authentication/Register/Register";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home";
import Notfound from "./Components/Pages/NotFound/Notfound";
import Footer from "./Components/shared/Footer/Footer";
import TopNavbar from "./Components/shared/Header/TopNavbar/TopNavbar";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
        {/* <Route path="home#services" element={<AboutMe></AboutMe>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
