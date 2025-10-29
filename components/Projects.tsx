import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Link,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Projects() {
  const projects = [
    {
      title: "Trusted Memory Access Monitor (TMAM)",
      desc: "Real-time FPGA IP block for detecting DDR4-based Prime+Probe side-channel attacks. Implemented monitoring of burst timing anomalies on Xilinx Alveo U250.",
      tags: ["FPGA", "DDR4", "Security", "Vivado HLS"],
      link: "https://github.com/VineetChadalavada",
    },
    {
      title: "Prime+Probe Attack Framework on DDR4",
      desc: "Developed an end-to-end Prime+Probe timing attack targeting DDR4 memory on FPGA clouds with countermeasures like Bank Isolation, Cache Buffer, and Noise Injection.",
      tags: ["C++", "XRT", "Alveo U250", "Side-Channel"],
      link: "https://vineetchadalavada.github.io",
    },
    {
      title: "Machine Learning for Side-Channel Analysis",
      desc: "Built CNN models for AES key recovery using power traces collected from FPGA boards and open datasets like ASCAD and SMAesH.",
      tags: ["Python", "TensorFlow", "ChipWhisperer", "AES"],
      link: "https://github.com/VineetChadalavada",
    },
  ];

  return (
    <Box id="projects" py={24} px={6} bg="gray.800" color="gray.100">
      <VStack spacing={10} maxW="6xl" mx="auto" align="stretch">
        <Heading size="xl" color="orange.400" textAlign="center">
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((proj, idx) => (
            <MotionBox
              key={idx}
              bg="gray.900"
              p={6}
              rounded="xl"
              shadow="lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Heading size="md" color="orange.300" mb={2}>
                {proj.title}
              </Heading>
              <Text color="gray.300" mb={4}>
                {proj.desc}
              </Text>
              <HStack wrap="wrap" mb={4}>
                {proj.tags.map((tag, i) => (
                  <Tag key={i} size="sm" colorScheme="orange">
                    {tag}
                  </Tag>
                ))}
              </HStack>
              <Link
                href={proj.link}
                color="orange.400"
                fontWeight="bold"
                isExternal
              >
                View Project →
              </Link>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
