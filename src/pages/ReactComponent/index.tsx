import * as React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import { withStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  IReactPageProps,
  IReactPageState,
} from "./types";

const s = createStyles({});

const TabContainer: React.SFC = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

class ReactPage extends React.Component<IReactPageProps, IReactPageState> {
  public static childContextTypes = {
    localImageSrc: PropTypes.string,
  };

  constructor(props: IReactPageProps) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  public handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    this.setState({ value });
  }

  public getChildContext() {
    return {
      localImageSrc: "http://images.w3crange.com/welearnmore.png",
    };
  }

  public render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="无状态函数组件" />
          <Tab label="有状态的类组件" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Header
              onLineImageSrc="http://images.w3crange.com/welearnmore.png"
            />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    );
  }
}

export default withStyles(s)(ReactPage);
