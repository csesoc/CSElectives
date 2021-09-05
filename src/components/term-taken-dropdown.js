import React from 'react';

import { Dropdown } from 'semantic-ui-react';

const termOptions = [
  { text: '2021T2' },
  { text: '2021T1' },
  { text: '2020T3' },
  { text: '2020T2' },
  { text: '2020T1' },
  { text: '2019T3' },
  { text: '2019T2' },
  { text: '2019T1' },
  { text: '2018S2' },
  { text: '2018S1' },
  { text: '2017S2' },
  { text: '2017S1' },
];

const TermTakenSelection = () => (
  <Dropdown
    placeholder='Select term taken'
    fluid
    search
    selection
    options={termOptions}
  />
);

export default TermTakenSelection;
