import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Alert from "../Alert";
import {
  IPortalsProps,
  IPortalsState,
} from "./types";

class MyPortals extends React.Component<IPortalsProps, IPortalsState> {

  constructor(props: IPortalsProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  public clickHandler = () => {
    this.setState({
      open: true,
    });
  }

  public clickHandlerClose = () => {
    this.setState({
      open: false,
    });
  }

  public render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.clickHandler}
        >
          提示
        </Button>
        {
          ReactDOM.createPortal(
            <Alert
              open={open}
              message="React Component Portals Use"
              handleClose={this.clickHandlerClose}
            />,
            document.getElementById("app")!,
          )
        }
      </div>
    );
  }
}

export default MyPortals;
