import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { ThemeProvider } from "../util/hooks/Theme";

function Layout(props) {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
