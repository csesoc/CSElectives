import React, { useState, useEffect, createContext } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import { onAuthStateChanged } from '@firebase/auth';

import Database from './db/db.js';
import HomePage from './pages/home-page.js';
import CoursePage from './pages/course-page.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import LoginPage from './pages/login-page.js';
import FeedbackPage from './pages/feedback-page.js';
import NotFoundPage from './pages/not-found-page.js';

export const LoadingContext = createContext(true);
export const UserContext = createContext(null);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState({});

  onAuthStateChanged(Database.auth, (user) => {
    setUser(user);
  });

  useEffect(() => {
    const getCourses = async () => {
      const newCourses = await Database.getCoursesAndReviews();
      setCourses(newCourses);
      console.log('Courses:', newCourses);
      setLoading(false);
    };
    getCourses();
  }, []);

  return (
    <BrowserRouter>
      <LoadingContext.Provider value={loading}>
        <UserContext.Provider value={user}>
          <div className='display-wrapper'>
            <header>
              <Header courses={courses} />
            </header>
            <main>
              <Switch>
                <Route exact path='/'>
                  <HomePage courses={courses} />
                </Route>

                {/* Home page has its own internal wrapper */}
                <Container className='main-wrapper'>
                  <Route exact path='/course/:courseCode'>
                    <CoursePage courses={courses} />
                  </Route>
                  <Route exact path='/login'>
                    <LoginPage />
                  </Route>
                  <Route exact path='/feedback'>
                    <FeedbackPage />
                  </Route>
                  <Route>
                    <NotFoundPage />
                  </Route>
                </Container>
              </Switch>
            </main>
          </div>
        </UserContext.Provider>

      </LoadingContext.Provider>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
