import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import fetch from './fetchData'
import DestinationPage from './printerPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/fetchData" component={fetch} />
        <Route path='/DestinationPage' component={DestinationPage}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
