import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const DEFAULT_COORDINATE = {
  x: -1,
  y: -1,
};

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

const StyledButton = styled("button")(
  {
    borderRadius: "4px",
    border: "none",
    padding: "14px 24px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "ease-in 0.2s",
  },
  (props) => ({
    background: props.buttonColor
      ? props.buttonColor
      : props.theme.colors.neutral.white,
    ["&:hover"]: {
      background: props.buttonHoverColor
        ? props.buttonHoverColor
        : props.theme.colors.neutral.gray,
    },
    color : props.theme.colors.neutral.black,
  })
);

const Ripple =
  styled("span")
  ({
    width: "10px",
    height: "10px",
    position: "absolute",
    background: "gray",
    display: "block",
    content: '""',
    borderRadius: "50%",
    opacity: 1,
    animation: `0.9s ease 1 forwards ${rippleEffect}`,
  },
  (props) => ({
    left: props.x,
    right: props.y,
    background: props.rippleColor
      ? props.rippleColor
      : props.theme.colors.neutral.darkGray,
  }));

const Content = styled("span")({
  position: "relative",
  zIndex: 2,
});

const Button = ({
  children,
  onClick,
  buttonColor,
  buttonHoverColor,
  rippleColor,
  className,
  role,
}) => {
  const [coordinate, setCoordinate] = useState(DEFAULT_COORDINATE);
  const [isRippling, setIsRippling] = useState(false);

  const checkCoordinate = (x, y) => {
    return x !== DEFAULT_COORDINATE.x && y !== DEFAULT_COORDINATE.y
      ? true
      : false;
  };

  const stopRipple = async (time) => {
    await setTimeout(() => setIsRippling(false), time);
  };

  const resetCoordinate = () => {
    setCoordinate(DEFAULT_COORDINATE);
  };

  useEffect(() => {
    if (checkCoordinate(coordinate.x, coordinate.y)) {
      setIsRippling(true);
      stopRipple(1000);
    } else {
      setIsRippling(false);
    }
  }, [coordinate]);

  useEffect(() => {
    if (!isRippling) {
      resetCoordinate();
    }
  }, [isRippling]);

  const renderRipple = (isRippling, coordinateX, coordinateY) => {
    return isRippling ? (
      <Ripple
        role="ripple"
        x={coordinateX}
        y={coordinateY}
        rippleColor={rippleColor}
      />
    ) : (
      ""
    );
  };

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoordinate({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    onClick && onClick(e);
  };
  return (
    <StyledButton
      role={role}
      className={className}
      onClick={handleClick}
      buttonColor={buttonColor}
      buttonHoverColor={buttonHoverColor}
    >
      {renderRipple(isRippling, coordinate.x, coordinate.y)}
      <Content>{children}</Content>
    </StyledButton>
  );
};

Button.defaultProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  rippleColor: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
