import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Container,
  Flex,
  Checkbox,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FcCalculator } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrCloudlinux } from "react-icons/gr";
import {TbChessRook} from "react-icons/tb";
import {SiRotaryinternational} from "react-icons/si";

const HraCalculator = () => {
  const [basicSalary, setBasicSalary] = useState();
  const [daSalary, setDaSalary] = useState();
  const [commission, setCommission] = useState();
  const [hraReceived, setHraReceived] = useState();
  const [rentPaid, setRentPaid] = useState();
  const [checked, setChecked] = useState(false);
  const [exemptedHra, setExemptedHra] = useState(0.0);
  const [taxableHra, setTaxableHra] = useState(0.0);

  const calculateHra = () => {
    let totalSalary = basicSalary + daSalary;
    let value_1 = (totalSalary * 10) / 100;
    let value_2 = rentPaid - value_1;
    let value_3 = 0;
    if (checked) {
      value_3 = (50 * totalSalary) / 100;
    } else {
      value_3 = (40 * totalSalary) / 100;
    }
    let exemptHra = Math.min(hraReceived, value_2, value_3);
    setExemptedHra(exemptHra);
    let taxOnHra = hraReceived - exemptHra;
    if (taxOnHra > 0) {
      setTaxableHra(taxOnHra);
    } else {
      setTaxableHra(0);
    }
  };

  const resetHandler = () => {
    setBasicSalary("");
    setDaSalary("");
    setCommission("");
    setHraReceived("");
    setRentPaid("");
    setChecked(false);
    setExemptedHra(0);
    setTaxableHra(0);
  };

  return (
    <Container>
      <Flex>
        <Box width={"78%"}>
          <Text
            width={"92%"}
            margin={"auto"}
            height={"40px"}
            border={"1px solid grey"}
            backgroundColor={"rgb(239, 237, 237)"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"black"}
            fontWeight={"400"}
          >
            (As amended upto Finance Act, 2023)
          </Text>
          <Box
            marginLeft={"4%"}
            height={"25px"}
            width={"290px"}
            padding={"15px"}
            color={"white"}
            marginTop={"10px"}
            backgroundColor={"#3b9ac6"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Text fontSize={"35px"} paddingTop={"5px"}>
              <FcCalculator />
            </Text>
            <Text fontSize={"20px"}>HOUSE RENT ALLOWANCE</Text>
          </Box>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            backgroundColor={"rgb(239, 237, 237)"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="basicSalary"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              Basic Salary
            </FormLabel>
            <Input
              type="number"
              id="basicSalary"
              value={basicSalary}
              onChange={(e) => setBasicSalary(Number(e.target.value))}
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"16px"}
              color={"lightBlack"}
            />
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="DASalary"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              DA forming part of salary
            </FormLabel>
            <Input
              type="number"
              id="DASalary"
              value={daSalary}
              onChange={(e) => setDaSalary(Number(e.target.value))}
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"16px"}
              color={"lightBlack"}
            />
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            backgroundColor={"rgb(239, 237, 237)"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="commission"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              Commission (as % of turnover achieved by the employee)
            </FormLabel>
            <Input
              type="number"
              id="commission"
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"16px"}
              color={"lightBlack"}
            />
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="HRA_Received"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              HRA Received
            </FormLabel>
            <Input
              type="number"
              id="HRA_Received"
              value={hraReceived}
              onChange={(e) => setHraReceived(Number(e.target.value))}
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"16px"}
              color={"lightBlack"}
            />
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            backgroundColor={"rgb(239, 237, 237)"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="rent_Paid"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              Rent Paid
            </FormLabel>
            <Input
              type="number"
              id="rent_Paid"
              value={rentPaid}
              onChange={(e) => setRentPaid(Number(e.target.value))}
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"16px"}
              color={"lightBlack"}
            />
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel color={"black"} fontWeight={"500"} paddingLeft={"18px"}>
              Tick if residing in metro city.
            </FormLabel>
            <Flex marginRight={"13.8rem"}>
              <input
                type="checkbox"
                id="metro_City"
                value={checked}
                onChange={(e) => setChecked(!checked)}
              />
              <FormLabel htmlFor="metro_City" fontSize={"12px"}>
                (Tick if Yes)
              </FormLabel>
            </Flex>
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            backgroundColor={"rgb(239, 237, 237)"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="exempted_HRA"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              Exempted House Rent Allowance
            </FormLabel>
            <Input
              type="number"
              id="exempted_HRA"
              value={exemptedHra.toFixed(2)}
              disabled
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"20px"}
              bgColor={"lightgrey"}
              color={"black"}
            />
          </FormControl>
          <FormControl
            width={"92%"}
            margin={"auto"}
            display={"flex"}
            border={"1px solid rgb(239, 237, 237)"}
            justifyContent={"space-between"}
            height={"65px"}
            alignItems={"center"}
            fontSize={"18px"}
          >
            <FormLabel
              htmlFor="taxable_HRA"
              color={"black"}
              fontWeight={"500"}
              paddingLeft={"18px"}
            >
              Taxable House Rent Allowance
            </FormLabel>
            <Input
              type="number"
              id="taxable_HRA"
              value={taxableHra.toFixed(2)}
              disabled
              width={"17rem"}
              padding={"8px"}
              marginRight={"16px"}
              _hover={{ border: "1px solid lightblue" }}
              borderRadius={"5px"}
              textAlign={"right"}
              fontSize={"20px"}
              bgColor={"lightGray"}
              color={"black"}
            />
          </FormControl>
          <HStack
            color={"white"}
            justifyContent={"center"}
            gap={"15px"}
            mt={"15px"}
            mb={"1.5rem"}
          >
            <Button
              backgroundColor={"rgb(240,80,80)"}
              onClick={calculateHra}
              mb={4}
            >
              Calculate
            </Button>
            <Button backgroundColor={"gray"} onClick={resetHandler} mb={4}>
              Reset
            </Button>
          </HStack>
        </Box>
        <Box width={"22%"}>
          <Stack gap={"1.5rem"}>
            <Link
              border={"1px solid black"}
              bgColor={"rgb(239, 237, 237)"}
              width={"82%"}
              height={"57px"}
              fontSize={"1.15rem"}
              padding={"5px 5px 5px 0"}
              cursor={"pointer"}
              margin={"0 auto 0 auto"}
            >
              <Flex
                gap={"1.8rem"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text marginLeft={"1.3rem"} fontSize={"1.5rem"} >
                  <GrCloudlinux />
                </Text>
                <Text>
                  TAX INFORMATION AND SERVICES{" "}
                  <IoMdArrowDropdown style={{ marginLeft: "7rem" }} />
                </Text>
              </Flex>
            </Link>
            <Link
              border={"1px solid black"}
              bgColor={"rgb(239, 237, 237)"}
              width={"82%"}
              height={"57px"}
              fontSize={"1.15rem"}
              padding={"5px 5px 5px 0"}
              cursor={"pointer"}
              margin={"0 auto 0 auto"}
            >
              <Flex gap={"1.8rem"} height={"100%"} justifyContent={"center"}
                alignItems={"center"}
              >
                <Text marginLeft={"0.7rem"} fontSize={"1.5rem"} >
                  <TbChessRook  />
                </Text>
                <Text>TAX LAWS & RULES </Text>
                <Text>
                  <IoMdArrowDropdown />
                </Text>
              </Flex>
            </Link>
            <Link
              border={"1px solid black"}
              bgColor={"rgb(239, 237, 237)"} width={"82%"}  height={"57px"} fontSize={"1.15rem"}
              padding={"5px 5px 5px 0"}
              cursor={"pointer"} margin={"0 auto 0 auto"}
            >
              <Flex gap={"1.8rem"} height={"100%"} justifyContent={"center"}
                alignItems={"center"}
              >
                <Text marginLeft={"1.3rem"} fontSize={"1.5rem"}>
                  <SiRotaryinternational />
                </Text>
                <Text>INTERNATIONAL TAXATION{" "}</Text>
                <Text>
                  <IoMdArrowDropdown />
                </Text>
              </Flex>
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default HraCalculator;
