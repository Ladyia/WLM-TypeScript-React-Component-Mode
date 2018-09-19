import * as React from "react";
import PropTypes from "prop-types";
import { IHeaderProps } from "./types";
import styles from "./style.css";

const Header: React.SFC<IHeaderProps> = (props: IHeaderProps, context: any) => {
  const { onLineImageSrc } = props;
  return (
    <div className={styles["header-container"]}>
      <img src={context.localImageSrc} />
      <img src={onLineImageSrc} />
    </div>
  );
};

Header.contextTypes = {
  localImageSrc: PropTypes.string,
};

export default Header;
