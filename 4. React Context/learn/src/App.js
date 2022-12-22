import React from "react";
import LocaleContext from "./LocaleContext";
import Blog from "./Blog";
import BlogClassComponent from "./BlogClassComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "id",
      toggleLocale: () => {
        this.setState((prevState) => ({
          locale: prevState.locale === "id" ? "en" : "id",
        }));
      },
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        <Blog />
        <BlogClassComponent/>
      </LocaleContext.Provider>
    );
  }
}

export default App;
