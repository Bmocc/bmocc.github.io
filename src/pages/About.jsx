import React from 'react'
import { Stack, Typography, Divider } from '@mui/material'

export default function About() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>About</Typography>
      <Typography color="text.secondary">
        I’m an AI Engineer focused on agentic systems, retrieval‑augmented generation, and reinforcement learning. I like shipping practical tools that reduce latency, raise accuracy, and automate real business workflows.
      </Typography>

      <Divider />
      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>Professional Interests</Typography>
        <ul>
          <li>Agentic AI workflows for operational efficiency</li>
          <li>Retrieval‑augmented generation (RAG) over proprietary knowledge bases</li>
          <li>MLOps and model monitoring at scale</li>
        </ul>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>Publication</Typography>
        <ul>
          <li>
            <strong>FoMO Study</strong> (2024) — Co‑author. Leveraged regression, Random Forest, and XGBoost models to predict moral judgment from survey data.
          </li>
        </ul>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>Education</Typography>
        <ul>
          <li><strong>M.Sc. Computational Data Science</strong>, Georgia Institute of Technology — <em>GPA 4.0</em></li>
          <li><strong>B.Sc. Data Science</strong>, Southern Connecticut State University — <em>Cum Laude, GPA 3.7</em></li>
        </ul>
      </Stack>
    </Stack>
  )
}
