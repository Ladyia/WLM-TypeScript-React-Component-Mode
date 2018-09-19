import * as React from "react";
import {
  IFragmentsProps,
  IFragmentsState,
} from "./types";
import List from "@material-ui/core/List";
import Columns from "./Columns";

class Fragments extends React.Component<IFragmentsProps, IFragmentsState> {
  constructor(props: IFragmentsProps) {
    super(props);
    this.state = {

    };
  }

  public render() {
    return (
      <List component="nav">
        <Columns />
      </List>
    );
  }
}

export default Fragments;
