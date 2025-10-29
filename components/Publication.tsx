import { Box, Heading, VStack, Text, Link, HStack, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Publications() {
  const publications = [
    {
      title:
        "Side-Channel Attacks in FPGA-Based Cloud Environments: Evaluating Prime+Probe Attacks",
      venue: "Accepted — PAINE 2025 (IEEE Workshop on Privacy Aware Computing)",
      link: "#",
    },
    {
      title:
        "Inferring Tenant Workloads in FPGA Clouds through DRAM Timing Signatures",
      venue: "Accepted — HONET 2025 (IEEE International Conference on High Performance Networks & Systems)",
      link: "#",
    },
    {
      title:
        "Trusted Memory Access Monitor (TMAM): Real-Time Detection of DDR4-Based Prime+Probe Attacks in Multi-Tenant FPGA Platforms",
      venue: "In Submission — IEEE HOST 2026",
      link: "#",
    },
  ];

  return (
    <Box id="publications" py={24} px={6} bg="gray.900" color="gray.100">
      <VStack spacing={10} maxW="5xl" mx="auto" align="start">
        <Heading size="xl" color="orange.400">
          Publications
        </Heading>

        {publications.map((pub, index) => (
          <MotionBox
            key={index}
            p={6}
            borderRadius="md"
            w="full"
            bg="gray.800"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            shadow="lg"
          >
            <VStack align="start" spacing={3}>
              <Text fontSize="lg" fontWeight="semibold">
                {pub.title}
              </Text>
              <HStack spacing={3}>
                <Tag colorScheme="orange">{pub.venue}</Tag>
              </HStack>
              {pub.link !== "#" && (
                <Link
                  href={pub.link}
                  color="orange.300"
                  fontWeight="medium"
                  isExternal
                >
                  View Paper →
                </Link>
              )}
            </VStack>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}
