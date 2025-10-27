import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Chip, Divider, Stack, Typography, Button, Grid } from '@mui/material'
import projects from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <Typography>Project not found.</Typography>
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>{project.title}</Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
          {project.tags.map(t => <Chip key={t} label={t} size="small" />)}
        </Stack>
      </Stack>

      {project.metrics && (
        <Grid container spacing={2}>
          {project.metrics.map((m, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <Box sx={{ p:2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>{m.value}</Typography>
                <Typography variant="body2" color="text.secondary">{m.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      <Divider />
      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>Summary</Typography>
        <Typography color="text.secondary">{project.summary}</Typography>
      </Stack>

      {project.details && (
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>Details</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>{project.details}</Typography>
        </Stack>
      )}

      <Stack direction="row" spacing={2}>
        {project.demo && <Button href={project.demo} variant="contained" target="_blank" rel="noreferrer">Live Demo</Button>}
        {project.repo && <Button href={project.repo} variant="outlined" target="_blank" rel="noreferrer">Code</Button>}
      </Stack>
    </Stack>
  )
}

