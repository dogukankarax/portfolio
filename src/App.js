import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import GlobalStyle from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
