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
              I am a PhD student in Electrical and Computer Engineering at UNC Charlotte,
              working in the <b>HEADS Lab</b> under <b>Dr. Fareena Saqib</b>. My research focuses on
              hardware security for reconfigurable computing systems, with an emphasis on
              <b>FPGA-based side-channel attacks, memory-system security, and cloud FPGA isolation</b>.
            </Text>
            
            <Text fontSize="lg" lineHeight="1.8">
              My work spans <b>DDR4 timing side channels, Prime+Probe attacks on FPGA platforms,
              runtime memory-access monitoring (TMAM),</b> and the design of hardware-level
              defenses for multi-tenant cloud environments. I have hands-on experience with the
              <b>Xilinx Alveo U250</b>, Vitis/Vivado kernel development, HLS, RTL design, DRAM
              timing characterization, and microarchitectural attack construction.
            </Text>
            <Text fontSize="lg" lineHeight="1.8">
              Beyond FPGA cloud security, I also work on <b>RISC-V microarchitectural protection</b>,
              including information-flow tracking (ISA-IFT/GLIFT), cache and memory isolation,
              and attack-resilient hardware design. My research goal is to develop practical,
              deployable countermeasures that strengthen the reliability, privacy, and
              trustworthiness of next-generation computing systems.
            </Text>
          </VStack>
        </MotionBox>
      </Flex>
    </Box>
  );
}
