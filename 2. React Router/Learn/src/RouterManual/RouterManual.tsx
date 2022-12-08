import React from "react";
import AboutPage from "../Pages/AboutPage";
import HomePage from "../Pages/HomePage";
import FAQPage from "../Pages/FAQPage";
import Link from "./Link";

type AppProps = {};

type AppState = {
  page: string;
};

class RouterManual extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }
  state: AppState = {
    page: "/", // akan menampilkan komponen <AboutPage />
  };
  navigate(target: string) {
    this.setState(() => {
      return {
        page: target,
      };
    });
  }

  render() {
    return (
      <>
        <header>
          <ul>
            <li>
              <Link target="/" navigate={this.navigate}>
                Home
              </Link>
            </li>
            <li>
              <Link target="/about" navigate={this.navigate}>
                About
              </Link>
            </li>
            <li>
              <Link target="/faq" navigate={this.navigate}>
                FAQ
              </Link>
            </li>
          </ul>
        </header>
        <main>
          {this.state.page === "/" && <HomePage />}
          {this.state.page === "/about" && <AboutPage />}
          {this.state.page === "/faq" && <FAQPage />}
        </main>
      </>
    );
  }
}

export default RouterManual;
