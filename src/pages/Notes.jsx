import React from 'react'
import { Stack, Typography, Link } from '@mui/material'

export default function Notes() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>Notes</Typography>
      <Typography color="text.secondary">Short write‑ups and experiments. Suggested topics:</Typography>
      <ul>
        <li>RAG pitfalls and evaluation in production</li>
        <li>Choosing a vector DB and chunking strategies</li>
        <li>RL: policy gradients vs Q‑learning in simple environments</li>
        <li>LLM agent observability and safe‑guard rails</li>
      </ul>
      <Typography variant="body2" color="text.secondary">
        You can convert this to markdown‑driven content later or link to external posts.
      </Typography>
      <Link href="#/projects" underline="hover">Back to Projects</Link>
    </Stack>
  )
}

