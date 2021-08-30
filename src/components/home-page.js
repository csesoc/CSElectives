import { Dropdown, Header, Input } from "semantic-ui-react";

const HomePage = () => {
  return (
    <>
      <Header as='h1'>Home Page</Header>

      {/* Input component: https://react.semantic-ui.com/elements/input/ */}
      <Input placeholder="You'll need a text box!"/>

      {/* Dropdown component --> scroll to search selection to implement options: https://react.semantic-ui.com/modules/dropdown/ */}
      <Dropdown
        search
        selection
        placeholder="Or you could use a search dropdown!"
      />

      {/* Check out the Dropdown component page for examples of inline dropdowns, and filter dropdowns */}

      <div>Add your 💩shit here...</div>
    </>
  );
};

export default HomePage;