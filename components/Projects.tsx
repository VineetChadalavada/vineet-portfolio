import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Prime+Probe DDR4 Attack on FPGA Cloud",
    desc: "Implemented a Prime+Probe timing attack targeting DDR4 memory on Xilinx Alveo U250. Built custom Prime, Probe, and AES victim kernels in HLS and C++, demonstrating DRAM timing leakage in multi-tenant FPGA systems.",
    tags: ["FPGA", "DDR4", "Prime+Probe", "C++", "Vitis"],
    link: "https://github.com/VineetChadalavada", // you can later link to your repo or paper
  },
  {
    title: "Trusted Memory Access Monitor (TMAM)",
    desc: "Developed a real-time TMAM IP module to detect DDR4-based Prime+Probe attacks in FPGA clouds. Designed monitoring logic for timing anomalies, burst patterns, and access correlations within shell-level infrastructure.",
    tags: ["FPGA Security", "TMAM IP", "Verilog", "DDR4", "Detection"],
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "AES Side-Channel Analysis (SCA)",
    desc: "Captured and analyzed power traces using ChipWhisperer for AES encryption. Built CNN and SVM models in TensorFlow/Keras to recover key bytes using SubBytes leakage models.",
    tags: ["ChipWhisperer", "AES", "CNN", "TensorFlow", "SCA"],
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Agro Drone for Precision Farming",
    desc: "Designed an ARM Cortex-M4-based drone using ArduPilot for automated pesticide spraying and crop-health monitoring with ultrasonic sensors and IMU modules.",
    tags: ["ARM Cortex-M4", "Embedded C", "ArduPilot", "Drone Tech"],
    link: "https://github.com/VineetChadalavada",
  },
];

export default function Projects() {
  return (
    <Box id="projects" py={24} px={6} bg="gray.900" color="gray.100">
      <VStack spacing={10} maxW="6xl" mx="auto" align="start">
        <Heading size="xl" color="orange.400">
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
          {projects.map((proj, i) => (
            <MotionBox
              key={i}
              p={6}
              bg="gray.800"
              borderRadius="xl"
              boxShadow="md"
              whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px #ff9400" }}
              transition={{ duration: 0.3 }}
            >
              <VStack align="start" spacing={4}>
                <Heading size="md" color="orange.300">
                  {proj.title}
                </Heading>
                <Text color="gray.300" fontSize="md">
                  {proj.desc}
                </Text>

                <Box>
                  {proj.tags.map((tag, j) => (
                    <Tag
                      key={j}
                      mr={2}
                      mb={2}
                      colorScheme="orange"
                      variant="subtle"
                      fontWeight="medium"
                    >
                      {tag}
                    </Tag>
                  ))}
                </Box>

                <Link
                  href={proj.link}
                  color="orange.400"
                  fontWeight="semibold"
                  isExternal
                >
                  View Project ↗
                </Link>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
