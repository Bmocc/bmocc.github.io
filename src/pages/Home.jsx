import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Hero from '../components/Hero'
import Stat from '../components/Stat'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Home() {
  const featured = projects.find(p => p.slug === 'transformer-visualization-dashboard') || projects[0]
  const recent = projects.slice(0, 6)
  return (
    <Stack spacing={5}>
      <Hero />
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}><Stat label="Prod agents shipped" value="6" /></Grid>
          <Grid item xs={12} sm={4}><Stat label="Avg RAG latency" value="< 400 ms" /></Grid>
          <Grid item xs={12} sm={4}><Stat label="RL experiments" value="20+" /></Grid>
        </Grid>
      </Box>
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>Featured</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ProjectCard project={featured} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              {recent.slice(1,4).map(p => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  )
}
