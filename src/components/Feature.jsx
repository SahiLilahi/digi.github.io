import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
} from "@mui/material";
import Image from "../images/Image2.png";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Component = styled(Box)({
  height: "80vh",
  background: "#fff",
  width: "1285px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "330px",
  marginLeft: "50px",
});

const TopBox = styled(Box)({
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginTop: "80px",
});

const Heading = styled(Typography)({
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "40px",
  letterSpacing: "-0.64px",
  alignSelf: "center",
  color: "#272D37",
  margin: "64px 0px 16px 0px",
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
  margin: "25px 0px 75px 0px",
  textAlign: "center",
});

const Cardd = styled(Card)({
  height: "250px",
  width: "384px",
  padding: "5px",
  margin: "10px 10px 20px 10px",
  border: "none",
  boxShadow: "none",
});

const CarddContent = styled(CardContent)({
  padding: "5px",
});

const CardHeading = styled(Typography)({
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "30px",
  letterSpacing: "-0.22px",
  marginTop: "20px",
  color: "#272d37",
});
const CardSub = styled(Typography)({
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  margin: "12px 0 16px 0",
  color: "#5f6d7e",
});

const ContentBox = styled(Box)({
  display: "flex",
});

const ImgBox = styled(Box)({
  width: "50%",
  paddingLeft: "10px",
});

const Imagee = styled("img")({
  width: "100%",
  height: "90%",
  marginLeft: "100px",
});

const ButtonStyle = styled(Button)({
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  fontSize: "15px",
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
      <ContentBox>
        <Box>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
              }}
            >
              <TelegramIcon style={{ margin: "2px 2px 0 5px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Bring those ideas to life</CardHeading>
              <CardSub>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </CardSub>
            </CarddContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
              }}
            >
              <TipsAndUpdatesIcon style={{ margin: "2px 2px 0 5px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Ship better outcomes</CardHeading>
              <CardSub>
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </CardSub>
            </CarddContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
              }}
            >
              <DonutSmallIcon style={{ margin: "2px 2px 0 5px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Streamlined Processes</CardHeading>
              <CardSub>
                Objectively innovate empowered scalable manufactured products
                whereas parallel platforms predominate extensible.
              </CardSub>
            </CarddContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Box>
        <ImgBox>
          <Imagee src={Image} alt="Image" />
        </ImgBox>
      </ContentBox>
    </Component>
  );
};

export default Feature;
