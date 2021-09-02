import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import Error404Image from '../assets/not-found.jpg';

const NotFoundPage = () => {
  return (
    <div className='not-found-page-background'>
      {/* <Header as='h1'>404 Not Found Page</Header> */}
      <h1 align="center">
      Oops looks like you might be lost in the CyberSpacE
        <br></br>
      </h1>
    </div>
  );
};

export default NotFoundPage;
