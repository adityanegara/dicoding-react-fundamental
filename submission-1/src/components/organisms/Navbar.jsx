import { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../atoms/Button/Button";
import searchIcon from "../../assets/icons/search.png";
import createIcon from "../../assets/icons/plus.png";
import dotsIcon from "../../assets/icons/dots.png";
import { useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";

const NavbarStyled = styled(motion.nav)({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "flex-end",
  gap: "15px",
});

const Tooltip = styled(motion.div)({
  display: "inline-block",
  position: "relative",
});

const TooltipContent = styled(motion.ul)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "15px",
  listStyleType: "none",
  marginTop: "0px",
  backgroundColor: theme.colors.neutral.gray,
  padding: "25px",
  top: "60px",
  left: "-30px",
  borderRadius: "10px",
  transform: "translate(-50%, 0)",
  position: "absolute",
  zIndex: "99999999",
}));

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

const toolTipItemVariant = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
  exit: { opacity: 0},
};

const Navbar = () => {
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const theme = useTheme();

  const renderTooltip = (isTooltipOpen) => {
    return isTooltipOpen ? (
      <TooltipContent
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={navbarVariant}
      >
        <motion.li variants={toolTipItemVariant}>
          {" "}
          <Button
            onClick={() => {}}
            buttonColor={theme.colors.neutral.gray}
            buttonHoverColor={theme.colors.neutral.darkGray}
            role="search-button"
          >
            All
          </Button>
        </motion.li>
        <motion.li variants={toolTipItemVariant}>
          {" "}
          <Button
            onClick={() => {}}
            buttonColor={theme.colors.neutral.gray}
            buttonHoverColor={theme.colors.neutral.darkGray}
            role="search-button"
          >
            Archived
          </Button>
        </motion.li>
      </TooltipContent>
    ) : null;
  };
  return (
    <>
      <NavbarStyled initial="hidden" animate="visible" variants={navbarVariant}>
        <motion.div variants={buttonVariant}>
          <Button
            onClick={() => {}}
            buttonColor={theme.colors.primary.normal}
            buttonHoverColor={theme.colors.primary.darker}
            role="search-button"
          >
            <img src={searchIcon} alt="search-icon" />
          </Button>
        </motion.div>
        <motion.div variants={buttonVariant}>
          <Button
            onClick={() => {}}
            buttonColor={theme.colors.primary.normal}
            buttonHoverColor={theme.colors.primary.darker}
            role="create-button"
          >
            <img src={createIcon} alt="create-icon" />
          </Button>
        </motion.div>
        <Tooltip variants={buttonVariant}>
          <Button
            onClick={() => {
              setTooltipOpen(!isTooltipOpen);
            }}
            buttonColor={theme.colors.primary.normal}
            buttonHoverColor={theme.colors.primary.darker}
            role="archived-tooltip_button"
          >
            <img src={dotsIcon} alt="dots-icon" />
          </Button>
          <AnimatePresence>
            {renderTooltip(isTooltipOpen)}
          </AnimatePresence>
        </Tooltip>
      </NavbarStyled>
    </>
  );
};

Navbar.defaultProps = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
