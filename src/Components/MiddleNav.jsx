import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import { FaArrowDown } from "react-icons/fa"

const MiddleNav = () => {
  return (
    <Container maxH={"130px"} >
      <Flex flexDirection={"row"}>
        <Box maxH={"130px"} width={"50%"} >
          <Flex maxH={"130px"} p={"10px"} paddingLeft={"35px"} >
            <img
              src="https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/03/Logo_of_Income_Tax_Department_India(1)-1591205103.png"
              width={"20%"}
              height={"90%"}
              alt="incomeTaxLogo"
            />
            <Heading
              margin={"0"}
              padding={"0"}
              marginTop={"20px"}
              marginLeft={"5px"}
            >
              <Text fontSize={"2rem"} color={"grey"} margin={"0"} padding={"0"}>
                Income Tax Department
              </Text>
              <Text
                margin={"0"}
                padding={"0"}
                fontWeight={"bold"}
                color={"grey"}
              >
                Government of India
              </Text>
            </Heading>
          </Flex>
        </Box>
        <Box width={"50%"} >
          <Box  marginRight={"10px"} >
            <Flex justify={"flex-end"} gap={"10px"} cursor={"pointer"} marginTop={"5px"} >
              <Link>Skip to main content |</Link>
              <Link>Employees Corner |</Link>
              <Link>Employees Login |</Link>
              <Link>Help |</Link>
              <Link>हिंदी |</Link>
              <Link>
                <AiFillPrinter /> |
              </Link>
              <Link>A + |</Link>
              <Link>A |</Link>
              <Link>A - |</Link>
              <Link backgroundColor={"grey"} color={"white"} textAlign={"center"} width={"20px"} marginTop={"2px"} paddingBottom={"2px"} >A</Link>
            </Flex>
          </Box>
          <Box>
            <Flex justify={"flex-end"} marginRight={"20px"} padding={"10px"} >
            <input style={{width:"369px", padding:"7px 10px", backgroundColor:"lightgray", fontSize:"16px"}} placeholder="Search..." ></input>
            <button style={{backgroundColor:"rgb(200, 155, 0)", width:"20px", padding:"5px 25px 5px 10px", fontSize:"13px"}} >
                <VscSearch/>
            </button>
            </Flex>
          </Box>
          <Box>
            <Flex justify={"flex-end"} gap={"10px"} cursor={"pointer"} marginTop={"5px"} marginRight={"20px"} fontSize={"15px"} >
                <Link backgroundColor={"lightgrey"} padding={"1px 5px"} >
                <FaArrowDown style={{fontSize:"12px", color:"lightgreen", fontWeight:"bolder", marginRight:"5px" }} />
                A to Z Index
                </Link>
                <Link>Search Tips</Link>
                <Link>/</Link>
                <Link>Advance Search</Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default MiddleNav;
