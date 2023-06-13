import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import fetch from './fetchData'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/fetchData" component={fetch} />
      </Switch>
    </Router>
  );
};

export default Routes;
