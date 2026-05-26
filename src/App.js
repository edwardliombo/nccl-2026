import Home from "./Components/Home";
import Experience from "./Components/Experience";
import "@fontsource/roboto/100.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages.js/About";
import Header from "./Components/Header";

function App() {
   
  return (
    <section>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
