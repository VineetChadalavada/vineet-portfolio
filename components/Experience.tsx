import { Box, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Experience() {
  const experiences = [
    {
      role: "PhD Researcher — HEADS Lab",
      org: "University of North Carolina at Charlotte",
      period: "2023 – Present",
      desc: "Designing and evaluating DDR4-based Prime+Probe attacks on FPGA cloud platforms. Proposed Trusted Memory Access Monitor (TMAM) for detecting timing-based side-channel activity in reconfigurable fabrics.",
    },
    {
      role: "Graduate Teaching Assistant",
      org: "UNC Charlotte, Department of ECE",
      period: "2023 – Present",
      desc: "Assisting undergraduate students in Computer Architecture and FPGA Design labs, guiding them on RISC-V and side-channel security concepts.",
    },
    {
      role: "Hardware Security Intern",
      org: "HEADS Lab / Siemens EDA (Strategic Student Program)",
      period: "2024",
      desc: "Worked on FPGA security testing frameworks and simulation-based analysis of cache and DRAM-level side-channel vulnerabilities.",
    },
  ];

  return (
    <Box id="experience" py={24} px={6} bg="gray.900" color="gray.100">
      <VStack spacing={10} maxW="5xl" mx="auto" align="stretch">
        <Heading size="xl" color="orange.400" textAlign="center">
          Experience
        </Heading>

        {experiences.map((exp, idx) => (
          <MotionBox
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            bg="gray.800"
            p={6}
            rounded="xl"
            shadow="lg"
          >
            <HStack justify="space-between" mb={2}>
              <Text fontWeight="bold" fontSize="lg">
                {exp.role}
              </Text>
              <Badge colorScheme="orange" variant="solid">
                {exp.period}
              </Badge>
            </HStack>
            <Text color="orange.300" fontWeight="semibold">
              {exp.org}
            </Text>
            <Text color="gray.300" mt={2}>
              {exp.desc}
            </Text>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}
