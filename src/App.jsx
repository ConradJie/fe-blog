import './App.css'
import logo from './assets/logo.png'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import BlogpostsNew from "./pages/blogpostsNew/BlogpostsNew.jsx";
import Blogposts from "./pages/blogposts/Blogposts.jsx";
import BlogpostsDetail from "./pages/blogpostsDetail/BlogpostsDetail.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
    return (
        <>
            <div className="page-container">
                <Navigation/>
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<BlogpostsNew/>}/>
                <Route path="/blogposts" element={<Blogposts/>}/>
                <Route path="/blogposts/:id" element={<BlogpostsDetail/>}/>
            </Routes>
        </>
    )
}

export default App
