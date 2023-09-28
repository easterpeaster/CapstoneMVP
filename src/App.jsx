// import all files and packages referenced in this file
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Cart } from "./pages/Cart";
import { Shop } from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// create a component to add the nav bar and link pages
export const App = () => {
    return <div className="App">
        <Router>
            <NavBar />
            <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            </Routes>
        </Router>
    </div>
}
