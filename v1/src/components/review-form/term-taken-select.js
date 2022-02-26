import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const terms = [];
const date = new Date();
const year = date.getFullYear() % 100; // Last two digits of year
const month = date.getMonth();

if (month >= 9) terms.push(`${year}T3`);
if (month >= 6) terms.push(`${year}T2`);
if (month >= 2) terms.push(`${year}T1`);

for (let i = year - 1; i >= year - 3; i--) {
  if (i <= 18) {
    // Semesters up until 2018
    terms.push(`${i}S2`, `${i}S1`);
  } else {
    // Trimesters from 2019
    terms.push(`${i}T3`, `${i}T2`, `${i}T1`);
  }
}

const termOptions = terms.map((term) => ({ value: term, text: term }));

const TermTakenSelect = (props) => {
  const { termTaken, setTermTaken } = props;

  return (
    <Form.Group inline>
      <Form.Dropdown
        placeholder='Select term taken'
        search
        selection
        options={termOptions}
        value={termTaken}
        onChange={(e, { value }) => setTermTaken(value)}
      />
    </Form.Group>
  );
};

TermTakenSelect.propTypes = {
  termTaken: PropTypes.string,
  setTermTaken: PropTypes.func,
};

export default TermTakenSelect;
