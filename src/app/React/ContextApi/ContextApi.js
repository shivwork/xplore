import React from "react";

const ButtonTypeContext = React.createContext("cancel");

class ContextApi extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const a = { fName: "shiv", lName: "roy" };
    return (
      <div>
        Learn Context Api
        <ButtonTypeContext.Provider value={a}>
          <MoleculeContext />
        </ButtonTypeContext.Provider>
      </div>
    );
  }
}

const MoleculeContext = () => (
  <div>
    I am Molecule <ButtonContext />
  </div>
);

const ButtonConsumer = ButtonTypeContext.Consumer;
const ButtonContext = () => (
  <ButtonConsumer>
    {value => (
      <div>
        Hi--
        {JSON.stringify(value)}
      </div>
    )}
  </ButtonConsumer>
);

export default ContextApi;
