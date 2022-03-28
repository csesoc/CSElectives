import React from 'react';
import { Item } from 'semantic-ui-react';

const TopBar = () => {
  return (
    <div className='item-container'>
      <Item className='topbar'>
        <Item.Content className='topbar-contents-container'>
          <div className='topbar-item topbar-contents-code'>
            <Item.Header className='topbar-header'>Course Code</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-name'>
            <Item.Header className='topbar-header'>Course Name</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-tag'>
            <Item.Header className='topbar-header'>Tags</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-rating'>
            <Item.Header className='topbar-header'>Overall Rating</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-enjoyability'>
            <Item.Header className='topbar-header'>Enjoyability</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-usefulness'>
            <Item.Header className='topbar-header'>Usefulness</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-manageability'>
            <Item.Header className='topbar-header'>Manageability</Item.Header>
          </div>
          <div className='topbar-item topbar-contents-num'>
            <Item.Header className='topbar-header'>No. of Reviews</Item.Header>
          </div>
        </Item.Content>
      </Item>
    </div>
  );
};

export default TopBar;
