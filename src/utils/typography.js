import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.overrideThemeStyles = () => {
  return {
    h1: {
      color: '#7E7192',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      textShadow: 'none',
    },
    p: {
      fontSize: '15px',
    },
    ':focus:not(:focus-visible)': {
      outline: 'none',
    },
  }
}

delete fairyGatesTheme.googleFonts

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
