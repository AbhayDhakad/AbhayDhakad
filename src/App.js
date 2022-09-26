import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import MyContent from './MyContent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MySeries from './MySeries';
import MyHome from './MyHome';
import MyAction from './MyAction';
function App() {
  return (
    <Router>
    <Navigation></Navigation>

    <Routes>

        <Route path="/" element={<MyContent />}></Route>
        <Route path="/series" element={<MySeries />}></Route>
        <Route path="/home" element={<MyHome />}></Route>
        <Route path="/action" element={<MyAction />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
