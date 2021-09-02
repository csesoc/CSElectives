import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import Error404Image from '../assets/not-found.jpg';

const NotFoundPage = () => {
  return (
    <div>
      <Header as='h1'>404 Not Found Page</Header>
      <Image src={Error404Image} size='massive' centered />
      <h1 align="center">
        Oops looks like you might be lost in the CyberSpacE
      </h1>
    </div>
  );
};

export default NotFoundPage;
