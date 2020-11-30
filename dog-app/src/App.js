import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import HomeView from './Views/HomeView';
import MiniatureSizeView from './Views/MinatureSizeView';
import SmallSizeView from './Views/SmallSizeView';
import MediumSizeView from './Views/MediumSizeView';
import LargeSizeView from './Views/LargeSizeView';
import GiantSizeView from './Views/GiantSizeView';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
        <Route exact path="/home" component={HomeView}/>
        <Route path="/miniatureSize" component={MiniatureSizeView}/>
        <Route path="/smallSize" component={SmallSizeView}/>
        <Route path="/mediumSize" component={MediumSizeView}/>
        <Route path="/largeSize" component={LargeSizeView}/>
        <Route path="/giantSize" component={GiantSizeView}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
