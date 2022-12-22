import React from "react";
import LocaleContext from "./LocaleContext";

class BlogClassComponent extends React.Component {
  render() {
    let { locale, toggleLocale } = this.context;
    return (
      <>
        <p>Language is {locale}</p>
        <button onClick={toggleLocale}>Toggle language</button>
      </>
    );
  }
}
BlogClassComponent.contextType = LocaleContext;
export default BlogClassComponent;
