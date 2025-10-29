import { Box, VStack, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  return (
    <Box id="about" py={24} px={6} bg="gray.800" color="gray.100">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems="center"
        maxW="6xl"
        mx="auto"
      >
        {/* Left side — animated photo */}
        <MotionBox
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <Image
            src="/vineet.png"
            alt="Vineet Chadalavada"
            borderRadius="2xl"
            boxShadow="lg"
            mx="auto"
            maxW="300px"
          />
        </MotionBox>

        {/* Right side — text */}
        <VStack align="start" spacing={5}>
          <Heading size="xl" color="orange.400">
            About Me
          </Heading>
          <Text fontSize="lg" lineHeight="1.7" color="gray.300">
            I'm a <strong>PhD student in Electrical & Computer Engineering</strong> at UNC
            Charlotte, working on <strong>hardware security, FPGA architectures</strong>, and
            <strong> side-channel attack detection</strong>.
          </Text>
          <Text fontSize="lg" color="gray.300">
            My current research focuses on <strong>Prime+Probe timing attacks</strong> on
            DDR4-based FPGA systems and developing countermeasures like
            <strong> Trusted Memory Access Monitoring (TMAM)</strong>.
          </Text>
          <Text fontSize="lg" color="gray.300">
            I enjoy building <strong>secure reconfigurable hardware</strong>, experimenting with
            side-channel datasets, and teaching <strong>RISC-V architecture</strong> concepts.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
