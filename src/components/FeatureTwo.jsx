import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
} from "@mui/material";
import Image from "../images/Image3.png";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Component = styled(Box)({
  height: "100vh",
  background: "#151B28",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "550px",

  display: "flex",
  width: "1285px",
  padding: "48px 32px 80px 32px",
});

const Cardd = styled(Card)({
  height: "200px",
  background: "#151B28",
  width: "384px",
  padding: "5px",
  margin: "5px",
  border: "none",
  boxShadow: "none",
});

const CarddContent = styled(CardContent)({
  padding: "0 5px 5px 0px",
});

const CardHeading = styled(Typography)({
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "30px",
  letterSpacing: "-0.22px",
  marginTop: "10px",
  color: "#F9F9F9",
});
const CardSub = styled(Typography)({
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  margin: "8px 5px 5px 0px",
  color: "#A5ACBA",
});

const CardBox = styled(Box)({
  width: "50%",
  height: "90%",
  margin: "0 10px 35px 180px",
});

const ImgBox = styled(Box)({
  width: "60%",
  height: "100%",
});

const Imagee = styled("img")({
  width: "100%",
  height: "100%",
  margin: "40px 0 0 30px",
});

const IconBox = styled(Box)({
  backgroundColor: "#437EF7",
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
      <ImgBox>
        <Imagee src={Image} alt="Image" />
      </ImgBox>
      <CardBox>
        <Cardd>
          <IconBox>
            <TelegramIcon style={{ margin: "2px 2px 0 5px" }} />
          </IconBox>
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
          <IconBox>
            <TipsAndUpdatesIcon style={{ margin: "2px 2px 0 5px" }} />
          </IconBox>
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
          <IconBox>
            <DonutSmallIcon style={{ margin: "2px 2px 0 5px" }} />
          </IconBox>
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
      </CardBox>
    </Component>
  );
};

export default FeatureTwo;
