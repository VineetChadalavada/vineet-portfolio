import { Box, Heading, Text, VStack, SimpleGrid, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const publications = [
  {
    title:
      "Side-Channel Attacks in FPGA-Based Cloud Environments: Evaluating Prime+Probe Attacks",
    authors: "V. Chadalavada, F. Saqib, et al.",
    venue: "Accepted — PAINE 2025 (IEEE Workshop on Privacy Aware Computing)",
    link: "https://github.com/VineetChadalavada", // replace with actual link if available
    description:
      "This paper demonstrates the feasibility of Prime+Probe timing attacks on DDR4 memory in multi-tenant FPGA cloud environments using Xilinx Alveo U250 and Vitis HLS.",
  },
  {
    title:
      "Trusted Memory Access Monitor (TMAM): Real-Time Detection of DDR4-Based Prime+Probe Attacks in FPGA Clouds",
    authors: "V. Chadalavada, F. Saqib, et al.",
    venue: "Accepted — IEEE HONET 2025 (International Symposium on Networks, Computers and Communications)",
    link: "https://github.com/VineetChadalavada", // replace with actual DOI or link later
    description:
      "Introduces a hardware-level IP block that detects and mitigates DDR4-based timing attacks in multi-tenant FPGA environments, achieving real-time threat monitoring.",
  },
];

export default function Publications() {
  return (
    <Box id="publications" py={24} px={6} bg="gray.50" color="gray.800">
      <VStack spacing={10} maxW="6xl" mx="auto" textAlign="center">
        <Heading size="xl" color="orange.400">
          Publications
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8}>
          {publications.map((pub, index) => (
            <MotionBox
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="xl"
              bg="white"
              transition="transform 0.25s ease"
              _hover={{ transform: "scale(1.02)" }}
              whileHover={{ y: -4 }}
              textAlign="left"
            >
              <Heading size="md" mb={2} color="orange.400">
                {pub.title}
              </Heading>
              <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
                {pub.authors}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={3}>
                {pub.venue}
              </Text>
              <Text fontSize="md" mb={3} color="gray.700">
                {pub.description}
              </Text>
              <Link href={pub.link} color="orange.400" isExternal fontWeight="medium">
                View Paper →
              </Link>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
