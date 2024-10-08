import { Heading, HStack, Image, Text, VStack, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      spacing={4}
      align="center"
      role="group"
      // _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      // transition="all 0.2s ease-in-out"
    >

    <VStack>
      <Image 
        src={imageSrc}
        borderRadius="md"
        objectFit="cover"
      />

      
        <Heading size="md" color="black" noOfLines={1}>{title}</Heading>
        <Text fontSize="md" color="black" noOfLines={2}>{description}</Text>
        <Text color="black">See More <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" /></Text>
      </VStack>

      

    </HStack>
  );
  
};

export default Card;
