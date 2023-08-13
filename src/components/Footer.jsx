import { Box, Typography } from "@mui/material";
import logo from "../images/logo.jpg";
import styled from "@emotion/styled";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";

const Component = styled(Box)({
  height: "30vh",
  background: "#151B28",
  justifyContent: "center",
  alignItems: "center",

  width: "1285px",
  padding: "48px 32px 80px 32px",
});

const Image = styled("img")`
  height: 40px;
  width: 160px;
  margin: 0 75px 0 0px;
`;

const BoxStyle = styled(Box)({
  display: "flex",
  margin: "0 64px 0 64px",
});

const BoxOne = styled(Box)({
  display: "flex",
  borderBottom: "1px solid #A5ACBA",
  height: "100%",
});

const BoxTwo = styled(Box)({
  display: "flex",
});

const Heading = styled(Typography)({
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#F9F9F9",
  marginBottom: "20px",
});

const SubHeading = styled(Typography)({
  color: "#A5ACBA",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  marginBottom: "8px",
});

const TextOne = styled(Typography)({
  width: "247px",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#A5ACBA",
  textAlign: "start",
});

const TextTwo = styled(Typography)({
  width: "302px",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#A5ACBA",
  textAlign: "start",
});

const TextBottom = styled(Typography)({
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#A5ACBA",
});

const SmallBox = styled(Box)({
  textAlign: "center",
  marginRight: "auto",
});

const SocialBox = styled(Box)({
  color: "#FFF",
  paddingLeft: "800px",
  marginTop: "10px",
});

const Footer = () => {
  return (
    <Component>
      <BoxOne>
        <SmallBox
          style={{
            textAlign: "start",
          }}
        >
          <Image src={logo} alt="logo" />

          <TextOne>
            Generate outside the box thinking with the possibility to targtet
            the low.
          </TextOne>
        </SmallBox>
        <SmallBox>
          <Heading>Resources</Heading>
          <SubHeading>Community</SubHeading>
          <SubHeading>Events</SubHeading>
          <SubHeading>Help Center</SubHeading>
          <SubHeading>Partners</SubHeading>
        </SmallBox>
        <SmallBox>
          <Heading>Products</Heading>
          <SubHeading>Integration</SubHeading>
          <SubHeading>Solutions</SubHeading>
          <SubHeading>Features</SubHeading>
          <SubHeading>Enterprise</SubHeading>
        </SmallBox>

        <SmallBox>
          <Heading>Get Email Notifications</Heading>
          <TextTwo>
            Generate outside the Box thinking with the possibility to targtet
            the low
          </TextTwo>
          <Input
            sx={{
              "--Input-decoratorChildHeight": "45px",
              marginTop: "15px",
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

                  height: 10,
                }}
              >
                Submit
              </Button>
            }
          />
        </SmallBox>
      </BoxOne>
      <BoxTwo>
        <TextBottom>© 2023 Lookscout. All Rights Reserved.</TextBottom>
        <SocialBox>
          <FacebookIcon
            style={{
              marginLeft: "15px",
            }}
          />
          <GoogleIcon
            style={{
              marginLeft: "10px",
            }}
          />
          <AppleIcon
            style={{
              marginLeft: "10px",
            }}
          />
          <InstagramIcon
            style={{
              marginLeft: "10px",
            }}
          />
        </SocialBox>
      </BoxTwo>
    </Component>
  );
};

export default Footer;
