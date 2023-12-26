import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/ContactUs';

import Submit from './components/Register';

function App() {

  return (
    <>
      <Router>
        <div className="app">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<Submit/>} />
          <Route path="/contacts" element={<Contact/>}/>
          <Route ></Route>
        </Routes>
        </div>
       
      </Router>
    </>
  )
}

export default App