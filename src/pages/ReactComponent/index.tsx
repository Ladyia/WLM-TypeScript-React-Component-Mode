import * as React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";

class ReactPage extends React.Component {
  public static childContextTypes = {
    localImageSrc: PropTypes.string,
  };

  public getChildContext() {
    return {
      localImageSrc: "http://images.w3crange.com/welearnmore.png",
    };
  }

  public render() {
    return (
      <div>
        React Page
        <Header
          onLineImageSrc="http://images.w3crange.com/welearnmore.png"
        />
      </div>
    );
  }
}

export default ReactPage;
