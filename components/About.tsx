import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Box
      id="about"
      py={24}
      px={6}
      bg="gray.800"
      color="gray.100"
      textAlign="center"
    >
      <VStack spacing={6} maxW="4xl" mx="auto">
        <Heading size="xl" color="orange.400">
          About Me
        </Heading>
        <Text fontSize="lg" color="gray.300" lineHeight="tall">
          I’m a PhD student at UNC Charlotte specializing in hardware security,
          focusing on side-channel analysis, DDR4 memory attacks, and secure
          reconfigurable architectures in FPGA-based cloud environments.
          My research bridges cryptographic security and reconfigurable hardware
          by exploring real-time attack detection mechanisms and secure FPGA
          design methodologies.
        </Text>
      </VStack>
    </Box>
  );
}
