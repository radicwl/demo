import { Box, Typography, Fade, Link } from '@mui/material'

function LandingContent() {
  return (
    <Fade appear in timeout={2500}>
      <Box
        width="100%"
        height="400%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: '100%',
          margin: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        <Box position="relative" textAlign="left" maxWidth="800px" padding={5}>
        </Box>
      </Box>
    </Fade>
  )
}

export function Landing() {
  return (
    <Box
      width="100vw"
      height="400vh"
      sx={{
        '&::after, &::before': {
          boxSizing: 'border-box',
        },
        '&::after': {
          content: "''",
          width: '100vw',
          height: '400vh',
          display: 'flex',
          position: 'fixed',
          backgroundSize: 'cover',
          minHeight: '100%',
          minWidth: '100%',
          zIndex: -1,
          left: 0,
          top: 0,
        },
      }}
    >
      <LandingContent />
    </Box>
  )
}
