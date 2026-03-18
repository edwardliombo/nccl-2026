import Home from "./Components/Home";
import "@fontsource/roboto/100.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages.js/About";

function App() {
   
  return (

    <section>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </section>
    
  );
}

export default App;
