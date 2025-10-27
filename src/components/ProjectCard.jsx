import React from 'react'
import { Card, CardContent, CardActions, Chip, Stack, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {project.cover && (
        <Box sx={{ position: 'relative', bgcolor: 'grey.900', pt: '56.25%', overflow: 'hidden' }}>
          <Box
            component="img"
            alt={`${project.title} cover`}
            src={project.cover}
            loading="lazy"
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </Box>
      )}
      <CardContent sx={{ flex: 1 }}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {project.tags?.map((t) => (
              <Chip key={t} label={t} size="small" color={t.toLowerCase().includes('rl') ? 'secondary' : 'default'} />
            ))}
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">{project.summary}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/projects/${project.slug}`} size="small">Details</Button>
        {project.demo && (
          <Button href={project.demo} size="small" target="_blank" rel="noreferrer">Live Demo</Button>
        )}
        {project.repo && (
          <Button href={project.repo} size="small" target="_blank" rel="noreferrer">Code</Button>
        )}
      </CardActions>
    </Card>
  )
}
