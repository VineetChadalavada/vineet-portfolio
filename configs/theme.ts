// File: configs/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: '#09090b', // Deep dark background
        color: 'gray.100',
      },
    },
  },
});

export default theme;
