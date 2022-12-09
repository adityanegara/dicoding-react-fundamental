import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../atoms/Button/Button";
import searchIcon from "../../assets/icons/search.png";
import createIcon from "../../assets/icons/plus.png";
import dotsIcon from "../../assets/icons/dots.png";
import { useTheme } from "@emotion/react";

const NavbarStyled = styled.nav({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "flex-end",
  gap: "15px",
});

const Navbar = () => {
  const theme = useTheme();
  return (
    <>
      <NavbarStyled>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.primary.normal}
          buttonHoverColor={theme.colors.primary.darker}
          role="search-button"
        >
          <img src={searchIcon} alt="search-icon" />
        </Button>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.primary.normal}
          buttonHoverColor={theme.colors.primary.darker}
          role="create-button"
        >
          <img src={createIcon} alt="create-icon" />
        </Button>
        <Button
          onClick={() => {}}
          buttonColor={theme.colors.primary.normal}
          buttonHoverColor={theme.colors.primary.darker}
          role="archived-tooltip_button"
        >
          <img src={dotsIcon} alt="dots-icon" />
        </Button>
      </NavbarStyled>
    </>
  );
};

Navbar.defaultProps = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
