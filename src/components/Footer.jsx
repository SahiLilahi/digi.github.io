import React from "react";
//import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";

import styled from "@emotion/styled";
import logo from "../images/logo.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Component = styled(Box)({
  background: "#151B28",
});

const Image = styled("img")`
  height: 40px;
  width: 160px;
`;

const Content = styled(Box)({
  padding: "48px 32px 80px 32px",
});

const Heading = styled(Typography)({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  color: "#F9F9F9",
  marginBottom: "20px",
});

const SubHeading = styled(Typography)({
  color: "#A5ACBA",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  marginBottom: "8px",
});

const Text = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  color: "#A5ACBA",
});

const InputButtonWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "15px",
});

const SocialBox = styled(Box)({
  display: "flex",
  color: "#FFF",
  marginTop: "10px",
});

const Footer = () => {
  return (
    <Component>
      <Content>
        <Container
          style={{
            borderBottom: "1px solid #A5ACBA",
            paddingBottom: "10px",
            marginBottom: "10px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Image src={logo} alt="logo" />
              <Text>
                Generate outside the box thinking with the possibility to target
                the low.
              </Text>
            </Grid>
            <Grid item xs={12} md={3}>
              <Heading>Resources</Heading>
              <SubHeading>Community</SubHeading>
              <SubHeading>Events</SubHeading>
              <SubHeading>Help Center</SubHeading>
              <SubHeading>Partners</SubHeading>
            </Grid>
            <Grid item xs={12} md={3}>
              <Heading>Products</Heading>
              <SubHeading>Integration</SubHeading>
              <SubHeading>Solutions</SubHeading>
              <SubHeading>Features</SubHeading>
              <SubHeading>Enterprise</SubHeading>
            </Grid>
            <Grid item xs={12} md={3}>
              <Heading>Get Email Notifications</Heading>
              <Text>
                Generate outside the Box thinking with the possibility to target
                the low
              </Text>
              <InputButtonWrapper>
                <Input
                  sx={{
                    "--Input-decoratorChildHeight": "45px",
                    marginRight: "10px",
                  }}
                  placeholder="Enter your email"
                  type="email"
                />
                <Button variant="solid" color="primary">
                  Submit
                </Button>
              </InputButtonWrapper>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Text>© 2023 Lookscout. All Rights Reserved.</Text>
            </Grid>
            <Grid item xs={12} md={6}>
              <SocialBox>
                <FacebookIcon style={{ marginRight: "15px" }} />
                <GoogleIcon style={{ marginRight: "15px" }} />
                <AppleIcon style={{ marginRight: "15px" }} />
                <InstagramIcon />
              </SocialBox>
            </Grid>
          </Grid>
        </Container>
      </Content>
    </Component>
  );
};

export default Footer;
