import React from 'react';
import { Item } from 'semantic-ui-react';

const TopBar = () => {
  return (
    <div className='item-container'>
      <Item className='topbar'>
        <Item.Content className='topbar-contents-container'>
          <div className='topbar-item topbar-contents-code'>
            <Item.Header className='item-header'>Course Code</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-name'>
            <Item.Header className='item-header'>Course Name</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-tag'>
            <Item.Header className='item-header'>Tag</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-rating'>
            <Item.Header className='item-header'>Overall Rating</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-enjoyability'>
            <Item.Header className='item-header'>Enjoyability</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-usefulness'>
            <Item.Header className='item-header'>Usefulness</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-manageability'>
            <Item.Header className='item-header'>Manageability</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-major'>
            <Item.Header className='item-header'>Major</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-num'>
            <Item.Header className='item-header'>No. of Reviews</Item.Header>
          </div>
        </Item.Content>
      </Item>
    </div>
  );
};

export default TopBar;
