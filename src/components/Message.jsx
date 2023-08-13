import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "@emotion/styled";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShareIcon from "@mui/icons-material/Share";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Component = styled(Box)({
  height: "80vh",
  background: "#fff",
  width: "1285px",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
});

const TopBox = styled(Box)({
  justifyContent: "center",
  alignItems: "center",
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
  color: "#5F6D7E",
  alignSelf: "center",
  margin: "25px 0px 75px 0px",
  textAlign: "center",
});

const OneBox = styled(Box)({
  display: "flex",
  margin: "15px 10px 20px 23px",
});

const TwoBox = styled(Box)({
  display: "flex",
  margin: "15px 5px 20px 23px",
});

const MainnBox = styled(Box)({
  margin: "15px 5px 20px 20px",
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
const ButtonStyle = styled(Button)({
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  fontSize: "15px",
});

const Message = () => {
  return (
    <Component>
      <TopBox>
        <Heading>Messaging for all</Heading>
        <SubHeading>
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </SubHeading>
      </TopBox>
      <MainnBox>
        <OneBox>
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
              <Diversity2Icon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Easier Work Organization</CardHeading>
              <CardSub>
                Efficiently unleash cross-media information without cross-media
                value. Quickly timely deliverables for real-time schemas.{" "}
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
              <AddCircleIcon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Fast Connection</CardHeading>
              <CardSub>
                Completely pursue scalable customer cross- media through
                potentialities. Holistically quickly installed portals.{" "}
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
              <ShareIcon style={{ margin: "2px 2px 0 3px" }} />
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
        </OneBox>
        <TwoBox>
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
              <IntegrationInstructionsIcon
                style={{ margin: "2px 2px 0 3px" }}
              />
            </Box>
            <CarddContent>
              <CardHeading>Easier Integrations</CardHeading>
              <CardSub>
                Completely pursue scalable customer try through potentialities.
                Pontificate portals installed. Efficiently unleash information.
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
              <AddBusinessIcon style={{ margin: "2px 2px 0 5px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Marketing Analytics</CardHeading>
              <CardSub>
                Phosfluorescently engage worldwide methodologies with
                web-enabled Interactively coordinate methodologies.
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
              <DriveFileRenameOutlineIcon style={{ margin: "2px 2px 0 4px" }} />
            </Box>
            <CarddContent>
              <CardHeading>Workflow Builder</CardHeading>
              <CardSub>
                Collaboratively administrate turnkey service channels whereas
                virtual e-tailers. This is objectively scalable metrics whereas.
              </CardSub>
            </CarddContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </TwoBox>
      </MainnBox>
    </Component>
  );
};

export default Message;
