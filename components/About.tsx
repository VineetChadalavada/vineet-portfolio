import { Box, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  return (
    <Box id="about" py={24} px={6} bg="gray.800" color="gray.100">
      <HStack
        spacing={12}
        maxW="6xl"
        mx="auto"
        align="center"
        flexDir={{ base: "column", md: "row" }}
      >
        {/* ===== PROFILE IMAGE ===== */}
        <MotionBox
          flexShrink={0}
          borderRadius="full"
          overflow="hidden"
          boxSize={{ base: "220px", md: "280px" }}
          border="4px solid"
          borderColor="orange.400"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/vineet.png"
            alt="Vineet Chadalavada"
            boxSize="100%"
            objectFit="cover"
          />
        </MotionBox>

        {/* ===== ABOUT TEXT ===== */}
        <VStack
          align="start"
          spacing={5}
          textAlign={{ base: "center", md: "left" }}
          maxW="3xl"
        >
          <Heading size="xl" color="orange.400">
            About Me
          </Heading>

          <Text fontSize="lg" color="gray.300">
            I’m a PhD student in Electrical & Computer Engineering at UNC Charlotte,
            conducting research in the HEADS Lab under Dr. Fareena Saqib. My work
            focuses on advancing hardware security for reconfigurable computing
            systems, particularly through microarchitectural and side-channel
            attack analysis on FPGA-based cloud platforms.
          </Text>

          <Text fontSize="lg" color="gray.300">
            My current research explores secure cache and memory architectures for
            RISC-V processors, addressing vulnerabilities from speculative execution
            and side-channel leakage. I design and evaluate hardware-level
            countermeasures — such as speculation-leakage-free buffers and
            multi-level cache partitioning — using <b>gem5</b> simulation and
            <b> FPGA-based validation</b>.
          </Text>

          <Text fontSize="lg" color="gray.300">
            Beyond research, I’m passionate about bridging hardware design,
            computer architecture, and security — contributing toward the
            development of resilient, high-performance, and trusted computing
            systems.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
