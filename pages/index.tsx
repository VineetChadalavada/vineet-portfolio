import { Box, Text, Heading, VStack, Flex, Avatar, Tag, Icon, Link, ChakraProvider, extendTheme, Button, Divider, HStack } from '@chakra-ui/react';
import { BentoGrid, BentoCard } from '../components/BentoGrid';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaBriefcase, FaGraduationCap, FaMicrochip, FaShieldAlt, FaCode, FaServer } from 'react-icons/fa';

// Force Dark Mode Theme
const darkTheme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  styles: { global: { body: { bg: '#09090b', color: 'white' } } }
});

export default function Home() {
  return (
    <ChakraProvider theme={darkTheme}>
      <Box minH="100vh" bg="#09090b" color="gray.100" py={{ base: 10, md: 20 }} px={4}>
        
        {/* Header Section */}
        <VStack mb={12} spacing={2}>
           <Heading size="2xl" bgGradient="linear(to-r, cyan.400, purple.500)" bgClip="text">
             Vineet Chadalavada
           </Heading>
           <Text color="gray.500">Building Secure Hardware for the Cloud Era</Text>
        </VStack>

        <BentoGrid>
          
          {/* --- ROW 1: INTRODUCTION & CORE STATS --- */}
          
          {/* 1. BIO & SOCIALS (Large) */}
          <BentoCard colSpan={2} rowSpan={2}>
            <VStack align="start" justify="space-between" h="100%" spacing={6}>
              <Box>
                <Avatar size="xl" src="/vineet.png" mb={4} border="2px solid" borderColor="cyan.400" />
                <Text color="gray.300" fontSize="lg" fontWeight="medium">
                  PhD Researcher @ HEADS Lab
                </Text>
                <Text color="gray.500" mt={3} fontSize="sm" lineHeight="tall">
                   My research focuses on hardware security for reconfigurable computing. I break systems (side-channel attacks) to build them stronger (secure architectures).
                </Text>
              </Box>
              <Flex gap={4}>
                 <Link href="https://github.com/VineetChadalavada" isExternal><Icon as={FaGithub} boxSize={6} color="gray.500" _hover={{ color: "white" }}/></Link>
                 <Link href="https://linkedin.com/in/vineet-chadalavada-651210193/" isExternal><Icon as={FaLinkedin} boxSize={6} color="gray.500" _hover={{ color: "#0077b5" }}/></Link>
                 <Link href="mailto:chvineet10@gmail.com"><Icon as={FaEnvelope} boxSize={6} color="gray.500" _hover={{ color: "red.400" }}/></Link>
              </Flex>
            </VStack>
          </BentoCard>

          {/* 2. RESUME DOWNLOAD (High Priority) */}
          <BentoCard colSpan={1} title="Documents">
            <VStack align="start" justify="center" h="100%">
               <Button 
                 as="a" 
                 href="/resume.pdf" // Make sure to put your PDF in the 'public' folder
                 target="_blank"
                 leftIcon={<FaFileDownload />} 
                 colorScheme="cyan" 
                 variant="outline" 
                 size="sm" 
                 w="full"
                 _hover={{ bg: "cyan.900" }}
               >
                 Download CV
               </Button>
               <Text fontSize="xs" color="gray.500" mt={2}>Updated: Dec 2024</Text>
            </VStack>
          </BentoCard>

          {/* 3. EDUCATION (Small) */}
          <BentoCard colSpan={1} title="Education">
             <Icon as={FaGraduationCap} color="purple.400" boxSize={6} mb={2}/>
             <Text fontWeight="bold">PhD in ECE</Text>
             <Text fontSize="xs" color="gray.500">UNC Charlotte</Text>
             <Text fontSize="xs" color="gray.600" mt={1}>HEADS Security Lab</Text>
          </BentoCard>

          {/* --- ROW 2: EXPERIENCE & SKILLS --- */}

          {/* 4. EXPERIENCE TIMELINE (Tall) */}
          <BentoCard colSpan={1} rowSpan={2} title="Experience">
             <VStack align="start" spacing={6} mt={2}>
                <Box borderLeft="2px solid" borderColor="gray.700" pl={4} position="relative">
                   <Box position="absolute" left="-5px" top="0" boxSize="8px" bg="cyan.400" borderRadius="full" />
                   <Text fontWeight="bold" fontSize="sm">Graduate Researcher</Text>
                   <Text fontSize="xs" color="gray.500">UNC Charlotte | 2022 - Present</Text>
                   <Text fontSize="xs" color="gray.400" mt={1}>Leading FPGA cloud security research.</Text>
                </Box>
                <Box borderLeft="2px solid" borderColor="gray.700" pl={4} position="relative">
                   <Box position="absolute" left="-5px" top="0" boxSize="8px" bg="gray.600" borderRadius="full" />
                   <Text fontWeight="bold" fontSize="sm">Research Assistant</Text>
                   <Text fontSize="xs" color="gray.500">HEADS Lab</Text>
                   <Text fontSize="xs" color="gray.400" mt={1}>Developed TMAM security IP.</Text>
                </Box>
             </VStack>
          </BentoCard>

          {/* 5. TECH STACK (Wide) */}
          <BentoCard colSpan={2} title="Technical Arsenal">
            <VStack align="start" spacing={4}>
              <Box>
                <Text fontSize="xs" color="gray.500" mb={1} fontWeight="bold">HARDWARE & FPGA</Text>
                <Flex wrap="wrap" gap={2}>
                  {['Verilog', 'VHDL', 'Vivado', 'Vitis', 'Alveo U250', 'Chisel', 'Gem5'].map(s => (
                    <Tag key={s} size="sm" colorScheme="cyan" variant="subtle">{s}</Tag>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.500" mb={1} fontWeight="bold">SOFTWARE & ANALYSIS</Text>
                <Flex wrap="wrap" gap={2}>
                  {['C/C++', 'Python', 'TensorFlow', 'ChipWhisperer', 'Assembly', 'Linux'].map(s => (
                    <Tag key={s} size="sm" colorScheme="purple" variant="subtle">{s}</Tag>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </BentoCard>

          {/* --- ROW 3: PROJECTS --- */}

          {/* 6. FEATURED PROJECT 1 (Wide) */}
          <BentoCard colSpan={2} title="Featured Project" href="https://github.com/VineetChadalavada">
            <HStack justify="space-between" align="start">
               <Box>
                 <Heading size="md" mb={2} color="cyan.200">Prime+Probe DDR4 Attack</Heading>
                 <Text color="gray.400" fontSize="sm" mb={4}>
                   Reverse-engineered DRAM addressing on Xilinx Alveo U250 to demonstrate cross-tenant information leakage in cloud FPGAs.
                 </Text>
                 <Flex gap={2}>
                    <Tag variant="outline" size="sm" colorScheme="cyan">Verilog</Tag>
                    <Tag variant="outline" size="sm" colorScheme="blue">Python</Tag>
                 </Flex>
               </Box>
               <Icon as={FaServer} boxSize={10} color="gray.700" />
            </HStack>
          </BentoCard>

          {/* 7. SECONDARY PROJECT (Square) */}
          <BentoCard colSpan={1} title="Defense Mechanism" href="https://github.com/VineetChadalavada">
             <Heading size="sm" color="white" mb={2}>TMAM Security IP</Heading>
             <Text fontSize="xs" color="gray.400" mb={3}>
                Trusted Memory Access Monitor to detect runtime side-channel attacks.
             </Text>
             <Icon as={FaShieldAlt} color="green.400" boxSize={6} />
          </BentoCard>

           {/* --- ROW 4: PUBLICATIONS --- */}

          {/* 8. PUBLICATIONS (Full Width) */}
          <BentoCard colSpan={4} title="Selected Publications">
             <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md">
                   <Text fontWeight="bold" color="cyan.100" fontSize="sm">Timing-Based Side-Channel Attack on DDR4 Memory</Text>
                   <Text fontSize="xs" color="gray.400">IEEE Transactions on Computers</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md">
                   <Text fontWeight="bold" color="cyan.100" fontSize="sm">Gate-Level Information Flow Tracking for 3PIPs</Text>
                   <Text fontSize="xs" color="gray.400">Design Automation Conference (DAC)</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md">
                   <Text fontWeight="bold" color="cyan.100" fontSize="sm">Mitigating DDR4 Timing Side-Channels</Text>
                   <Text fontSize="xs" color="gray.400">FPGA Cloud Security Symposium</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md">
                   <Text fontWeight="bold" color="cyan.100" fontSize="sm">Machine Learning-Based Side-Channel Analysis</Text>
                   <Text fontSize="xs" color="gray.400">Hardware Security Journal</Text>
                </Box>
             </Grid>
          </BentoCard>

        </BentoGrid>
        
        {/* Footer */}
        <Flex justify="center" mt={12} color="gray.600" fontSize="sm">
           <Text>© 2025 Vineet Chadalavada. Built with Next.js & Chakra UI.</Text>
        </Flex>

      </Box>
    </ChakraProvider>
  );
}
