import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';

export const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
      autoRows="minmax(140px, auto)"
      gap={4}
      maxW="1200px"
      mx="auto"
      p={4}
    >
      {children}
    </Grid>
  );
};

interface BentoCardProps {
  colSpan?: number;
  rowSpan?: number;
  title?: string;
  children: React.ReactNode;
  href?: string;
}

export const BentoCard = ({ colSpan = 1, rowSpan = 1, title, children, href }: BentoCardProps) => {
  const content = (
    <Box
      h="100%"
      bg="gray.900"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="2xl"
      p={6}
      position="relative"
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "cyan.400",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.15)"
      }}
    >
      {title && (
        <Heading 
          size="xs" 
          color="gray.500" 
          mb={3} 
          textTransform="uppercase" 
          letterSpacing="wider"
        >
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );

  if (href) {
    return (
      <GridItem colSpan={{ base: 1, md: colSpan }} rowSpan={{ base: 1, md: rowSpan }} as="a" href={href} target="_blank" cursor="pointer">
        {content}
      </GridItem>
    );
  }

  return (
    <GridItem colSpan={{ base: 1, md: colSpan }} rowSpan={{ base: 1, md: rowSpan }}>
      {content}
    </GridItem>
  );
};
