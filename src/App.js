import './App.css';

import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import LandingSection from './components/LandingSection'
import BandPreview from './components/BandPreview';
import NewsPreview from './components/NewsPreview';
import { HashRouter, Switch, Route } from 'react-router-dom';

function HeaderBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button><HomeIcon /></Button>
        <div style={{ flex: 1 }}></div>
        <Button href="/#/uutiset">Uutiset</Button>
        <Button href="/#/ohjelma">Ohjelma</Button>
        <Button href="/#/info">Info</Button>
      </Toolbar>
    </AppBar>
  );
}

// Left-right alignment
function HomePage() {
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

function NewsPage() {
  return (
    <div>
      This is news
    </div>
  )
}

function BandsPage() {
  return (
    <div>
      This is bands.
    </div>
  );
}

function InfoPage() {
  return (
    <div>
      This is info.
    </div>
  );
}

function Pages() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/uutiset">
          <NewsPage />
        </Route>
        <Route exact path="/ohjelma">
          <BandsPage />
        </Route>
        <Route exact path="/info">
          <InfoPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

function App() {
  return (
    <Pages />
  );
}

export default App;
