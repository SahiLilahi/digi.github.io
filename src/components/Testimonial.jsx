import { Box, Typography } from "@mui/material";
import Avatar from "../images/Avatar.png";
import Company from "../images/Company Logo.png";
import styled from "@emotion/styled";

const Component = styled(Box)({
  height: "40vh",
  background: "#F8F9Fb",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "1285px",
  padding: "64px 32px 64px 32px",
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

const Image = styled("img")`
  height: 32px;
  width: 128px;
  color: #2e343f;
`;

const Text = styled(Typography)({
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "38px",
  letterSpacing: "-0.28px",
  color: "#272D37",
  margin: "32px 150px 32px 150px",
  textAlign: "center", // Align text in the center
});

const CeoBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: "30px 0 20px 0",
});

const Name = styled(Typography)({
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  letterSpacing: "-0.1px",
  color: "#272D37",
});

const Post = styled(Typography)({
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "20px",
  letterSpacing: "-0.1px",
  marginLeft: "12px",
  color: "#5F6D7E",
});

const Testimonial = () => {
  return (
    <Box>
      <Heading>What Our Customers Say</Heading>
      <SubHeading>
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and
        <br /> empowerment. Bring to the table win-win strategies to ensure
        domination.
      </SubHeading>
      <Component>
        <Image src={Company} alt="logo" />
        <Box>
          <Text>
            {/* Break the text into three lines */}
            Thank you for making it painless, pleasant and most of all hassle
            <br />
            free! I love LookScout.I can't say enough about LookScout. <br />
            Great job, I will definitely be ordering again!
          </Text>
        </Box>
        <CeoBox>
          <img src={Avatar} alt="logo" />
          <Box>
            <Name>Lisa Smith</Name>
            <Post>CEO Company</Post>
          </Box>
        </CeoBox>
      </Component>
    </Box>
  );
};

export default Testimonial;
