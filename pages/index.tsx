import { Box, Text, Heading, VStack, Flex, Avatar, Tag, Icon, Link, ChakraProvider, extendTheme, Button, SimpleGrid } from '@chakra-ui/react';
import { BentoGrid, BentoCard } from '../components/BentoGrid';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaGraduationCap, FaMicrochip, FaShieldAlt, FaServer, FaBook, FaBriefcase, FaAward } from 'react-icons/fa';

// Force Dark Mode Theme
const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  styles: { global: { body: { bg: '#09090b', color: 'gray.100' } } }
});

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="#09090b" color="gray.100" py={{ base: 10, md: 20 }} px={4}>
        
        {/* HEADER */}
        <VStack mb={12} spacing={2}>
           <Heading size="2xl" bgGradient="linear(to-r, cyan.400, purple.500)" bgClip="text" textAlign="center">
             Vineet Chadalavada
           </Heading>
           <Text color="gray.500" fontSize="lg" textAlign="center">
             Hardware Security Researcher | PhD Candidate
           </Text>
        </VStack>

        <BentoGrid>
          
          {/* --- ROW 1: PROFILE --- */}
          
          {/* 1. BIO */}
          <BentoCard colSpan={2} rowSpan={2}>
            <VStack align="start" justify="space-between" h="100%" spacing={6}>
              <Box>
                <Avatar size="xl" src="/vineet.png" mb={4} border="2px solid" borderColor="cyan.400" />
                <Text color="gray.300" fontSize="lg" fontWeight="bold">
                  PhD Candidate @ UNC Charlotte
                </Text>
                <Text color="gray.500" mt={3} fontSize="sm" lineHeight="tall">
                   I work at the intersection of FPGA security and cloud hardware systems. My research spans Prime+Probe attacks, memory-access monitoring, and defending multi-tenant FPGA platforms against microarchitectural threats.
                </Text>
              </Box>
              <Flex gap={4}>
                 <Link href="https://github.com/VineetChadalavada" isExternal><Icon as={FaGithub} boxSize={6} color="gray.500" _hover={{ color: "white" }}/></Link>
                 <Link href="https://www.linkedin.com/in/vineet-chadalavada-651210193" isExternal><Icon as={FaLinkedin} boxSize={6} color="gray.500" _hover={{ color: "#0077b5" }}/></Link>
                 <Link href="mailto:chvineet10@gmail.com"><Icon as={FaEnvelope} boxSize={6} color="gray.500" _hover={{ color: "red.400" }}/></Link>
              </Flex>
            </VStack>
          </BentoCard>

          {/* 2. CV DOWNLOAD */}
          <BentoCard colSpan={1} title="Documents">
            <VStack align="start" justify="center" h="100%">
               <Button 
                 as="a" 
                 href="/resume.pdf" 
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
               <Text fontSize="xs" color="gray.500" mt={2}>Updated: 2025</Text>
            </VStack>
          </BentoCard>

          {/* 3. FELLOWSHIP / AWARD */}
          <BentoCard colSpan={1} title="Honors">
             <Icon as={FaAward} color="yellow.400" boxSize={6} mb={2}/>
             <Text fontWeight="bold" fontSize="sm">Graduate Summer Fellowship</Text>
             <Text fontSize="xs" color="gray.500">Awarded 2025</Text>
          </BentoCard>

          {/* --- ROW 2: EXPERIENCE & EDUCATION --- */}

          {/* 4. EXPERIENCE TIMELINE */}
          <BentoCard colSpan={1} rowSpan={2} title="Experience">
             <VStack align="start" spacing={6} mt={2}>
                <Box borderLeft="2px solid" borderColor="cyan.500" pl={4} position="relative">
                   <Box position="absolute" left="-5px" top="0" boxSize="8px" bg="cyan.900" borderRadius="full" />
                   <Text fontWeight="bold" fontSize="sm">Research Assistant</Text>
                   <Text fontSize="xs" color="gray.500">HEADS Lab | Summer 2024</Text>
                   <Text fontSize="xs" color="gray.400" mt={1}>Investigated side-channel vulnerabilities & ML-driven power analysis.</Text>
                </Box>
                <Box borderLeft="2px solid" borderColor="gray.700" pl={4} position="relative">
                   <Box position="absolute" left="-5px" top="0" boxSize="8px" bg="gray.700" borderRadius="full" />
                   <Text fontWeight="bold" fontSize="sm">Research Assistant</Text>
                   <Text fontSize="xs" color="gray.500">UNC Charlotte | Summer 2023</Text>
                   <Text fontSize="xs" color="gray.400" mt={1}>Performed AES Side-Channel Analysis on Artix-7 & RO PUF design.</Text>
                </Box>
                <Box borderLeft="2px solid" borderColor="gray.700" pl={4} position="relative">
                   <Box position="absolute" left="-5px" top="0" boxSize="8px" bg="gray.700" borderRadius="full" />
                   <Text fontWeight="bold" fontSize="sm">SAFC Chair</Text>
                   <Text fontSize="xs" color="gray.500">Student Activity Fee Comm.</Text>
                   <Text fontSize="xs" color="gray.400" mt={1}>Overseeing budget reviews & funding.</Text>
                </Box>
             </VStack>
          </BentoCard>

          {/* 5. EDUCATION */}
          <BentoCard colSpan={2} title="Education">
            <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
               <Box>
                  <Icon as={FaGraduationCap} color="purple.400" mb={1} />
                  <Text fontWeight="bold" fontSize="sm">PhD Computer Engineering</Text>
                  <Text fontSize="xs" color="gray.400">UNC Charlotte (Exp. 2026)</Text>
               </Box>
               <Box>
                  <Icon as={FaGraduationCap} color="gray.500" mb={1} />
                  <Text fontWeight="bold" fontSize="sm">MS Computer Engineering</Text>
                  <Text fontSize="xs" color="gray.400">UNC Charlotte (2022-2023)</Text>
               </Box>
               <Box>
                  <Icon as={FaGraduationCap} color="gray.600" mb={1} />
                  <Text fontWeight="bold" fontSize="sm">BE Electrical & Electronics</Text>
                  <Text fontSize="xs" color="gray.400">Sathyabama University (2016-2020)</Text>
               </Box>
            </SimpleGrid>
          </BentoCard>

          {/* --- ROW 3: SKILLS & PROJECTS --- */}

          {/* 6. SKILLS */}
          <BentoCard colSpan={2} title="Technical Skills">
            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text fontSize="xs" color="gray.500" mb={2} fontWeight="bold" letterSpacing="widest">HARDWARE</Text>
                <Flex wrap="wrap" gap={2}>
                  {['Alveo U250', 'Artix-7', 'Zybo Z7', 'Vivado', 'Vitis', 'HLS', 'Verilog'].map(s => (
                    <Tag key={s} size="sm" colorScheme="cyan" variant="subtle">{s}</Tag>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.500" mb={2} fontWeight="bold" letterSpacing="widest">SECURITY & AI</Text>
                <Flex wrap="wrap" gap={2}>
                  {['Side-Channel Analysis', 'Power Analysis', 'PUF', 'SVM', 'Python', 'C++'].map(s => (
                    <Tag key={s} size="sm" colorScheme="purple" variant="subtle">{s}</Tag>
                  ))}
                </Flex>
              </Box>
            </SimpleGrid>
          </BentoCard>

           {/* --- ROW 4: PUBLICATIONS --- */}

          {/* 7. PUBLICATIONS */}
          <BentoCard colSpan={4} title="Key Publications">
             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md" borderLeft="2px solid" borderColor="cyan.500">
                   <Text fontWeight="bold" color="cyan.100" fontSize="sm">Timing-Based Side-Channel Attack on DDR4 Memory</Text>
                   <Text fontSize="xs" color="gray.400">FPGA Cloud Environments</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md" borderLeft="2px solid" borderColor="purple.500">
                   <Text fontWeight="bold" color="purple.100" fontSize="sm">Multi-Granular Information Flow Tracking</Text>
                   <Text fontSize="xs" color="gray.400">RISC-V based SoCs</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md" borderLeft="2px solid" borderColor="gray.500">
                   <Text fontWeight="bold" color="gray.200" fontSize="sm">ML-Based Dynamic Logic Locking</Text>
                   <Text fontSize="xs" color="gray.400">Implementation & Analysis</Text>
                </Box>
                <Box p={3} bg="whiteAlpha.50" borderRadius="md" borderLeft="2px solid" borderColor="gray.500">
                   <Text fontWeight="bold" color="gray.200" fontSize="sm">Gate-Level Information Flow Tracking</Text>
                   <Text fontSize="xs" color="gray.400">Securing 3PIPs</Text>
                </Box>
             </SimpleGrid>
          </BentoCard>

        </BentoGrid>
        
        {/* FOOTER */}
        <Flex justify="center" mt={12} pb={8} color="gray.600" fontSize="sm">
           <Text>© 2025 Vineet Chadalavada. Built with Next.js & Chakra UI.</Text>
        </Flex>

      </Box>
    </ChakraProvider>
  );
}
