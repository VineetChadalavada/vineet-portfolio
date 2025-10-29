import { Box, VStack, Heading, Text, Link, List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Publications() {
  return (
    <Box id="publications" bg="gray.50" color="gray.800" py={24} px={6}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        maxW="5xl"
        mx="auto"
      >
        <VStack align="start" spacing={6}>
          <Heading size="xl" color="orange.500">
            Publications
          </Heading>

          <Text fontSize="lg" color="gray.600">
            Recent peer-reviewed papers and accepted works:
          </Text>

          <List spacing={5} fontSize="md">
            <ListItem>
              <b>V. Chadalavada</b>, F. Saqib, “<i>Side-Channel Attacks in FPGA-Based Cloud
              Environments: Evaluating Prime+Probe Attacks</i>,” accepted at <b>PAINE 2025</b>.
            </ListItem>

            <ListItem>
              <b>V. Chadalavada</b>, F. Saqib, “<i>Inferring Tenant Workloads in FPGA Clouds
              through DRAM Timing Signatures</i>,” accepted at <b>HONET 2025</b>.
            </ListItem>
          </List>

          <Text fontSize="sm" color="gray.500" pt={6}>
            Full publication list available on{" "}
            <Link
              href="https://scholar.google.com/citations?user=YOUR_ID"
              isExternal
              color="orange.500"
              fontWeight="medium"
            >
              Google Scholar
            </Link>
            .
          </Text>
        </VStack>
      </MotionBox>
    </Box>
  );
}
