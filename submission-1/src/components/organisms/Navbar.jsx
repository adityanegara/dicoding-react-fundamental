import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../atoms/Button/Button";
import TooltipContent from "../molecules/Tooltip/Tooltip";
import searchIcon from "../../assets/icons/search.svg";
import createIcon from "../../assets/icons/plus.svg";
import dotsIcon from "../../assets/icons/dots.svg";
import { useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const NavbarStyled = styled(motion.nav)({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "flex-end",
  gap: "15px",
});

const ButtonIcon = styled.img({
  width: "35px",
  height: "35px",
});

const Tooltip = styled(motion.div)({
  display: "inline-block",
  position: "relative",
});

const navbarVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
    },
  },
};

const buttonVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const Navbar = () => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const tooltipRef = useRef(null);
  const theme = useTheme();
  useOnClickOutside(tooltipRef, () => {
    setTooltipOpen(false);
  });

  const renderTooltip = (isTooltipOpen) => {
    return isTooltipOpen ? <TooltipContent /> : null;
  };
  return (
    <NavbarStyled initial="hidden" animate="visible" variants={navbarVariant}>
      <motion.div variants={buttonVariant}>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.primary.normal}
          buttonHoverColor={theme.colors.primary.darker}
          role="search-button"
        >
          <ButtonIcon src={searchIcon} alt="search-icon" />
        </Button>
      </motion.div>
      <motion.div variants={buttonVariant}>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.primary.normal}
          buttonHoverColor={theme.colors.primary.darker}
          role="create-button"
        >
          <ButtonIcon src={createIcon} alt="create-icon" />
        </Button>
      </motion.div>
      <Tooltip ref={tooltipRef} variants={buttonVariant}>
        <Button
          onClick={() => {
            setTooltipOpen(!isTooltipOpen);
          }}
          buttonColor={theme.colors.primary.normal}
          buttonHoverColor={theme.colors.primary.darker}
          role="archived-tooltip_button"
        >
          <ButtonIcon src={dotsIcon} alt="dots-icon" />
        </Button>
        <AnimatePresence>{renderTooltip(isTooltipOpen)}</AnimatePresence>
      </Tooltip>
    </NavbarStyled>
  );
};

Navbar.defaultProps = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
