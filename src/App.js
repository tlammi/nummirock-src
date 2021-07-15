import './App.css';

import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

import LandingSection from './components/LandingSection'
import BandPreview from './components/BandPreview';
import NewsPreview from './components/NewsPreview';
import Page from './components/Page';


// Left-right alignment
function HomePage() {
  return (
    <Page>
      <Grid container>
        <LandingSection />
        <BandPreview />
        <NewsPreview />
      </Grid>
    </Page>
  );
}

function NewsPage() {
  return (
    <Page>
      this is news
    </Page>
  );
}

function BandsPage() {
  return (
    <Page>
      thsi is bands
    </Page>
  );
}

function InfoPage() {
  return (
    <Page>
      this is info
    </Page>
  );
}

function Pages() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
