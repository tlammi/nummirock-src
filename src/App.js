import './App.css';

import { createTheme, Grid } from '@material-ui/core';
import { HashRouter, Switch, Route } from 'react-router-dom';

import LandingSection from './components/LandingSection'
import BandPreview from './components/BandPreview';
import NewsPreview from './components/NewsPreview';
import Page from './components/Page';
import BandGrid from './components/BandGrid';
import { Fragment } from 'react';
import { ScrollToTop } from './util';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 0, 0)",
      light: "rgb(30, 30, 30)",
      contrastText: "rgb(255, 255, 255)"
    },
    text: {
      primary: "rgb(255, 255, 255)",
    },
    background: "black"
  },
});

// Left-right alignment
function HomePage() {
  return (
    <Page>
      <Grid container direction="column">
        <LandingSection />
        <Grid item style={{
          minHeight: "10vh"
        }}></Grid>
        <BandPreview />
        <Grid item style={{
          minHeight: "10vh"
        }}></Grid>
        <NewsPreview />
        {/* Avoid white bar at the bottom of page when news are expanded*/}
        <Grid item style={{
          minHeight: "10px"
        }}></Grid>
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
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </div>
  );
}

export default App;
