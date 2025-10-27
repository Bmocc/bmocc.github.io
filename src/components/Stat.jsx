import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'

export default function Stat({ label, value }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, minWidth: 140 }}>
      <Stack>
        <Typography variant="h5" sx={{ fontWeight: 900 }}>{value}</Typography>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
      </Stack>
    </Paper>
  )
}

