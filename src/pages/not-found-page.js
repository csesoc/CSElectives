import React from 'react';
import { Icon, Button, Header } from 'semantic-ui-react';
import Error404Image from '../assets/not-found.jpg';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log('clicked or not??');
    history.push('/home');
  };
  return (
    <div className='not-found-page-background'>
      {/* <Header as='h1'>404 Not Found Page</Header> */}
      <h1 className='not-found-page-text'>
        <div>Oops the page you are looking for cannot be found {'>.<'}</div>
        <div>Looks like you might be lost in the CyberSpacE...</div>
        <Button icon onClick={handleClick} labelPosition='left' size='big' inverted >
          <Icon name='home'/>
        Click to return Home
        </Button>
      </h1>

    </div>
  );
};

export default NotFoundPage;
