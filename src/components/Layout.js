import Header from "./Header";
import Container from "./Container";

function Layout(props) {
  return (
    <>
      <Header />
      <main>
        <Container>{props.children}</Container>
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
