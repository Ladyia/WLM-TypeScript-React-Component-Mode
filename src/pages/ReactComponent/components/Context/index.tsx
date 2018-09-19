import * as React from "react";
import styles from "./style.css";

const MyContext = React.createContext("light");

const Toolbar: React.SFC = (props) => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton: React.SFC = (props) => {
  return (
    <MyContext.Consumer>
      { (theme) => {
        return (
          <div>主题：{ theme }</div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default class ContextPage extends React.Component {
  public render() {
    return (
      <MyContext.Provider value="dark">
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
