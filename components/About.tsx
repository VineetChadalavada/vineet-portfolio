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
        {/* ==== FULL IMAGE WITHOUT BORDER ==== */}
        <MotionBox
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/vineet.png"
            alt="Vineet Chadalavada"
            boxSize={{ base: "300px", md: "400px" }}
            objectFit="contain"
            borderRadius="md"
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
              I’m a PhD student in Electrical and Computer Engineering at UNC Charlotte,
              where I conduct research in the <b>HEADS Lab</b> under the guidance of{" "}
              <b>Dr. Fareena Saqib</b>. My work focuses on advancing hardware security
              for reconfigurable computing systems, with an emphasis on analyzing
              microarchitectural behavior and side-channel vulnerabilities in FPGA-based
              cloud platforms.
            </Text>
            <Text fontSize="lg" lineHeight="1.8">
              My current research explores secure cache and memory architectures for{" "}
              <b>RISC-V processors</b>. I study vulnerabilities introduced by speculative
              execution and side-channel leakage, and develop hardware-level
              countermeasures that include speculation-leakage-free buffers, cache
              partitioning strategies, and real-world validation using both{" "}
              <b>gem5</b> simulations and <b>FPGA-based testing</b>.
            </Text>
            <Text fontSize="lg" lineHeight="1.8">
              Beyond research, I’m passionate about bridging hardware design, computer
              architecture, and security. My goal is to contribute to the development of
              resilient, high-performance, and trustworthy computing systems for
              next-generation processors.
            </Text>
          </VStack>
        </MotionBox>
      </Flex>
    </Box>
  );
}
