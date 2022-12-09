import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/styledTheme";
import global from "./theme/global";
import Navbar from "./components/organisms/Navbar";
import Container from "./components/atoms/Container/Container";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Container screenSize="mobile">
        <Navbar title="Logger" />
        
      </Container>
    </ThemeProvider>
  );
};

export default App;
