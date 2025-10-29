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
    title: "FPGA-Based Side-Channel Attack Framework",
    description:
      "Developed a complete side-channel analysis framework using ChipWhisperer and Alveo U250 to analyze AES encryption power traces and evaluate hardware countermeasures.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Prime+Probe DDR4 Timing Attack on FPGA Cloud",
    description:
      "Implemented Prime+Probe-style timing attacks targeting DDR4 memory in multi-tenant FPGA environments using Xilinx Alveo U250 and Vitis HLS.",
    link: "https://github.com/VineetChadalavada",
  },
  {
    title: "Trusted Memory Access Monitor (TMAM)",
    description:
      "Designed a real-time detection IP to monitor DDR4-based Prime+Probe attack patterns and enforce memory access integrity in FPGA cloud platforms.",
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
          A few research and engineering projects I’ve worked on in FPGA
          hardware security, side-channel analysis, and cloud-based
          reconfigurable systems.
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
              _hover={{ transform: "scale(1.05)" }} // 👈 smooth scale only
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
