import { Box, VStack, Heading, Text, Button, HStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const MotionBox = motion(Box);

export default function Home() {
  return (
   <Box bg="gray.50" color="gray.800" scrollBehavior="smooth">
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <MotionBox
        as="header"
        id="home"
        textAlign="center"
        py={40}
        px={6}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading size="2xl" color="orange.400" mb={4}>
          Vineet Chadalavada
        </Heading>
        <Text fontSize="xl" mb={8}>
           PhD Student • Hardware Security Researcher • RISC-V & FPGA Systems
        </Text>

        <HStack justify="center" spacing={6}>
          <Link href="mailto:chvineet10@gmail.com" isExternal>
            <Button leftIcon={<FaEnvelope />} colorScheme="orange" variant="solid">
              Email
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vineet-chadalavada-651210193/"
            isExternal
          >
            <Button leftIcon={<FaLinkedin />} colorScheme="orange" variant="outline">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/VineetChadalavada" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="orange" variant="outline">
              GitHub
            </Button>
          </Link>
        </HStack>
      </MotionBox>

      {/* ===== CONTENT SECTIONS ===== */}
      <VStack spacing={0} align="stretch">
        <Box id="about">
          <About />
        </Box>

        <Box id="projects">
          <Projects />
        </Box>

        <Box id="skills">
          <Skills />
        </Box>

        <Box id="contact">
          <Contact />
        </Box>
      </VStack>

      {/* ===== FOOTER ===== */}
      <Box py={8} textAlign="center" bg="gray.800" color="gray.400" fontSize="sm">
        © {new Date().getFullYear()} Vineet Chadalavada | Built with Next.js + Chakra UI ❤️
      </Box>
    </Box>
  );
}
