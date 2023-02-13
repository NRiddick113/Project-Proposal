import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import './App.css'

// PAGES
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Cart from "./Components/Cart"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Index />} />
            <Route path="/games/new" element={<New />} />
            <Route path="/games/cart" element={<Cart />} />
            <Route path="/games/:id" element={<Show />} />
            <Route path="/games/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
