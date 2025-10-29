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
    <MotionBox
      id="contact"
      bg="gray.900"
      color="gray.100"
      py={24}
      px={6}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <VStack spacing={10} maxW="4xl" mx="auto" align="center">
        <Heading size="xl" color="orange.400">
          Contact Me
        </Heading>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <Input
              placeholder="Your Name"
              name="name"
              bg="gray.800"
              borderColor="gray.700"
              _focus={{ borderColor: "orange.400" }}
              color="gray.100"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              bg="gray.800"
              borderColor="gray.700"
              _focus={{ borderColor: "orange.400" }}
              color="gray.100"
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              bg="gray.800"
              borderColor="gray.700"
              _focus={{ borderColor: "orange.400" }}
              color="gray.100"
              required
            />
            <Button
              type="submit"
              colorScheme="orange"
              size="lg"
              w="full"
              _hover={{ transform: "scale(1.03)" }}
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
    </MotionBox>
  );
}
