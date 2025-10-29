import { Box, Heading, SimpleGrid, Tag, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Skills() {
  const skills = [
    "C", "C++", "Python", "VHDL", "Verilog", "Vivado", "Vitis",
    "TensorFlow", "Keras", "MATLAB", "Simulink",
    "ChipWhisperer", "FPGA", "RISC-V", "ARM Cortex-M4",
    "ZedBoard", "Alveo U250", "Embedded Systems",
    "Side-Channel Analysis", "Prime+Probe Attacks", "PUF Design"
  ];

  return (
    <Box id="skills" py={24} px={6} bg="gray.900" color="gray.100">
      <VStack spacing={10} maxW="5xl" mx="auto" align="center">
        <Heading size="xl" color="orange.400">
          Skills
        </Heading>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {skills.map((skill, idx) => (
            <MotionBox
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Tag
                size="lg"
                colorScheme="orange"
                variant="outline"
                fontWeight="semibold"
                px={4}
                py={2}
              >
                {skill}
              </Tag>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
