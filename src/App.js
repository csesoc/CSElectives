import React, { useState, useEffect, createContext } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Database from './db/db.js';
import HomePage from './pages/home-page.js';
import CoursePage from './pages/course-page.js';
import ReviewPage from './pages/review-page.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import LoginPage from './pages/login-page.js';
import NotFoundPage from './pages/not-found-page.js';

export const LoadingContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState({});

  useEffect(() => {
    const getCourses = async () => {
      const newCourses = {};

      const courseSnapshot = await Database.getSnapshot('courses');
      courseSnapshot.docs.forEach((doc) => {
        newCourses[doc.id] = doc.data();
      });

      setCourses(newCourses);
      console.log('Courses:', newCourses);
      setLoading(false);
    };
    getCourses();
  }, []);

  return (
    <BrowserRouter>
      <LoadingContext.Provider value={loading}>
        <div className='display-wrapper'>
          <header>
            <Header />
          </header>

          <main>
            <Container className='main-wrapper'>
              <Switch>
                <Route exact path='/course'>
                  <CoursePage />
                </Route>
                <Route exact path='/review'>
                  <ReviewPage />
                </Route>
                <Route exact path='/login'>
                  <LoginPage />
                </Route>
                <Route exact path='/'>
                  <HomePage courses={courses} />
                </Route>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </Container>
          </main>
        </div>
      </LoadingContext.Provider>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
