import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Avatar from "../images/Avatar.png";
import Company from "../images/Company Logo.png";
import styled from "@emotion/styled";

const Component = styled(Box)({
  background: "#F8F9Fb",
  padding: "64px 32px",
});

const Heading = styled(Typography)({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "40px",
  letterSpacing: "-0.64px",
  color: "#272D37",
  marginBottom: "16px",
  textAlign: "center",
});

const SubHeading = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  letterSpacing: "-0.1px",
  color: "#5F6D7E",
  marginBottom: "48px",
  textAlign: "center",
});

const Image = styled("img")`
  height: 32px;
  width: 128px;
`;

const Text = styled(Typography)({
  fontSize: "28px",
  fontWeight: "500",
  lineHeight: "38px",
  letterSpacing: "-0.28px",
  color: "#272D37",
  marginBottom: "32px",
  textAlign: "center",
});

const CeoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
});

const Name = styled(Typography)({
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "-0.1px",
  color: "#272D37",
  marginLeft: "12px",
});

const Post = styled(Typography)({
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  color: "#5F6D7E",
});

const Testimonial = () => {
  return (
    <Component>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={8} style={{ textAlign: "center" }}>
          <Heading>What Our Customers Say</Heading>
          <SubHeading>
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment. Bring to the table win-win
            strategies to ensure domination.
          </SubHeading>
          <Image src={Company} alt="logo" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Text>
            {/* Break the text into three lines */}
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again!
          </Text>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={4}>
          <CeoBox>
            <img src={Avatar} alt="logo" />
            <Box>
              <Name>Lisa Smith</Name>
              <Post>CEO Company</Post>
            </Box>
          </CeoBox>
        </Grid>
      </Grid>
    </Component>
  );
};

export default Testimonial;
