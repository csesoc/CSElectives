import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

import CSESocLogo from '../assets/csesoc-logo.svg';

// This footer will appear on all pages
const Footer = () => {
  return (
    <Container>
      <Grid columns='equal'>
        <Grid.Column width={3}>
          <Image className='csesoc-logo' src={CSESocLogo} size='small' />
          <p>
            © 2021 — CSESoc UNSW
          </p>
        </Grid.Column>
        <Grid.Column>
          <p>
            CSESoc is the constituent student society of UNSW’s School of Computer Science and Engineering.
            We do not represent the School, Faculty, or University.
          </p>
          <p>
            This website seeks to be a general guide, but its information has not been officially
            endorsed and is subject to change or correction.
            This is not official advice, and you should confirm any statements are correct with regard to
            your situation before relying on it.
            Any opinions expressed are those of the authors, and may not necessarily represent those of
            the University, Faculty, School, or Society.
          </p>
          <p>
            You are responsible for any content provided and should only post content which you are
            comfortable with sharing. We reserve the right to remove content from the website if it
            is deemed to be abusive, offensive or otherwise inappropriate. UNSW policies apply and if a
            breach is detected, further action may be taken with the University.
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Footer;
