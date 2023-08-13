import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import LogoOne from "../images/gitlab.png";
import LogoTwo from "../images/slack.svg";
import LogoThree from "../images/Netflix.jpg";
import LogoFour from "../images/paypal.png";
import Image1 from "../images/Image1.png";
const Component = styled(Box)({
  display: "flex",
  width: "1285px",
  padding: "48px 32px 80px 32px",
  alignItems: "center",
  gap: "64px",
  background: "#2B63D9",
  height: "100vh",
});

const FirstBox = styled(Box)({
  width: "50%",
});

const Heading = styled(Typography)({
  color: "#fff",
  fontSize: "52px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "60px",
  letterSpacing: "-0.52px",
  width: "80%",
});

const SubHeading = styled(Typography)({
  color: "#b1ccfb",
  fontFamily: "Inter",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
  letterSpacing: "-0.1px",
  width: "70%",
  margin: "24px 0 32px 0",
});

const ButtonStyle = styled(Button)({
  color: "#fff",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  display: "flex",
  gap: "6px",
  padding: "12px 18px",
});

const SecondBox = styled(Box)({
  marginTop: "150px",
});

const Support = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
});

const ImgBox = styled(Box)({
  background: "#2B63D9",
  marginTop: "25px",
});

const Images = styled("img")({
  width: "112px",
  height: "40px",
  marginRight: "10px",
});

const SideImgBox = styled(Box)({
  width: "50%",
});

const SideImage = styled("img")({
  width: "90%",
  border: "none",
  height: "600px",
});

const Hero = () => {
  return (
    <Component>
      <FirstBox>
        <Box>
          <Heading>Your Supercharged Design Workflow</Heading>
          <SubHeading>
            We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
          </SubHeading>
          <ButtonStyle variant="contained">Get Started</ButtonStyle>
        </Box>
        <SecondBox>
          <Support>Who supports us</Support>
          <ImgBox>
            <Images src={LogoOne} alt="logo" />
            <Images src={LogoTwo} alt="logo" />
            <Images src={LogoThree} alt="logo" />
            <Images
              src={LogoFour}
              alt="logo"
              style={{
                background: "black",
              }}
            />
          </ImgBox>
        </SecondBox>
      </FirstBox>
      <SideImgBox>
        <SideImage src={Image1} alt="image" />
      </SideImgBox>
    </Component>
  );
};

export default Hero;
