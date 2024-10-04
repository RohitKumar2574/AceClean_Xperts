import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Homepage } from "./pages/Homepage";
import { Services } from "./pages/Services";
import { About } from "./pages/About"; // Import About page
import { Contact } from "./pages/Contact"; // Import Contact page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />\{" "}
        {/* Add Services route */}
        <Route path="/about" element={<About />} /> {/* Add About route */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Add Contact route */}
      </Routes>``
      <Footer />
    </Router>
  );
}

export default App;
