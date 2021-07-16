import './App.css';

import { Grid } from '@material-ui/core';
import { HashRouter, Switch, Route } from 'react-router-dom';

import LandingSection from './components/LandingSection'
import BandPreview from './components/BandPreview';
import NewsPreview from './components/NewsPreview';
import Page from './components/Page';
import BandGrid from './components/BandGrid';
import { Fragment } from 'react';
import { ScrollToTop } from './util';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    color: "white"
  }
});

// Left-right alignment
function HomePage() {
  const classes = useStyles();
  return (
    <Page>
      <Grid container direction="column" className={classes.root}>
        <LandingSection />
        <Grid item style={{
          minHeight: "10vh"
        }}></Grid>
        <BandPreview />
        <Grid item style={{
          minHeight: "10vh"
        }}></Grid>
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
      <Fragment>
        <ScrollToTop />
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
      </Fragment>
    </HashRouter>
  );
}

function App() {
  return (
    <div>
      <link rel="stylesheet"
        href="https://www.nummirock.fi/2017/fonts.css" type="text/css" />
      <Pages />
    </div>
  );
}

export default App;
