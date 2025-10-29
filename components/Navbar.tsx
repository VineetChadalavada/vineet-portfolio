import { Box, HStack, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const bg = useColorModeValue("rgba(255,255,255,0.1)", "rgba(26, 26, 26, 0.9)");
  const color = useColorModeValue("gray.800", "gray.100");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      w="100%"
      bg={bg}
      backdropFilter="blur(8px)"
      zIndex="1000"
      boxShadow="sm"
      py={3}
      px={6}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HStack justify="space-between" maxW="6xl" mx="auto">
        {/* Logo / Name */}
        <Link
          fontWeight="bold"
          fontSize="xl"
          color="orange.400"
          onClick={() => handleScroll("home")}
          cursor="pointer"
        >
          Vineet Chadalavada
        </Link>

        {/* Navigation Links */}
        <HStack spacing={6}>
          {sections.map((sec) => (
            <Button
              key={sec}
              variant="ghost"
              color={color}
              _hover={{ color: "orange.400" }}
              onClick={() => handleScroll(sec)}
              textTransform="capitalize"
            >
              {sec}
            </Button>
          ))}
        </HStack>
      </HStack>
    </MotionBox>
  );
}
