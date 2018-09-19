import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { IAlertProps, IAlertState } from "./types";

class Alert extends React.Component<IAlertProps, IAlertState> {
  constructor(props: IAlertProps) {
    super(props);
    this.state = {};
  }
  public render() {
    const {open, handleClose, message} = this.props;
    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            提示
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default Alert;
