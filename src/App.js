import './App.css';
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from './components/home-page.js';
import CoursePage from './components/course-page.js';
import ReviewPage from './components/review-page.js';


const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/course" component={CoursePage} />
          <Route path="/review" component={ReviewPage} />
          <Route path="/" component={HomePage} />
        </Switch>
    </Router>
  );
};

export default App;