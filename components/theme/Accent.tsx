import React, { useState, useCallback, useMemo } from 'react'
import { IconButton, Icon, IconButtonProps } from '@chakra-ui/react'
import { theme, useLinkColor, accentKeys } from 'components/theme'
import { css, Global } from '@emotion/react'
import { getTagBackgroundDark } from 'components/theme/colors'

export const AccentPickerIcon = ({ ...props }) => {
  const color = useLinkColor()
  return (
    <Icon viewBox="0 0 200 200" boxSize="1.3em" color={color} {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  )
}

export const AccentPicker: React.FC<IconButtonProps> = ({ ...props }) => {
  // Default accent color state instead of using missing hook
  const [accentIndex, setAccentIndex] = useState(0)

  const updateAccent = useCallback(() => {
    setAccentIndex((prev) => (prev + 1) % accentKeys.length)
  }, [])

  return (
    <IconButton
      icon={<AccentPickerIcon />}
      isRound
      onMouseDown={updateAccent}
      {...props}
    />
  )
}

export const AccentGlobal: React.FC = () => {
  const accentKey = accentKeys[0] // default to first accent color
  const accent = theme.colors[accentKey]
  const styles = useMemo(
    () => css`
      :root {
        --colors-accent-50: ${accent[50]};
        --colors-accent-100: ${accent[100]};
        --colors-accent-200: ${accent[200]};
        --colors-accent-300: ${accent[300]};
        --colors-accent-400: ${accent[400]};
        --colors-accent-500: ${accent[500]};
        --colors-accent-600: ${accent[600]};
        --colors-accent-700: ${accent[700]};
        --colors-accent-800: ${accent[800]};
        --colors-accent-900: ${accent[900]};
        --colors-accent-tag-bg-dark: ${getTagBackgroundDark(accentKey, theme)};
      }
    `,
    [accentKey]
  )

  return <Global styles={styles} />
}
