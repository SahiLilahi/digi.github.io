import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  Grid,
  CardActionArea,
} from "@mui/material";
import Image from "../images/Image2.png";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Component = styled(Box)({
  background: "#fff",
  padding: "48px 16px 80px 16px",
  alignItems: "center",
});

const TopBox = styled(Box)({
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginTop: "80px",
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

const Heading = styled(Typography)({
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "40px",
  letterSpacing: "-0.64px",
  alignSelf: "center",
  color: "#272D37",
  marginBottom: "16px",
  textAlign: "center",
});

const SubHeading = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#A5ACBA",
  alignSelf: "center",
  marginBottom: "40px",
  textAlign: "center",
});

const Cardd = styled(Card)({
  height: "80%",
  padding: "15px",
  border: "none",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#F9FAFB",
});

const CardHeading = styled(Typography)({
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "-0.22px",
  color: "#272d37",
  marginBottom: "8px",
});

const CardSub = styled(Typography)({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  color: "#5f6d7e",
  marginBottom: "16px",
});

const ImgBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Imagee = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  paddingTop: "20px",
});

const ButtonStyle = styled(Button)({
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "22px",
});

const Feature = () => {
  return (
    <Component>
      <TopBox>
        <Heading>Redefining Product Features</Heading>
        <SubHeading>
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence
          <br /> on cross-platform integration.
        </SubHeading>
      </TopBox>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ImgBox>
            <Imagee src={Image} alt="Image" />
          </ImgBox>
        </Grid>
        <Grid item xs={12} s md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <Cardd>
                <CardActionArea>
                  <IconBox>
                    <DonutSmallIcon style={{ margin: "2px 2px 0 5px" }} />
                  </IconBox>
                  <CardContent>
                    <CardHeading>Streamlined Processes</CardHeading>
                    <CardSub>
                      Objectively innovate empowered scalable manufactured
                      products whereas parallel platforms predominate
                      extensible.
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
        </Grid>
      </Grid>
    </Component>
  );
};

export default Feature;
