import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import styled from "@emotion/styled";
import logo from "../images/logo.jpg";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Component = styled(AppBar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  borderBottom: "1px solid #648EF7",
  background: "#2B63D9",
});

const Image = styled("img")`
  height: 40px;
  width: 160px;
  margin: 0 120px 0 0;
`;

const BoxStyle = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const MenuButton = styled(Button)({
  color: "#fff",
  fontSize: "15px",
  fontFamily: "Inter",
  fontWeight: "600",
  lineHeight: "22px",
  textTransform: "none",
  margin: "0 0 0 15px",
});

const LoginButton = styled(Button)({
  color: "#fff",
  fontWeight: "600",
  fontSize: "15px",
  textTransform: "none",
  marginLeft: "100px",
  lineHeight: "22px",
});

const SignupButton = styled(Button)({
  fontWeight: "600",
  fontSize: "15px",
  textTransform: "none",
  backgroundColor: "#437EF7",
  lineHeight: "22px",
});

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Our Products" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <LoginButton
          variant="contained"
          style={{
            margin: "4px",
          }}
        >
          Log in
        </LoginButton>
        <SignupButton variant="contained">Sign up</SignupButton>
      </Box>
    </Box>
  );

  return (
    <Component>
      <Toolbar>
        <Image src={logo} alt="logo" />
        {isSmallScreen ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list}
            </Drawer>
          </>
        ) : (
          <BoxStyle>
            <MenuButton>Home</MenuButton>
            <MenuButton>Our Products</MenuButton>
            <MenuButton>
              Resources <KeyboardArrowDownIcon />
            </MenuButton>
            <MenuButton>Contact</MenuButton>
            <LoginButton>Log in</LoginButton>
            <SignupButton variant="contained">Sign up</SignupButton>
          </BoxStyle>
        )}
      </Toolbar>
    </Component>
  );
};

export default NavBar;
