import { Box, VStack, Heading, Text, HStack, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      color="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <VStack spacing={6} textAlign="center" maxW="4xl">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" size="2xl" color="orange.400">
            Vineet Chadalavada
          </Heading>

          <Text fontSize="xl" fontWeight="medium" mt={3}>
            PhD Student • Hardware Security Researcher • FPGA Architect
          </Text>

          <Text fontSize="lg" color="gray.400" mt={3}>
            Exploring FPGA-based side-channel attacks, DDR4 timing analysis, and secure
            reconfigurable architectures in cloud environments.
          </Text>

          <HStack spacing={6} pt={8} justify="center">
            <Link href="#about" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="orange" size="lg" variant="solid">
                About
              </Button>
            </Link>
            <Link href="#projects" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="orange" size="lg" variant="outline">
                Projects
              </Button>
            </Link>
            <Link href="#contact" _hover={{ textDecoration: "none" }}>
              <Button colorScheme="orange" size="lg" variant="outline">
                Contact
              </Button>
            </Link>
          </HStack>
        </MotionBox>
      </VStack>
    </Box>
  );
}
