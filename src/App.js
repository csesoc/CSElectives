import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './pages/home-page.js';
import CoursePage from './pages/course-page.js';
import ReviewPage from './pages/review-page.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import LoginPage from './pages/login-page.js';
import NotFoundPage from './pages/not-found-page.js';

const App = () => {
  return (
    <BrowserRouter>
      <div className='display-wrapper'>
        <header>
          <Header />
        </header>

        <main>
          <Container>
            <Switch>
              <Route exact path='/course' component={CoursePage} />
              <Route exact path='/review' component={ReviewPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/' component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
