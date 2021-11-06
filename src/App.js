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
import GoToTop from './components/go-to-top.js';

export const LoadingContext = createContext(true);
export const UserContext = createContext(null);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState({});
  const [majors, setMajors] = useState({});

  const [loginOpen, setLoginOpen] = useState(false); // hacky way, probs not prop drill this later
  const [loginMessage, setLoginMessage] = useState('Login');

  onAuthStateChanged(Database.auth, (user) => {
    setUser(user);
  });

  useEffect(() => {
    const getCourses = async () => {
      const newCourses = await Database.getCoursesAndReviews();
      const newMajors = await Database.getMajors();
      setCourses(newCourses);
      setMajors(newMajors);
      console.log('Courses:', newCourses);
      setLoading(false);
    };
    getCourses();
  }, []);

  return (
    <BrowserRouter>
      <GoToTop />
      <LoadingContext.Provider value={loading}>
        <UserContext.Provider value={user}>
          <div className='display-wrapper'>
            <header>
              <Header
                courses={courses}
                open={loginOpen}
                setOpen={setLoginOpen}
                loginMessage={loginMessage}
                setLoginMessage={setLoginMessage}
              />
            </header>
            <main>
              <Container className='main-wrapper'>
                <Switch>
                  <Route exact path='/'>
                    <HomePage courses={courses} majors={majors} />
                  </Route>
                  <Route exact path='/course/:courseCode'>
                    <CoursePage courses={courses} setLoginMessage={setLoginMessage} setLoginOpen={setLoginOpen} />
                  </Route>
                  <Route exact path='/login' component={LoginPage} />
                  <Route exact path='/feedback' component={FeedbackPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Container>
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
