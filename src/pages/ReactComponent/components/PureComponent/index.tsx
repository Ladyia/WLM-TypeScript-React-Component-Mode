import * as React from "react";
import Button from "@material-ui/core/Button";
import MyText from "./Text";
import MyComparison from "./Comparison";
import TextField from "@material-ui/core/TextField";
import {
  IProps,
  IState,
} from "./types";
import styles from "./style.css";

class MyPureComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: "",
      name: "",
    };
  }

  public handleChange = (e: React.ChangeEvent) => {
    const target = e.target as any;
    this.setState({
      name: target.value,
    });
  }

  public handleClick = () => {
    this.setState({
      text: this.state.name,
    });
  }

  public render() {
    const {
      name,
      text,
    } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <div>
            <TextField
              id="standard-name"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div className={styles.action}>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClick}
            >
              操作
            </Button>
          </div>
        </div>
        <MyText
          text={text}
        />
        <MyComparison
          text={text}
        />
      </div>
    );
  }
}

export default MyPureComponent;
