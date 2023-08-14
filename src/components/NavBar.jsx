import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider"; // Import Divider
import Button from "@mui/material/Button"; // Import Button
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Import KeyboardArrowDownIcon
import Hidden from "@mui/material/Hidden"; // Correct import
import styled from "@emotion/styled";
import logo from "../images/logo.jpg";

const Component = styled(AppBar)({
  display: "flex",
  width: "100%",
  height: "90px",
  justifyContent: "center",
  borderBottom: "1px solid #648EF7",
  background: "#2B63D9",
});

const Image = styled("img")({
  height: "40px",
  width: "160px",
});

const BoxStyle = styled(Box)({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-end",
});

const MenuButton = styled(Button)({
  color: "#fff",
  fontSize: "15px",
  fontFamily: "Inter",
  fontWeight: "600",
  lineHeight: "22px",
  marginRight: "20px",
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

const LoginButton = styled(Button)({
  color: "#fff",
  width: "44px",
  height: "22px",
  fontWeight: "bold",
  fontSize: "10xp",
  textTransform: "none",
});

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
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
        <Divider />
        <ListItem button>
          <ListItemText primary="Log in" />
        </ListItem>
        <ListItem button>
          <Button variant="contained">Sign up</Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Component>
      <Toolbar>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Image src={logo} alt="logo" />
        <BoxStyle>
          <Hidden smDown>
            <MenuButton>Home</MenuButton>
            <MenuButton>Our Products</MenuButton>
            <MenuButton>
              Resources <KeyboardArrowDownIcon />
            </MenuButton>
            <MenuButton>Contact</MenuButton>
            <LoginButton>Log in</LoginButton>
            <SignupButton variant="contained">Sign up</SignupButton>
          </Hidden>
        </BoxStyle>
      </Toolbar>
      <Hidden smUp implementation="css">
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          {drawerContent}
        </Drawer>
      </Hidden>
    </Component>
  );
};

export default NavBar;
