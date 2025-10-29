import { ChakraProvider, Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { theme } from 'components/theme'
import { AccentGlobal } from 'components/theme/Accent'
import { FontsGlobal } from 'components/theme/fonts'
import { PrismGlobal } from 'components/theme/prism'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <FontsGlobal />
      <AccentGlobal />
      <PrismGlobal />
      <Analytics />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Box key={router.route}>
          <Component {...pageProps} />
        </Box>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
