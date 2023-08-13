import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import logo from "../images/logo.jpg";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Component = styled(AppBar)({
  display: "flex",
  width: "1440px",
  height: "90px",
  padding: "20px 160px",
  justifyContent: "center",
  borderBottom: "1px solid #648EF7",
  background: "#2B63D9",

  gap: "10px",
});

const Image = styled("img")`
  height: 40px;
  width: 160px;
`;

const BoxStyle = styled(Box)({
  display: "flex",
  margin: "0 64px 0 64px",
});

const MenuButton = styled(Button)({
  color: "#fff",
  fontSize: "15px",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  marginRight: "20px",
  textTransform: "none",
});

const LoginButton = styled(Button)({
  color: "#fff",
  width: "44px",
  height: "22px",
  fontWeight: "bold",
  fontSize: "10xp",
  textTransform: "none",
});

const SignupButton = styled(Button)({
  width: "90px",
  height: "35px",
  fontWeight: "bold",
  fontSize: "10xp",
  marginLeft: "24px",
  textTransform: "none",
  backgroundColor: "#437EF7",
});

const NavBar = () => {
  return (
    <Component>
      <Toolbar>
        <Image src={logo} alt="logo" />
        <BoxStyle
          style={{
            marginRight: "125px",
          }}
        >
          <MenuButton>Home</MenuButton>
          <MenuButton>Our Products</MenuButton>
          <MenuButton>
            Resources <KeyboardArrowDownIcon />
          </MenuButton>

          <MenuButton>Contact</MenuButton>
        </BoxStyle>
        <Box
          style={{
            marginLeft: "110px",
            paddingRight: "0px",
          }}
        >
          <LoginButton>Log in</LoginButton>
          <SignupButton variant="contained">Sign up</SignupButton>
        </Box>
      </Toolbar>
    </Component>
  );
};

export default NavBar;
