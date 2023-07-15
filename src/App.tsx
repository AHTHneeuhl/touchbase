import { Container } from "@mui/material";
import Content from "components/Content";
import Navbar from "components/Navbar";
import Topbar from "components/Topbar";

function App() {
  return (
    <Container
      maxWidth="sm"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Topbar />
      <Content />
      <Navbar />
    </Container>
  );
}

export default App;
