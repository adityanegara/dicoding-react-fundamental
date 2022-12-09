import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../atoms/Button/Button";
import searchIcon from "../../assets/icons/search.png";
import createIcon from "../../assets/icons/plus.png";
import dotsIcon from "../../assets/icons/dots.png";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";

const NavbarStyled = styled(motion.nav)({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "flex-end",
  gap: "15px",
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
};

const buttonVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const Navbar = () => {
  const theme = useTheme();
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
        <motion.div variants={buttonVariant}>
          <Button
            onClick={() => {}}
            buttonColor={theme.colors.primary.normal}
            buttonHoverColor={theme.colors.primary.darker}
            role="archived-tooltip_button"
          >
            <img src={dotsIcon} alt="dots-icon" />
          </Button>
        </motion.div>
      </NavbarStyled>
    </>
  );
};

Navbar.defaultProps = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
