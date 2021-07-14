import './App.css';

import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import ReactMarkdown from 'react-markdown';
import LandingSection from './components/LandingSection';

import newsPlaceholder from './resources/news_placeholder.md';
import { useState } from 'react';
import BandPreview from './components/BandPreview';

function NewsGrid() {

  const [md, setMd] = useState("This is news");

  fetch(newsPlaceholder)
    .then((r) => r.text())
    .then(text => setMd(text));

  return (
    <Grid item container>
      <Grid item xs={6}>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
      </Grid>
      <Grid item xs={6}>
        <ReactMarkdown>
          {md}
        </ReactMarkdown>
      </Grid>
    </Grid>
  )
}

function HeaderBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button><HomeIcon /></Button>
        <div style={{ flex: 1 }}></div>
        <Button>Uutiset</Button>
        <Button>Ohjelma</Button>
        <Button>Info</Button>
      </Toolbar>
    </AppBar>
  );
}

// Left-right alignment
function Sections() {
  return (
    <div>
      <HeaderBar />
      <Grid container>
        <LandingSection />
        <BandPreview />
        <NewsGrid />
      </Grid>
    </div>
  );
}

function App() {
  return (
    <Sections />
  );
}

export default App;
