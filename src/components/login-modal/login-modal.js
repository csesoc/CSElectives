import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Header, Message, Modal, Input, Divider } from 'semantic-ui-react';

import Verifier from '../../verifier/verifier.js';
import Database from '../../db/db.js';
import { UserContext } from '../../App.js';
import '../../styles/login-page.css';

const LoginModal = (props) => {
  const { open, setOpen, loginMessage, setLoginMessage } = props;
  const user = useContext(UserContext);
  const [zid, setZid] = useState('');
  const [zpass, setZpass] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [errorVisibility, setErrorVisibility] = useState(false);

  const handleSubmit = async () => {
    const response = await Verifier.getUser(`z${zid}`, zpass);

    if (response.status !== 200) {
      setErrorMsg(response.data.error);
      setErrorVisibility(true);
      return;
    }

    // zID and password are correct!
    setErrorVisibility(false);
    Database.login(`z${zid}`, zpass, response.data.displayName);
  };

  const handleLogOut = async () => {
    Database.signOut();
  };

  return (
    <>
      <Modal
        closeIcon
        onClose={() => {
          setOpen(false);
          setLoginMessage('Login');
        }}
        onOpen={() => setOpen(true)}
        open={open}
        size='tiny'
        trigger={<Button secondary style={{ backgroundColor: 'var(--csesoc-blue)' }}>Log In</Button>}
      >
        <Modal.Content>
          {user ? (
            <>
              <Header as='h2'>
                You are {user?.displayName}
              </Header>
              <div className='login-button'>
                <Button
                  content='Log out'
                  onClick={handleLogOut}
                />
              </div>
            </>
          ) : (
            <>
              <Header as='h2' content={loginMessage} />
              <Divider />
              <p> Please log in with the same credentials as your UNSW account</p>
              <Form>
                <Message
                  negative
                  hidden={!errorVisibility}
                  content={errorMsg}
                />
                <Form.Field>
                  <label>zID</label>
                  <Input
                    name='zID'
                    label='z'
                    labelPosition='left'
                    value={zid}
                    onChange={(e, { value }) => setZid(value)}
                    placeholder='5555555'
                  />
                </Form.Field>
                <Form.Input
                  label='Password'
                  type='password'
                  value={zpass}
                  onChange={(e, { value }) => setZpass(value)}
                />
                <div className='login-button'>
                  <Button
                    content='Log in'
                    type='submit'
                    onClick={handleSubmit}
                  />
                </div>
              </Form>
            </>
          )}
        </Modal.Content>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  loginMessage: PropTypes.string,
  setLoginMessage: PropTypes.func,
};

export default LoginModal;
