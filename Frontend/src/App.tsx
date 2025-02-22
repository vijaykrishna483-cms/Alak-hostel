
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Complaints from './pages/Complaints';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/complaintregister" element={<Complaints />} />

      </Routes>
    </Router>

    </>
  )
}

export default App
