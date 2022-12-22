import sunIcon from "./assets/sun.png";
import moonIcon from "./assets/moon.png";
import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  const renderButtonIcon = (theme) => {
    return theme === "light" ? moonIcon : sunIcon;
  };

  const renderContainerTheme = (theme) =>{
    return theme === "light" ? "light" : "dark";
  }
  
  const renderText = (theme) =>{
    return theme === "light" ? "Early Bird" : "Night Owl";
  }

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <div className={`container ${renderContainerTheme(theme)}`}>
            <button onClick={()=>{toggleTheme()}} className="toggle-theme__button" aria-label="toggle theme">
              <img alt="sun" src={renderButtonIcon(theme)} />
            </button>
            <p>Hello, {renderText(theme)}.</p>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
