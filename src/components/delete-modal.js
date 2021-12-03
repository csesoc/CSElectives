
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Icon, Header } from 'semantic-ui-react';

import db from '../db/db';
import '../styles/course-page.css';

const DeleteModal = (props) => {
  const { reviewId } = props;
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(false);
    console.log(`Deleting ${reviewId}`);
  };

  return (
    <div>
      <Modal
        trigger={<Icon color='red' name='trash alternate outline' className='icon-flag-outline' />}
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Header content='Are you sure you want to delete this review?' />
        <Modal.Content>
          <Modal.Actions>
            <div className='flag-submit-button'>
              <Button
                onClick={() => handleDelete()}
                negative
                content='Delete'
              />
              <Button
                onClick={() => setOpen(false)}
                secondary
                content='Cancel'
              />
            </div>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    </div>

  );
};

DeleteModal.propTypes = {
  reviewId: PropTypes.string,
};

export default DeleteModal;
