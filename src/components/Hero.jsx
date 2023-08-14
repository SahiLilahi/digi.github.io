import React from "react";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import LogoOne from "../images/gitlab.png";
import LogoTwo from "../images/slack.svg";
import LogoThree from "../images/Netflix.jpg";
import LogoFour from "../images/paypal.png";
import Image1 from "../images/Image1.png";

const Component = styled(Box)({
  background: "#2B63D9",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "48px 16px 40px 16px",
});

const FirstBox = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Heading = styled(Typography)({
  color: "#fff",
  fontSize: "52px",
  lineHeight: "60px",
  fontWeight: "700",
  fontStyle: "normal",
  letterSpacing: "-0.52px",
  margin: "24px 20px 24px 0",
});

const SubHeading = styled(Typography)({
  color: "#b1ccfb",
  fontSize: "18px",
  lineHeight: "26px",
  letterSpacing: "-0.1px",
  margin: "16px 0 24px 0",
  fontWeight: "400",
});

const ButtonStyle = styled(Button)({
  color: "#fff",
  fontSize: "14px",
  lineHeight: "20px",
  padding: "10px 16px",
});

const Support = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "500",
  letterSpacing: "-0.1px",
  margin: "35px 470px 24px 0px",
});

const ImgBox = styled(Box)({
  background: "#2B63D9",
  margin: "auto",
  display: "flex",
  alignItems: "center",
});

const Images = styled("img")({
  width: "80px",
  height: "auto",
  marginLeft: "20px",
});

const SideImgBox = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SideImage = styled("img")({
  width: "100%",
  border: "none",
  height: "auto",
});

const ImgBoxx = styled(Box)({
  margin: " 0 210px 0 0",
});

const Hero = () => {
  return (
    <Component>
      <Container>
        <Grid container spacing={2}>
          <FirstBox item xs={12} md={6}>
            <Box>
              <Heading>Your Supercharged Design Workflow</Heading>
              <SubHeading>
                We’ve been told it is not possible to overachieve our customers’
                expectations. We have not reinvented the wheel, we decided to
                build upon it.
              </SubHeading>
              <ButtonStyle variant="contained">Get Started</ButtonStyle>
            </Box>
            <Support>Who supports us</Support>
            <ImgBoxx>
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
            </ImgBoxx>
          </FirstBox>
          <SideImgBox item xs={12} md={6}>
            <SideImage src={Image1} alt="image" />
          </SideImgBox>
        </Grid>
      </Container>
    </Component>
  );
};

export default Hero;
