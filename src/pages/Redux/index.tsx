import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./flow/actions";
import * as TYPES from "./types";
import { IStoreState } from "../../global/types";
import styles from "./style.css";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const TabContainer: React.SFC = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

class ReduxComponent extends React.Component<TYPES.IReduxPageProps, TYPES.IReduxPageState> {
  constructor(props: TYPES.IReduxPageProps) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  public actionDataSync = () => {
    this.props.dataSync();
  }

  public actionDataAsync = () => {
    this.props.dataAsync("icepy");
  }

  public handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    this.setState({ value });
  }

  public render() {
    const { reduxPage } = this.props;
    const { syncId, asyncId } = reduxPage;
    const { value } = this.state;
    return (
      <div className={styles["container"]}>
        <div>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Sync action" />
            <Tab label="Async action" />
          </Tabs>
        </div>
        <div className={styles["contents"]}>
        {value === 0 && (
        <TabContainer>
          <Button variant="outlined" color="secondary" onClick={this.actionDataSync}> dataSync action </Button>
          <div className={styles["box"]}>
            syncId: { syncId }
          </div>
        </TabContainer>
        )}
        {value === 1 && (
        <TabContainer>
          <Button variant="outlined" color="secondary" onClick={this.actionDataAsync}> dataAsync action </Button>
          <div className={styles["box"]}>
            asyncId: { asyncId }
          </div>
        </TabContainer>
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { reduxPage, global } = state;
  return {
    reduxPage,
    global,
  };
};

const ReduxPage = connect(mapStateToProps, actions)(ReduxComponent);
export default ReduxPage;
