import { Box, Flex, Image, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  return (
    <Box id="about" bg="gray.900" color="gray.100" py={24} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="6xl"
        mx="auto"
        gap={10}
      >
        {/* ==== FULL RECTANGULAR PHOTO ==== */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/vineet.png"
            alt="Vineet Chadalavada"
            borderRadius="xl"
            boxSize={{ base: "300px", md: "400px" }}
            objectFit="contain"       
            border="3px solid #ff9400"
            shadow="2xl"
            bg="gray.800"             
          />
        </MotionBox>

        {/* ==== ABOUT TEXT ==== */}
        <MotionBox
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          flex="1"
        >
          <VStack align="start" spacing={5}>
            <Heading size="xl" color="orange.400">
              About Me
            </Heading>
            <Text fontSize="lg" lineHeight="1.8">
              I’m a PhD student in Electrical & Computer Engineering at UNC Charlotte,
              conducting research in the <b>HEADS Lab</b> under <b>Dr. Fareena Saqib</b>.
              My work focuses on advancing hardware security for reconfigurable computing
              systems — particularly through microarchitectural and side-channel attack
              analysis on FPGA-based cloud platforms.
            </Text>
            <Text fontSize="lg" lineHeight="1.8">
              My current research explores secure cache and memory architectures for
              <b> RISC-V processors</b>, addressing vulnerabilities from speculative
              execution and side-channel leakage. I design and evaluate hardware-level
              countermeasures — such as speculation-leakage-free buffers and multi-level
              cache partitioning — using <b>gem5</b> simulation and
              <b> FPGA-based validation</b>.
            </Text>
            <Text fontSize="lg" lineHeight="1.8">
              Beyond research, I’m passionate about bridging hardware design, computer
              architecture, and security — contributing toward the development of
              resilient, high-performance, and trusted computing systems.
            </Text>
          </VStack>
        </MotionBox>
      </Flex>
    </Box>
  );
}
