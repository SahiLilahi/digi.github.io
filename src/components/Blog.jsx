import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import Image1 from "../images/Rectangle 1.png";
import Image2 from "../images/Rectangle 1 (1).png";
import Image3 from "../images/Rectangle 1 (2).png";
import Image4 from "../images/Avatar (1).png";
import Image5 from "../images/Avatar (2).png";
import Image6 from "../images/Avatar3.png";
import styled from "@emotion/styled";

const Component = styled(Box)({
  width: "1285px",
  padding: "48px 0px 80px 150px",
  alignItems: "center",
  gap: "64px",
  height: "100vh",
  textAlign: "center",
});

const Heading = styled(Typography)({
  color: "#272D37",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "40px",
  letterSpacing: "-0.52px",
  width: "80%",
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
  width: "70%",
  margin: "24px 0 64px 0",
  textAlign: "center",
});

const CeoBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px 180px 10px 0",
});

const Name = styled(Typography)({
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "-0.1px",
  color: "#272D37",
  marginLeft: "10px",
});

const Post = styled(Typography)({
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  color: "#5F6D7E",
  marginRight: "50px",
});

const BoxCard = styled(Box)({
  display: "flex",
  width: "100%",
});

const CardStyle = styled(Card)({
  margin: "10px",
});

const CardHeading = styled(Typography)({
  color: "#272D37",
  fontsize: "22px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "30px",
  letterSpacing: "-0.22px",
});

const CardText = styled(Typography)({
  color: "#5F6D7E",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  fontSize: "16px",
  letterSpacing: "-0.1px",
});

const DateStyle = styled(Typography)({
  alignItems: "end",
  width: "10px",
  marginLeft: "0px",
  display: "none",
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

      <BoxCard>
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
            <DateStyle>25 Apr</DateStyle>
          </CeoBox>
        </CardStyle>
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
            <DateStyle>25 Apr</DateStyle>
          </CeoBox>
        </CardStyle>
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
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C .
              </CardText>
            </CardContent>
          </CardActionArea>
          <CeoBox>
            <img src={Image6} alt="logo" />
            <Box>
              <Name>Andrew Miller</Name>
              <Post>UI</Post>
            </Box>
            <DateStyle>25 Apr</DateStyle>
          </CeoBox>
        </CardStyle>
      </BoxCard>
    </Component>
  );
};

export default Blog;
