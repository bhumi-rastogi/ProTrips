import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/HomePage';
import Contact from './components/ContactUs';
import Header from './components/Header';
import Register from './components/Register';

function App() {

  return (
    <>
      <Router>
        <div className="app">
          
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/contacts" element={<Contact/>}/>
          <Route ></Route>
        </Routes>
        </div>
       
      </Router>
    </>
  )
}

export default App