import './App.css';

import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import LandingSection from './components/LandingSection'
import BandPreview from './components/BandPreview';
import NewsPreview from './components/NewsPreview';

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
        <NewsPreview />
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
