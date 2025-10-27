import React from 'react'
import { Paper, Stack, IconButton, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function SocialPane() {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        position: 'fixed',
        top: { xs: 72, md: 80 },
        left: { xs: 12, md: 16 },
        zIndex: (t) => t.zIndex.drawer + 1,
        p: 1,
        backdropFilter: 'blur(6px)',
        bgcolor: 'rgba(15,20,24,0.7)',
        borderRadius: 2,
      }}
    >
      <Stack direction="row" spacing={0.5}>
        <Tooltip title="GitHub">
          <IconButton size="small" color="inherit" href="https://github.com/bmocc" target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton size="small" color="inherit" href="https://www.linkedin.com/in/brandon-mocco-6b982a229/" target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email">
          <IconButton size="small" color="inherit" href="mailto:Bmocc92@yahoo.com">
            <EmailIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Paper>
  )
}
