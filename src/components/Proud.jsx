import * as React from "react";
import { Box, Typography } from "@mui/material";
import LogoOne from "../images/gitlab.png";
import LogoTwo from "../images/slack.svg";
import LogoThree from "../images/Netflix.jpg";
import LogoFour from "../images/paypal.png";
import LogoFive from "../images/Press Logo.png";
import LogoSix from "../images/Company Logo (1).png";
import LogoSeven from "../images/Company Logo (3).png";
import styled from "@emotion/styled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

const Component = styled(Box)({
  display: "flex",
  flexDirection: "column", // Align children vertically
  justifyContent: "center", // Center vertically
  alignItems: "center", // Center horizontally
  gap: "64px",
  textAlign: "center",
  height: "100vh",
  padding: "48px 32px 80px 32px",
});

const Heading = styled(Typography)({
  color: "#272D37",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "40px",
  letterSpacing: "-0.64px",

  textAlign: "center",
});

const SubHeading = styled(Typography)({
  color: "#5F6D7E",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  margin: "16px 0 0 0",
  textAlign: "center",
});
const SecondBox = styled(Box)({
  marginTop: "0px",
});

const Images = styled("img")({
  width: "112px",
  height: "40px",
  margin: "64px 32px 64px 32px",
});
const ImgBox = styled(Box)({
  marginTop: "25px",
});

const BoxTwo = styled(Box)({
  marginTop: "5px",
  textAlign: "center",
});
const BoxThree = styled(Box)({
  display: "flex",
  textAlign: "center",
  margin: "32px 0 32px 0px",
  paddingLeft: "120px",
});

const Text = styled(Typography)({
  margin: "32px 0 10px 0",
  color: "#437EF7",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  textAlign: "center", // Center the text
});

const TextOne = styled(Typography)({
  display: "flex",
  margin: "32px",
  textAlign: "center", // Center the text
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  fontStyle: "normal",
});

const Boxinput = styled(Box)({
  marginTop: "32px",
});

const Proud = () => {
  return (
    <Component>
      <Box>
        <Heading>Proud to Be Used By</Heading>
        <SubHeading>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate <br /> resource- leveling customer service
          for state of the art customer service.
        </SubHeading>
        <SecondBox>
          <ImgBox>
            <Images src={LogoOne} alt="logo" />
            <Images src={LogoTwo} alt="logo" />
            <Images src={LogoThree} alt="logo" />
            <Images src={LogoFour} alt="logo" />
            <Images src={LogoFive} alt="logo" />
            <Images src={LogoSix} alt="logo" />
            <Images src={LogoSeven} alt="logo" />
          </ImgBox>
        </SecondBox>
      </Box>
      <BoxTwo>
        <Text>1% OF THE INDUSTRY</Text>
        <Heading>
          Welcome to your new digital reality that will rock
          <br /> your world truly at all throughout.
        </Heading>
        <Boxinput>
          <Input
            sx={{
              "--Input-decoratorChildHeight": "45px",
            }}
            placeholder="Enter your email"
            type="email"
            endDecorator={
              <Button
                variant="solid"
                color="primary"
                type="submit"
                sx={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  width: 110,
                  height: 10,
                }}
              >
                Submit
              </Button>
            }
          />
        </Boxinput>

        <BoxThree>
          <TextOne>
            <CheckCircleIcon
              style={{
                color: "#437ef7",
              }}
            />
            Fully Secure
          </TextOne>
          <TextOne>
            <CheckCircleIcon
              style={{
                color: "#437ef7",
              }}
            />
            24/7 Support
          </TextOne>
          <TextOne>
            <CheckCircleIcon
              style={{
                color: "#437ef7",
              }}
            />
            Done Deal
          </TextOne>
        </BoxThree>
      </BoxTwo>
    </Component>
  );
};

export default Proud;
