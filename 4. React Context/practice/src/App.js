import React from "react";
import "./App.css";
import ThemeContext from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState((prevState) => ({
          theme: prevState.theme === "light" ? "dark" : "light",
        }));
      },
    };
  }

  render(){
    return(
      <ThemeContext.Provider value={this.state}>
        <ThemeToggler/>
      </ThemeContext.Provider>
    )
  }
}

export default App;
