import * as React from "react";
import { withStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import WifiIcon from "@material-ui/icons/Wifi";
import BluetoothIcon from "@material-ui/icons/Bluetooth";
import styles from "./style.css";
import {
  ISettingProps,
  ISettingState,
} from "./types";

const s = createStyles({});

class Setting extends React.Component<ISettingProps, ISettingState> {
  public divRef: React.RefObject<HTMLDivElement>;
  constructor(props: ISettingProps) {
    super(props);
    this.state = {
      checked: [],
    };
    this.divRef = React.createRef();
  }

  public componentDidMount() {
    //
  }

  public handleToggle(value: string) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
    });
    // console.log(this.divRef.current);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div
        className={styles.container}
        ref={this.divRef}
      >
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary="Wi-Fi" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle.bind(this, "wifi")}
                checked={this.state.checked.indexOf("wifi") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BluetoothIcon />
            </ListItemIcon>
            <ListItemText primary="Bluetooth" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle.bind(this, "bluetooth")}
                checked={this.state.checked.indexOf("bluetooth") !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(s)(Setting);
