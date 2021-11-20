import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import data from './data.json';

import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <Background />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination {...data}/>} />
        <Route path='/crew' element={<Crew {...data} />} />
        <Route path='/technology' element={<Technology {...data} />} />
      </Routes>
    </Router>
  );
}

export default App;