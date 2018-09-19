import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IMyTextProps {
  text: string;
}

class MyText extends React.PureComponent<IMyTextProps> {
  constructor(props: IMyTextProps) {
    super(props);
  }

  public render() {
    // console.log(this.props);
    const { text } = this.props;
    return (
      <Typography>
        PureComponent 值：{ text }
      </Typography>
    );
  }
}

export default MyText;
