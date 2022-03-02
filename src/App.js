import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
   <Router >
     <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/resume" component={SigninPage} exact />
      
      
     </Switch>
     
   </Router> 
  );
}

export default App;
