
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/course-page.css';

import { Button, Modal, Icon, Header, Form } from 'semantic-ui-react';

const FlagModal = (props) => {
  const [open, setOpen] = useState(false);
  const [flagReason, setFlagReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Modal
        trigger={<Icon name='flag outline icon' className='icon-flag-outline' />}
        size='tiny'
        closeIcon
        onClose={() => {
          setSubmitted(false);
          setOpen(false);
        }}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Header content={!submitted ? 'Reason for report' : 'Thanks for your report!'} />
        <Modal.Content>
          {!submitted
            ? (
              <Form>
                <div>
                  <b>Why are you reporting this?</b>
                </div>
                <br />
                <Form.Radio
                  label='Hate speech'
                  value='hate-speech'
                  name='htmlRadios'
                  checked={flagReason === 'hate-speech'}
                  onChange={(e, { value }) => setFlagReason(value)}
                />
                <Form.Radio
                  label='Spam'
                  name='htmlRadios'
                  value='spam'
                  checked={flagReason === 'spam'}
                  onChange={(e, { value }) => setFlagReason(value)}
                />
                <Form.Radio
                  label='Other'
                  name='htmlRadios'
                  value='other'
                  checked={flagReason === 'other'}
                  onChange={(e, { value }) => setFlagReason(value)}
                />
                <Form.Input
                  onChange={(e, { value }) => setFlagReason(value)}
                  placeholder='Please enter other reason here.'
                />
              </Form>
            ) : (
              <>
                Thanks again for your report. Your report helps make CSElectives
                a better and safer place for everyone!
              </>
            )
          }
          <Modal.Actions>
            <div className='flag-submit-button'>
              {!submitted ? (
                <Button
                  onClick={() => setSubmitted(true)}
                  disabled={!flagReason}
                  content='Submit'
                />
              ) : (
                <Button
                  onClick={() => setOpen(false)}
                  content='Done'
                  icon='check'
                />
              )}
            </div>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    </div>

  );
};


export default FlagModal;
