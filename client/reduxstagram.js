// import react
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import App from './components/App';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

/* 
 * if it matches '/' grab the Main component

 * depending on the url structure, if it still remains '/', display
      photogrid (child of main) 

 * depending on the url structure, if it remains '/view/iurijbcnekkh4hr'
      or any url with an id, display single (child of main) 

 * indexRoute is used when we want a default child as the component when no other route matches
      */

/*
 * The provider tag is used to display it on React Dev tools
 * Click on the tag, go to console, write $r.store to see the methods
 * If you write $r.store.getState(), you will see the state objects
 */

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
