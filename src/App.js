import { BrowserRouter as Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';

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
        <Switch location={item}>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/destination'>
            <Destination />
          </Route>
          <Route path='/crew'>
            <Crew />
          </Route>
          <Route path='/technology'>
            <Technology />
          </Route>
        </Switch>
      </animated.div>
    </>
  ));
}

export default App;