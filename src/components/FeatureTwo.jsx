import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";
import Image from "../images/Image3.png";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Component = styled(Box)({
  background: "#151B28",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "48px 32px 80px 32px",
});

const Cardd = styled(Card)({
  background: "#151B28",
  padding: "5px",
  margin: "5px",
  border: "none",
  boxShadow: "none",
  maxWidth: "384px",
  width: "100%",
});

const CardHeading = styled(Typography)({
  fontSize: "22px",
  fontWeight: "600",
  lineHeight: "30px",
  letterSpacing: "-0.22px",
  marginTop: "10px",
  color: "#F9F9F9",
});

const CardSub = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  margin: "8px 0px 5px 0px",
  color: "#A5ACBA",
});

const ImgBox = styled(Box)({
  width: "100%",
  maxWidth: "500px",
});

const Imagee = styled("img")({
  width: "100%",
  height: "100%",
  margin: "40px 0 0 0",
});

const IconBox = styled(Box)({
  backgroundColor: "#437EF7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "25px",
  height: "25px",
  borderRadius: "100%",
  padding: "6px",
});

const ButtonStyle = styled(Button)({
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  fontSize: "15px",
});

const FeatureTwo = () => {
  return (
    <Component>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ImgBox>
            <Imagee src={Image} alt="Image" />
          </ImgBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Cardd>
            <CardActionArea>
              <IconBox>
                <TelegramIcon style={{ margin: "2px 2px 0 5px" }} />
              </IconBox>
              <CardContent>
                <CardHeading>Bring those ideas to life</CardHeading>
                <CardSub>
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </CardSub>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
          <Cardd>
            <CardActionArea>
              <IconBox>
                <TipsAndUpdatesIcon style={{ margin: "2px 2px 0 5px" }} />
              </IconBox>
              <CardContent>
                <CardHeading>Ship better outcomes</CardHeading>
                <CardSub>
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </CardSub>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
          <Cardd>
            <CardActionArea>
              <IconBox>
                <DonutSmallIcon style={{ margin: "2px 2px 0 5px" }} />
              </IconBox>
              <CardContent>
                <CardHeading>Streamlined Processes</CardHeading>
                <CardSub>
                  Objectively innovate empowered scalable manufactured products
                  whereas parallel platforms predominate extensible.
                </CardSub>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Grid>
      </Grid>
    </Component>
  );
};

export default FeatureTwo;
