import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IMyComparisonProps {
  text: string;
}

class MyComparison extends React.Component<IMyComparisonProps> {
  constructor(props: IMyComparisonProps) {
    super(props);
  }

  public shouldComponentUpdate(nextProps: IMyComparisonProps) {
    if (this.props.text === nextProps.text) {
      return false;
    }
    return true;
  }

  public render() {
    const { text } = this.props;
    return (
      <Typography>
        Component 值：{ text }
      </Typography>
    );
  }
}

export default MyComparison;
