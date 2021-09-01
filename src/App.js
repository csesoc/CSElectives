import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore/lite';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './pages/home-page.js';
import CoursePage from './pages/course-page.js';
import ReviewPage from './pages/review-page.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import LoginPage from './pages/login-page.js';
import NotFoundPage from './pages/not-found-page.js';

import db from './db/db.js';

const App = () => {
  const [courses, setCourses] = useState({});

  useEffect(async () => {
    const newCourses = {};

    const coursesCol = collection(db, 'courses');
    const courseSnapshot = await getDocs(coursesCol);
    courseSnapshot.docs.forEach((doc) => {
      newCourses[doc.id] = doc.data();
    });

    setCourses(newCourses);
    console.log('Courses:', newCourses);
  }, []);

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
