import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

import HomePage from './components/home-page.js';
import CoursePage from './components/course-page.js';
import ReviewPage from './components/review-page.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Container>
          <BrowserRouter>
            <Switch>
              <Route path="/course" component={CoursePage} />
              <Route path="/review" component={ReviewPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;