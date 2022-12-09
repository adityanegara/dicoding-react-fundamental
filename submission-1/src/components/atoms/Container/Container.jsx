import styled from "@emotion/styled";
import React from "react";
import ScreenToSize from "./MapScreenToSize";
import PropTypes from "prop-types";

const ContrainerStyled = styled("div")(
  {
    marginLeft: "auto",
    marginRight: "auto",
  },
  (props) => ({
    width: `${ScreenToSize[props.screenSize]}%`,
  })
);

const Container = ({ children, screenSize }) => {
  return (
    <ContrainerStyled role="container" screenSize={screenSize}>
      {children}
    </ContrainerStyled>
  );
};

Container.defaultProps = {
  children: PropTypes.node.isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default Container;
