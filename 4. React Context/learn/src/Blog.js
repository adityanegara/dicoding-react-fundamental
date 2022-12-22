import LocaleContext from "./LocaleContext";

const Blog = () => {
  return (
    <LocaleContext.Consumer>
      {({ locale, toggleLocale }) => {
        return (
          <>
            <p>Language is {locale}</p>
            <button onClick={toggleLocale}>Toggle language</button>
          </>
        );
      }}
    </LocaleContext.Consumer>
  );
};

export default Blog;
