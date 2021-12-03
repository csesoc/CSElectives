import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

const DropdownSortMenu = (props) => {
  const { activeSort, setActiveSort, options } = props;

  const changeActiveSort = (e, { value }) => {
    setActiveSort(value);
  };

  return (
    <Dropdown
      selection
      button
      options={options}
      onChange={changeActiveSort}
      value={activeSort}
    >
    </Dropdown>
  );
};

DropdownSortMenu.propTypes = {
  activeSort: PropTypes.string,
  setActiveSort: PropTypes.func,
  options: PropTypes.array,
};

export default DropdownSortMenu;
