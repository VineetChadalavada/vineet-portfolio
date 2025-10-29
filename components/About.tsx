import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  return (
    <Box id="about" py={24} px={6} bg="gray.50" color="gray.800">
      <VStack spacing={10} maxW="5xl" mx="auto" align="center" textAlign="center">
        <Heading size="xl" color="orange.400">
          About Me
        </Heading>

        <Image
          src="/vineet.png"
          alt="Vineet Chadalavada"
          borderRadius="full"
          boxSize="180px"
          objectFit="cover"
          shadow="md"
        />

        <MotionBox
          maxW="3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text fontSize="lg" mb={4}>
            I’m <strong>Vineet Chadalavada</strong>, a Ph.D. student in Electrical and Computer
            Engineering at the University of North Carolina at Charlotte. My research focuses on
            <strong> microarchitectural side-channel security </strong> in RISC-V and FPGA-based
            computing platforms.
          </Text>

          <Text fontSize="lg" mb={4}>
            My current work investigates the intersection of <strong>speculative execution
            vulnerabilities</strong> (like Spectre and Meltdown) and
            <strong> cache-based side-channel attacks </strong> (such as Flush+Reload and
            Prime+Probe). I’m developing a <strong>secure cache hierarchy for RISC-V processors</strong>
            that mitigates both classes of attacks through techniques like
            <em> speculation-leakage-free buffers, secure cache partitioning, randomized replacement,
            and memory access isolation</em>.
          </Text>

          <Text fontSize="lg" mb={4}>
            This architecture is being modeled and evaluated using the <strong>gem5 simulator</strong>
            for realistic RISC-V SoC configurations. The goal is to establish practical design
            guidance for <strong>secure RISC-V microarchitectures</strong> that can resist
            next-generation speculative and cache-based side-channel attacks.
          </Text>

          <Text fontSize="lg" color="gray.600">
            Beyond research, I’m passionate about FPGA security, trusted hardware design, and
            open-source hardware ecosystems.
          </Text>
        </MotionBox>
      </VStack>
    </Box>
  );
}
