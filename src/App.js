import Cart from './Component/Cart';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {


  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
