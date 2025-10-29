import { Box, Text, VStack, Heading, HStack, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg="white"
      color="gray.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <VStack spacing={6} textAlign="center" maxW="3xl">
        <Heading as="h1" size="2xl" fontWeight="bold">
          Vineet Chadalavada
        </Heading>

        <Text fontSize="xl" fontWeight="semibold" color="gray.600">
          PhD Student • Hardware Security Researcher • FPGA Architect
        </Text>

        <Text fontSize="lg" color="gray.500" lineHeight="tall">
          Exploring FPGA-based side-channel attacks, DDR4 timing analysis, and secure
          reconfigurable architectures in cloud environments.
        </Text>

        <HStack spacing={4} pt={4}>
          <Link href="/about" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="orange" variant="solid">
              About
            </Button>
          </Link>
          <Link href="/projects" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="orange" variant="outline">
              Projects
            </Button>
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="orange" variant="outline">
              Contact
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
