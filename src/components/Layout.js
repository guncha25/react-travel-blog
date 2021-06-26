import Header from "./Header";
import Container from "./Container";
import { ThemeProvider } from "../util/hooks/Theme";

function Layout(props) {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Container>{props.children}</Container>
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default Layout;
