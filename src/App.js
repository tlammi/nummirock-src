import './App.css';

import { Grid } from '@material-ui/core';
import { HashRouter, Switch, Route } from 'react-router-dom';

import LandingSection from './components/LandingSection'
import BandPreview from './components/BandPreview';
import NewsPreview from './components/NewsPreview';
import Page from './components/Page';
import BandGrid from './components/BandGrid';


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
      <BandGrid />
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
