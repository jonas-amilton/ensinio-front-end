import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';
import NavBar from './components/NavBar';
import { TranslationContext } from './context/TranslationContext';
import Home from './pages/Home';

const Routes: React.FC = () => {
  const { loading } = useContext(TranslationContext);

  return (
    <BrowserRouter>
      {loading ? (
        <Route component={Loading} />
      ) : (
        <>
          <NavBar />
          <Switch>
            <Route component={Home} exact path="/" />
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
};

export default Routes;
