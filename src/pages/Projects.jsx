import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>Projects</Typography>
      <Typography color="text.secondary">Agentic AI, RAG, and Reinforcement Learning work. Click a card for details.</Typography>
      <Grid container spacing={2}>
        {projects.map(p => (
          <Grid key={p.slug} item xs={12} sm={6} md={4}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

