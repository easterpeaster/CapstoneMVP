import "./App.css";
import { NavBar } from "./components/NavBar";
import { Cart} from "./pages/Cart";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
    return <div className="App">
        <Router>
            <NavBar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Car />} />
            </Routes>
        </Router>
    </div>
}