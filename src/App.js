import { Box } from "@mui/material";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Message from "./components/Message";
import Feature from "./components/Feature";
import FeatureTwo from "./components/FeatureTwo";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Proud from "./components/Proud";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Box
        style={{
          marginTop: "90px",
        }}
      >
        <Hero />
        <Message />
        <Feature />
        <FeatureTwo />
        <Testimonial />
        <Blog />
        <Proud />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
