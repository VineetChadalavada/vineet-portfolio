import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Prime+Probe DDR4 Timing Attack on FPGA Cloud",
    description:
      "Implemented a Prime+Probe-style timing attack targeting DDR4 memory subsystems in multi-tenant FPGA cloud platforms using Xilinx Alveo U250. Analyzed inter-bank interference and row buffer timing variations to infer co-tenant activity.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Trusted Memory Access Monitor (TMAM)",
    description:
      "Designed and validated a real-time hardware IP to detect and mitigate DDR4-based Prime+Probe attacks on FPGA cloud systems. TMAM monitors memory access patterns to flag abnormal timing bursts, providing active runtime defense.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Machine Learning-Based Side-Channel Analysis (ML-SCA)",
    description:
      "Developed CNN and attention-based models for AES sub-byte prediction using power traces collected from FPGA targets. Evaluated leakage correlation, feature extraction, and countermeasure robustness across multiple datasets.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Secure Cache and Memory Architecture for RISC-V",
    description:
      "Proposed a secure cache hierarchy for RISC-V processors integrating speculation-leakage-free buffers and cache partitioning. Simulated using gem5 to assess defense efficiency and performance overheads.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Dynamic Partial Reconfiguration for FPGA Security",
    description:
      "Explored dynamic partial reconfiguration as a countermeasure to side-channel and timing-based attacks. Developed partial bitstream management and runtime switching mechanisms on Xilinx FPGA boards.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "FPGA-Based Side-Channel Attack Testbed",
    description:
      "Built a complete trace capture and analysis setup using ChipWhisperer and custom VHDL AES cores. Automated plaintext generation, trace synchronization, and leakage modeling to benchmark different key extraction techniques.",
    link: "https://github.com/VineetChadalavada",
  },
];

export default function Projects() {
  return (
    <Box id="projects" py={24} px={6} bg="white" color="gray.800">
      <VStack spacing={10} maxW="6xl" mx="auto" textAlign="center">
        <Heading size="xl" color="orange.400">
          Projects
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="2xl">
          A selection of research and engineering projects focused on hardware
          security, side-channel analysis, and secure FPGA-based architectures.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="xl"
              bg="gray.50"
              transition="transform 0.25s ease"
              _hover={{ transform: "scale(1.05)" }}
              whileHover={{ y: -4 }}
            >
              <Heading size="md" mb={3} color="orange.400">
                {project.title}
              </Heading>
              <Text mb={4} color="gray.700">
                {project.description}
              </Text>
              <Link href={project.link} isExternal>
                <Button
                  colorScheme="orange"
                  variant="outline"
                  size="sm"
                  _hover={{ bg: "orange.400", color: "white" }}
                >
                  View Project
                </Button>
              </Link>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
