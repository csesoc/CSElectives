import React, { useState, useContext } from 'react';
import { Button, Form, Header, Message } from 'semantic-ui-react';

import Verifier from '../verifier/verifier';
import Database from '../db/db';
import { UserContext } from '../App';
import '../styles/login-page.css';

const LoginPage = () => {
  const user = useContext(UserContext);
  const [zid, setZid] = useState('');
  const [zpass, setZpass] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [errorVisibility, setErrorVisibility] = useState(false);

  const handleSubmit = async () => {
    const response = await Verifier.getUser(zid, zpass);

    if (response.status !== 200) {
      setErrorMsg(response.data.error);
      setErrorVisibility(true);
      return;
    }

    // zID and password are correct!
    setErrorVisibility(false);
    Database.login(zid, zpass, response.data.displayName);
  };

  const handleLogOut = async () => {
    Database.signOut();
  };

  // TODO ELEC-196: verify regex for zid (have z automatically added?, only accept numebrs)
  // TODO ELEC-197: Can only access this page if not logged in

  return (
    <>
      <Header as='h1'>Login Page</Header>

      {user ? (
        <>
          <Header as='h2'>You are {user?.displayName}</Header>
          <Button content='LOG OUT!' onClick={handleLogOut} />
        </>
      ) : (
        <Form>
          <Message
            negative
            hidden={!errorVisibility}
            content={errorMsg}
          />
          <Form.Input
            label='zID'
            value={zid}
            onChange={(e, { value }) => setZid(value)}
          />
          <Form.Input
            label='Password'
            type='password'
            value={zpass}
            onChange={(e, { value }) => setZpass(value)}
          />
          <Button content='Login' type='submit' onClick={handleSubmit} />
        </Form>
      )}
    </>
  );
};

export default LoginPage;
