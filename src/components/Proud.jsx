import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
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
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
  textAlign: "center",
  minHeight: "100vh", // Use minHeight to ensure the component covers the whole viewport
  padding: "48px 16px 80px 16px",
});

const Heading = styled(Typography)({
  color: "#272D37",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "36px",
  letterSpacing: "-0.56px",
  textAlign: "center",
});

const SubHeading = styled(Typography)({
  color: "#5F6D7E",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  margin: "8px 0 0 0",
  textAlign: "center",
});

const Images = styled("img")({
  width: "80px",
  height: "28px",
  margin: "32px 16px",
});

const Proud = () => {
  return (
    <Component>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Heading>Proud to Be Used By</Heading>
          <SubHeading>
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate <br /> resource-leveling customer
            service for state of the art customer service.
          </SubHeading>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item xs={6} md={2}>
              <Images src={LogoOne} alt="logo" />
            </Grid>
            <Grid item xs={6} md={2}>
              <Images src={LogoTwo} alt="logo" />
            </Grid>
            <Grid item xs={6} md={2}>
              <Images src={LogoThree} alt="logo" />
            </Grid>
            <Grid item xs={6} md={2}>
              <Images src={LogoFour} alt="logo" />
            </Grid>
            <Grid item xs={6} md={2}>
              <Images src={LogoFive} alt="logo" />
            </Grid>
            <Grid item xs={6} md={2}>
              <Images src={LogoSix} alt="logo" />
            </Grid>
            <Grid item xs={6} md={2}>
              <Images src={LogoSeven} alt="logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary">
            1% OF THE INDUSTRY
          </Typography>
          <Heading>
            Welcome to your new digital reality that will rock
            <br /> your world truly at all throughout.
          </Heading>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={4} sm={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon
                  style={{
                    color: "#437ef7",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                <Typography variant="body2" color="primary">
                  Fully Secure
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon
                  style={{
                    color: "#437ef7",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                <Typography variant="body2" color="primary">
                  24/7 Support
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon
                  style={{
                    color: "#437ef7",
                    verticalAlign: "middle",
                    marginRight: "8px",
                  }}
                />
                <Typography variant="body2" color="primary">
                  Done Deal
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Component>
  );
};

export default Proud;
