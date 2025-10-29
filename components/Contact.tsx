import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  HStack,
  Link,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);

export default function Contact() {
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out, Vineet will get back soon.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box id="contact" py={24} px={6} bg="white" color="gray.800">
      <VStack spacing={10} maxW="4xl" mx="auto" align="center">
        <Heading size="xl" color="orange.400">
          Contact Me
        </Heading>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <Input
              placeholder="Your Name"
              name="name"
              bg="gray.900"
              borderColor="gray.700"
              _focus={{ borderColor: "orange.400" }}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              bg="gray.900"
              borderColor="gray.700"
              _focus={{ borderColor: "orange.400" }}
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              bg="gray.900"
              borderColor="gray.700"
              _focus={{ borderColor: "orange.400" }}
              required
            />
            <Button
              type="submit"
              colorScheme="orange"
              size="lg"
              w="full"
              _hover={{ transform: "scale(1.02)" }}
            >
              Send Message
            </Button>
          </VStack>
        </form>

        <HStack spacing={6} mt={10}>
          <Link href="mailto:chvineet10@gmail.com" isExternal>
            <IconButton
              aria-label="Email"
              icon={<FaEnvelope />}
              colorScheme="orange"
              size="lg"
              isRound
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vineet-chadalavada-651210193/"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="orange"
              size="lg"
              isRound
            />
          </Link>
          <Link href="https://github.com/VineetChadalavada" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              colorScheme="orange"
              size="lg"
              isRound
            />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
