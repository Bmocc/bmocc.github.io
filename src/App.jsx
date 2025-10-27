import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  AppBar, Box, Container, IconButton, Toolbar, Typography, Button, Stack
} from '@mui/material'
import ScienceIcon from '@mui/icons-material/Science'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Notes from './pages/Notes'
import SocialPane from './components/SocialPane'

function NavLink({ to, label }) {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Button component={Link} to={to} color={active ? 'secondary' : 'inherit'} sx={{ fontWeight: active ? 700 : 500 }}>
      {label}
    </Button>
  )
}

export default function App() {
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar>
          <IconButton component={Link} to="/" edge="start" color="primary" sx={{ mr: 1 }}>
            <ScienceIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 0.5 }}>
            Brandon Mocco — AI Engineer
          </Typography>
          <Stack direction="row" spacing={1}>
            <NavLink to="/" label="Home" />
            <NavLink to="/projects" label="Projects" />
            <NavLink to="/notes" label="Notes" />
            <NavLink to="/about" label="About" />
          </Stack>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ py: { xs: 4, md: 6 }, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Container>

      <SocialPane />

      <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 3 }}>
        <Container>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Brandon Mocco</Typography>
            <Stack direction="row" spacing={2}>
              <Button href="mailto:Bmocc92@yahoo.com" color="inherit">Email</Button>
              <Button href="https://github.com/bmocc" color="inherit">GitHub</Button>
              <Button href="https://www.linkedin.com/in/brandon-mocco-6b982a229/" color="inherit">LinkedIn</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
