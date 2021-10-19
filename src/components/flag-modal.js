
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Grid, Card, Progress, Rating, Message,
  Popup, Button, Modal, Icon, Header, Form, Transition, Radio } from 'semantic-ui-react';
import ReviewRating from './review-rating/review-rating';


const FlagModal = (props) => {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [flagReason, setFlagReason] = useState('');


  return (
    <div
      style={{
        transform: 'translateY(0vh)',
        opacity: '1',
      }}
    >
      <Modal
        className="ui modal wrapper"
        trigger={
          <Button className='ui button flag'>
            <i className="flag outline icon"></i>
          </Button>
        }
        onClick={() => setFirstOpen(true)}
        size='tiny'
        closeIcon
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
      >
        <Header icon>
          Reason for report
        </Header>
        <Modal.Content>
          <Form>
            <div>
              <div>
                <b>
                  Why are you reporting this?
                </b>
              </div>
              <br />
              <Form.Radio
                label='Hate speech'
                value='hate-speech'
                name='htmlRadios'
                onChange={(e, { value }) => setFlagReason(value)}
              />
              <Form.Radio
                label='Spam'
                name='htmlRadios'
                value='spam'
                onChange={(e, { value }) => setFlagReason(value)}
              />
              <Form.Radio
                label='Other'
                name='htmlRadios'
                value='other'
                onChange={(e, { value }) => setFlagReason(value)}
              >
                <Form.Input
                  onChange={(e, { value }) => setFlagReason(value)}
                >
                  <input placeholder='Please enter reason here.' />
                </Form.Input>
              </Form.Radio>
              <div>
                <Form.Input
                  onChange={(e, { value }) => setFlagReason(value)}
                >
                  <input placeholder='Please enter other reason here.' />
                </Form.Input>
              </div>
            </div>
          </Form>
          <Modal.Actions>
            <div className='flag-submit-button'>
              <Button
                onClick={() => {
                  setSecondOpen(true);
                  setFirstOpen(false);
                } }
                disabled={
                  !flagReason
                }
                content='Submit'
              />
            </div>
          </Modal.Actions>
        </Modal.Content>
        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size='tiny'
          closeIcon
        >
          <Header icon>
            <Icon
              name='paper plane'
              color='blue'
            />
            Thanks for your report!
          </Header>
          <Modal.Content className="flag-submission-message">
            Thanks again for your report. Your reporting helps make CSElectives
            a better and safer place for everyone!
            <Modal.Actions>
              <div className='flag-done-button'>
                <Button
                  onClick={() => {
                    setSecondOpen(false);
                    setFirstOpen(false);
                  } }
                  icon='check'
                  content='Done'
                />
              </div>
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </Modal>
    </div>

  );
};


export default FlagModal;
