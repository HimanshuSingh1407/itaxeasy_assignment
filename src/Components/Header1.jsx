import { Container, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Header1 = () => {
  return (
    <Container
      h={"34px"}
      backgroundColor={"rgb(239, 237, 237)"}
      //   border={"1px solid red"}
      margin={"0 auto 10px auto"}
      padding={"6px 10px"}
    >
      <Flex h={"100%"} alignItems={"center"} gap={"10px"} fontSize={"14px"} marginLeft={"20px"}  >
        <Link cursor={"pointer"} color={"blue"} _hover={{textDecoration:"underline"}} >Income Tax Department</Link>
        <Text paddingTop={"7px"} color={"grey"} >
          <IoIosArrowForward />
        </Text>
        <Link cursor={"pointer"} color={"blue"} _hover={{textDecoration:"underline"}} >Tax Tools</Link>
        <Text  paddingTop={"7px"} color={"grey"} >
          <IoIosArrowForward />
        </Text>
        <Text color={"grey"} >House rent allowance calculator</Text>
      </Flex>
    </Container>
  );
};

export default Header1;
