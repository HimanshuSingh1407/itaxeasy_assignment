import { Container, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const BottomNav = () => {
  return (
    <Container
      h={"34px"}
      backgroundColor={"rgb(239, 237, 237)"}
      //   border={"1px solid red"}
      margin={"0 auto 10px auto"}
      padding={"6px 10px"}
    >
      <Flex
        cursor={"pointer"}
        justify={"flex-end"}
        alignItems={"center"}
        fontSize={"19px"}
        fontWeight={"400"}
        color={"rgb(56, 55, 55)"}
        gap={"15px"}
      >
        <Link
          title="Click to go to Home Page of website"
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          <AiFillHome style={{ marginRight: "4px", fontSize: "16px" }} />
          Home
        </Link>
        <Link
          title="Go to About Us"
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          About Us <RiArrowDropDownLine style={{ fontSize: "22px" }} />
        </Link>
        <Link
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          Taxpayers' Charter
        </Link>
        <Link
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          Forms/Downloads <RiArrowDropDownLine style={{ fontSize: "22px" }} />{" "}
        </Link>
        <Link
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          Tax e-Services
        </Link>
        <Link
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          Publicity Campaign
        </Link>
        <Link
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          Contact us
        </Link>
        <Link
          _hover={{ backgroundColor: "#333", color: "white" }}
          padding={"5px"}
        >
          Feedback
        </Link>
      </Flex>
    </Container>
  );
};

export default BottomNav;
