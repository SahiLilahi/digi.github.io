import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import Image1 from "../images/Rectangle 1.png";
import Image2 from "../images/Rectangle 1 (1).png";
import Image3 from "../images/Rectangle 1 (2).png";
import Image4 from "../images/Avatar (1).png";
import Image5 from "../images/Avatar (2).png";
import Image6 from "../images/Avatar3.png";
import styled from "@emotion/styled";

const Component = styled(Box)({
  padding: "48px 32px 80px 32px",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "40px",
  letterSpacing: "-0.52px",
  textAlign: "center",
});

const SubHeading = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  margin: "24px 0 64px 0",
  textAlign: "center",
});

const CeoBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 0",
});

const Name = styled(Typography)({
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "-0.1px",
  color: "#272D37",
  marginLeft: "10px",
});

const Post = styled(Typography)({
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  color: "#5F6D7E",
});

const CardStyle = styled(Card)({
  margin: "10px",
});

const CardHeading = styled(Typography)({
  fontSize: "22px",
  fontWeight: "600",
  lineHeight: "30px",
  letterSpacing: "-0.22px",
});

const CardText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
});

const Blog = () => {
  return (
    <Component>
      <Heading>Latest Blog Posts</Heading>
      <SubHeading>
        Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate one-to-one
        <br /> customer service with robust ideas.
      </SubHeading>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <CardStyle sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Image1}
                alt="green"
              />
              <CardContent>
                <CardHeading>
                  Organize your digital assets with a new methodology here.
                </CardHeading>
                <CardText>
                  Podcasting operational management inside of workflows to
                  establish a framework seamless. Convergence collaboratively.
                </CardText>
              </CardContent>
            </CardActionArea>
            <CeoBox>
              <img src={Image4} alt="logo" />
              <Box>
                <Name>Andrew Miller</Name>
                <Post>CEO</Post>
              </Box>
            </CeoBox>
          </CardStyle>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardStyle sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Image2}
                alt="green"
              />
              <CardContent>
                <CardHeading>
                  Organize your digital assets with a new methodology here.
                </CardHeading>
                <CardText>
                  Keeping your eye while performing a deep dive on the start-up
                  mentality to derive convergence collaboratively.
                </CardText>
              </CardContent>
            </CardActionArea>
            <CeoBox>
              <img src={Image5} alt="logo" />
              <Box>
                <Name>David Muler</Name>
                <Post>UX</Post>
              </Box>
            </CeoBox>
          </CardStyle>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardStyle sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Image3}
                alt="green"
              />
              <CardContent>
                <CardHeading>
                  Organize your digital assets with a new methodology here.
                </CardHeading>
                <CardText>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C.
                </CardText>
              </CardContent>
            </CardActionArea>
            <CeoBox>
              <img src={Image6} alt="logo" />
              <Box>
                <Name>Andrew Miller</Name>
                <Post>UI</Post>
              </Box>
            </CeoBox>
          </CardStyle>
        </Grid>
      </Grid>
    </Component>
  );
};

export default Blog;
