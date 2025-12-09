import { Box, Text, Heading, VStack, Flex, Avatar, Tag, Icon, Link, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BentoGrid, BentoCard } from '../components/BentoGrid';
import { FaGithub, FaLinkedin, FaMicrochip, FaShieldAlt, FaEnvelope, FaBook } from 'react-icons/fa';

// Force Dark Mode Theme specifically for this page
const darkTheme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  styles: { global: { body: { bg: '#09090b', color: 'white' } } }
});

export default function Home() {
  return (
    <ChakraProvider theme={darkTheme}>
      <Box minH="100vh" bg="#09090b" color="gray.100" py={{ base: 10, md: 20 }}>
        <BentoGrid>
          
          {/* --- CARD 1: BIO (Top Left, Large) --- */}
          <BentoCard colSpan={2} rowSpan={2}>
            <VStack align="start" justify="space-between" h="100%" spacing={6}>
              <Box>
                <Avatar 
                  size="xl" 
                  src="/vineet.png" 
                  mb={4} 
                  border="2px solid" 
                  borderColor="cyan.400" 
                />
                <Heading size="lg" mb={2}>Vineet Chadalavada</Heading>
                <Text color="gray.300" fontSize="lg">
                  Hardware Security Researcher & PhD Student.
                </Text>
                <Text color="gray.500" mt={2} fontSize="sm" lineHeight="tall">
                   Specializing in FPGA side-channel attacks, memory isolation, and RISC-V architectures at HEADS Lab.
                </Text>
              </Box>
              
              <Flex gap={4}>
                 <Link href="https://github.com/VineetChadalavada" isExternal>
                   <Icon as={FaGithub} boxSize={6} color="gray.500" _hover={{ color: "white" }} />
                 </Link>
                 <Link href="https://linkedin.com/in/vineet-chadalavada-651210193/" isExternal>
                   <Icon as={FaLinkedin} boxSize={6} color="gray.500" _hover={{ color: "#0077b5" }} />
                 </Link>
                 <Link href="mailto:chvineet10@gmail.com">
                   <Icon as={FaEnvelope} boxSize={6} color="gray.500" _hover={{ color: "red.400" }} />
                 </Link>
              </Flex>
            </VStack>
          </BentoCard>

          {/* --- CARD 2: FOCUS AREA (Top Right, Small) --- */}
          <BentoCard colSpan={1} title="Core Focus">
            <Flex direction="column" gap={3}>
               <Tag size="lg" colorScheme="cyan" variant="subtle">
                  <Icon as={FaMicrochip} mr={2}/> FPGA
               </Tag>
               <Tag size="lg" colorScheme="purple" variant="subtle">
                  <Icon as={FaShieldAlt} mr={2}/> Security
               </Tag>
            </Flex>
          </BentoCard>

          {/* --- CARD 3: STATUS (Top Right, Small) --- */}
          <BentoCard colSpan={1} title="Status">
             <Text fontSize="2xl" fontWeight="bold" color="white">PhD</Text>
             <Text color="gray.500" fontSize="sm">UNC Charlotte</Text>
          </BentoCard>

          {/* --- CARD 4: FEATURED PROJECT (Middle, Wide) --- */}
          <BentoCard 
            colSpan={2} 
            title="Featured Research" 
            href="https://github.com/VineetChadalavada"
          >
            <Heading size="md" mb={2} color="cyan.200">Prime+Probe DDR4 Attack</Heading>
            <Text color="gray.400" fontSize="sm" mb={4}>
              Timing attack targeting DDR4 memory subsystems in multi-tenant FPGA cloud platforms (Xilinx Alveo U250).
            </Text>
            <Flex gap={2} wrap="wrap">
               <Tag variant="outline" size="sm" colorScheme="cyan">Verilog</Tag>
               <Tag variant="outline" size="sm" colorScheme="blue">Python</Tag>
               <Tag variant="outline" size="sm" colorScheme="pink">Side-Channel</Tag>
            </Flex>
          </BentoCard>

          {/* --- CARD 5: TECH STACK (Bottom, Small) --- */}
          <BentoCard colSpan={1} title="Tools">
            <Flex wrap="wrap" gap={2}>
               {['Vivado', 'Vitis', 'Gem5', 'Chisel', 'C++', 'Python', 'Verilog'].map(skill => (
                  <Tag key={skill} size="sm" bg="whiteAlpha.200" color="gray.300">{skill}</Tag>
               ))}
            </Flex>
          </BentoCard>

           {/* --- CARD 6: PUBLICATIONS (Bottom, Wide) --- */}
          <BentoCard colSpan={3} title="Selected Publications">
             <VStack align="start" spacing={4} divider={<Box borderBottomWidth="1px" borderColor="whiteAlpha.100" w="full"/>}>
                <Box>
                   <Flex align="center" gap={2}>
                      <Icon as={FaBook} color="cyan.500" />
                      <Text fontWeight="semibold" color="gray.100" fontSize="sm">Timing-Based Side-Channel Attack on DDR4</Text>
                   </Flex>
                   <Text fontSize="xs" color="gray.500" ml={6}>IEEE Transactions on Computers</Text>
                </Box>
                <Box>
                   <Flex align="center" gap={2}>
                      <Icon as={FaBook} color="purple.500" />
                      <Text fontWeight="semibold" color="gray.100" fontSize="sm">Gate-Level Information Flow Tracking</Text>
                   </Flex>
                   <Text fontSize="xs" color="gray.500" ml={6}>DAC 2024</Text>
                </Box>
             </VStack>
          </BentoCard>

        </BentoGrid>
      </Box>
    </ChakraProvider>
  );
}
