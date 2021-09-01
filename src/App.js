import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './pages/home-page.js';
import CoursePage from './pages/course-page.js';
import ReviewPage from './pages/review-page.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>

      <main>
        <Container>
          <Switch>
            <Route path="/course" component={CoursePage} />
            <Route path="/review" component={ReviewPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
