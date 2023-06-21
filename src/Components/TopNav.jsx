import React from "react";
import { Box, Flex, Link, Icon } from "@chakra-ui/react";
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const TopNav = () => {
  return (
    <Box py={2} maxH={"40px"} backgroundColor={"#0561c8"} color="#fff"   >
      <Flex justify="flex-end" textAlign={"center"} maxH={"40px"} >
        <Flex alignItems="center" maxH={"40px"} >
          <span style={{fontSize:"20px", color:"yellow"}} >Follow us on</span>
          <Flex as="ul" ml={5} listStyleType="none" >
            <ListItemWithIcon
              href="https://twitter.com/IncomeTaxIndia"
              icon={FiTwitter}
              text="@IncomeTaxIndia | "
            />
            <ListItemWithIcon
              href="https://www.facebook.com/incometaxindiaofficial"
              icon={FiFacebook}
              text="@IncomeTaxIndiaOfficial | "
            />
            <ListItemWithIcon
              href="https://instagram.com/incometaxindia.official?igshid=1npzoca4rcy57"
              icon={FiInstagram}
              text="@IncomeTaxIndia.Official | "
            />
            <ListItemWithIcon
              href="https://www.youtube.com/channel/UC-le1Uh6DI1oHjVxKck6Hpw"
              icon={FiYoutube}
              text="Income Tax India |  "
            />
            <li style={{fontSize:"20px", color:"yellow", marginRight:"10px"}} >to stay updated |</li>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

const ListItemWithIcon = ({ href, icon, text }) => {
  return (
    <li style={{marginRight: "10px"}} >
      <Link href={href} display="flex" alignItems="center" color="#fff" textDecoration={"none"} >
        <Box mr={5}>
          <Icon as={icon} boxSize={15} />
        </Box>
        {text}
      </Link>
    </li>
  );
};

export default TopNav;
