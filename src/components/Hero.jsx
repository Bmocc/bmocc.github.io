import React from 'react'
import { Box, Stack, Typography, Button, Chip } from '@mui/material'

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 3, p: { xs: 3, md: 5 }, mb: 5, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
      <Stack spacing={2}>
        <Chip label="Agentic AI • RAG • RL" color="secondary" variant="outlined" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
        <Typography variant="h3" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
          Building agentic systems, retrieval pipelines, and reinforcement learning tools
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 900 }}>
          I design production‑ready AI systems: GPT‑powered agents, efficient RAG over proprietary knowledge, and RL projects that experiment with policies, value functions, and reward shaping.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button href="#/projects/transformer-visualization-dashboard" variant="contained">Featured: Transformer Dashboard</Button>
          <Button href="#/projects" variant="outlined">Browse Projects</Button>
        </Stack>
      </Stack>
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(80% 60% at 110% -10%, rgba(124,77,255,0.18), transparent 40%)' }} />
    </Box>
  )
}

