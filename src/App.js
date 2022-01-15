import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';

import data from './data.json';

import Header from './components/Header';
import Background from './components/Background';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import './styles/main.scss';

const App = () => {

  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0},
    enter: { opacity: 1},
  });

  return transitions((props, item) => (
    <>
      <Background />
      <Header />
        <animated.div style={props}>
          <Routes location={item}>
            <Route exact path='/' element={<Home/>} />
            <Route path='/destination' element={<Destination {...data}/>} />
            <Route path='/crew' element={<Crew {...data} />} />
            <Route path='/technology' element={<Technology {...data} />} />
          </Routes>
        </animated.div>
    </>
  ));
}

export default App;