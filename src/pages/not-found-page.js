import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import '../styles/not-found-page.css';

const NotFoundPage = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log('clicked or not??');
    history.push('/');
  };
  return (
    <>
      <div className='not-found-page-background' />
      <div className='not-found-page-text'>
        <div>Oops the page you are looking for cannot be found {'>.<'}</div>
        <div>Looks like you might be lost in the CyberSpacE...</div>
        <Button animated onClick={handleClick} size='big' inverted>
          <Button.Content visible> Teleport me back home </Button.Content>
          <Button.Content hidden>
            <Icon name='space shuttle' />
          </Button.Content>
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
