import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShareIcon from "@mui/icons-material/Share";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Component = styled(Box)({
  background: "#fff",
  padding: "48px 16px 80px 16px",
  alignItems: "center",
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
  marginBottom: "16px",
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
  marginBottom: "40px",
  textAlign: "center",
});

const Cardd = styled(Card)({
  height: "100%",
  width: "100%",
  padding: "5px",
  border: "none",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#F9FAFB",
});

const CardHeading = styled(Typography)({
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "30px",
  letterSpacing: "-0.22px",
  color: "#272d37",
  marginBottom: "8px",
});

const CardSub = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#5f6d7e",
  marginBottom: "16px",
});

const ButtonStyle = styled(Button)({
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "22px",
});

const Message = () => {
  return (
    <Component>
      <TopBox>
        <Heading>Messaging for all</Heading>
        <SubHeading>
          User-generated content in real-time will have multiple touchpoints for
          offshoring.
        </SubHeading>
      </TopBox>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={6} lg={4}>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
                margin: "0 auto",
              }}
            >
              <Diversity2Icon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CardContent>
              <CardHeading>Easier Work Organization</CardHeading>
              <CardSub>
                Efficiently unleash cross-media information without cross-media
                value. Quickly timely deliverables for real-time schemas.
              </CardSub>
            </CardContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
                margin: "0 auto",
              }}
            >
              <AddCircleIcon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CardContent>
              <CardHeading>Fast Connection</CardHeading>
              <CardSub>
                Completely pursue scalable customer cross-media through
                potentialities. Holistically quickly installed portals.
              </CardSub>
            </CardContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
                margin: "0 auto",
              }}
            >
              <ShareIcon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CardContent>
              <CardHeading>Streamlined Processes</CardHeading>
              <CardSub>
                Objectively innovate empowered scalable manufactured products
                whereas parallel platforms predominate extensible.
              </CardSub>
            </CardContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
                margin: "0 auto",
              }}
            >
              <IntegrationInstructionsIcon
                style={{ margin: "2px 2px 0 3px" }}
              />
            </Box>
            <CardContent>
              <CardHeading>Easier Integrations</CardHeading>
              <CardSub>
                Completely pursue scalable customer cross-media through
                potentialities. Holistically quickly installed portals.
              </CardSub>
            </CardContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
                margin: "0 auto",
              }}
            >
              <AddBusinessIcon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CardContent>
              <CardHeading>Marketing Analytics</CardHeading>
              <CardSub>
                Phosfluorescently engage worldwide methodologies with
                web-enabled Interactively coordinate methodologies.
              </CardSub>
            </CardContent>
            <CardActions>
              <ButtonStyle color="primary" endIcon={<ArrowForwardIcon />}>
                Learn more
              </ButtonStyle>
            </CardActions>
          </Cardd>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cardd>
            <Box
              style={{
                backgroundColor: "#437EF7",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                borderRadius: "100%",
                padding: "8px",
                margin: "0 auto",
              }}
            >
              <DriveFileRenameOutlineIcon style={{ margin: "2px 2px 0 3px" }} />
            </Box>
            <CardContent>
              <CardHeading>Workflow Builder</CardHeading>
              <CardSub>
                Collaboratively administrate turnkey service channels whereas
                virtual e-tailers. This is objectively scalable metrics whereas.
              </CardSub>
            </CardContent>
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

export default Message;
