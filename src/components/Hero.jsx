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
  padding: "48px 16px 80px 16px",
});

const FirstBox = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const Heading = styled(Typography)({
  color: "#fff",
  fontSize: "36px",
  lineHeight: "42px",
  letterSpacing: "-0.36px",
});

const SubHeading = styled(Typography)({
  color: "#b1ccfb",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  margin: "16px 0 24px 0",
});

const ButtonStyle = styled(Button)({
  color: "#fff",
  fontSize: "14px",
  lineHeight: "20px",
  padding: "10px 16px",
});

const Support = styled(Typography)({
  color: "#fff",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "-0.1px",
  margin: "16px 0",
});

const ImgBox = styled(Box)({
  background: "#2B63D9",
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Images = styled("img")({
  width: "80px",
  height: "auto",
  marginRight: "10px",
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
