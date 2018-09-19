import * as React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {
  IReactPageProps,
  IReactPageState,
} from "./types";
import Header from "./components/Header";
import Setting from "./components/Setting";
import MyContext from "./components/Context";
import MyPortals from "./components/Portals";
import MyFragments from "./components/Fragments";
import MyPureComponent from "./components/PureComponent";

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
          <Tab label="有状态类组件" />
          <Tab label="Context" />
          <Tab label="Portals 组件" />
          <Tab label="Fragments 组件" />
          <Tab label="PureComponent 组件" />
          <Tab label="高阶组件（HOC）" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Header
              onLineImageSrc="http://images.w3crange.com/welearnmore.png"
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Setting />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <MyContext />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <MyPortals />
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <MyFragments />
          </TabContainer>
        )}
        {value === 5 && (
          <TabContainer>
            <MyPureComponent />
          </TabContainer>
        )}
        {value === 6 && (
          <TabContainer>
            ...
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(s)(ReactPage);
