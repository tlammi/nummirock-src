import logo from './logo.svg';
import './App.css';

import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';

const NummiBigImg = 'https://www.nummirock.fi/2017/images/Etusivu_tausta_2021_desktop-C.jpg';

const useStyles = makeStyles(({
  leftAlign: {
    backgroundColor: "yellow",
  },
  rightAlign: {
    backgroundColor: "blue",
  },
  wallPaperContainer: {
    backgroundColor: "black",
  },
  wallPaper: {
    animation: `$fadein 3s`,
    width: "100%",
  },
  "@keyframes fadein": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    },
  }
}));

function BandGrid(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={props.xs} style={{ backgroundColor: "blue" }}>
        item 1
      </Grid>
      <Grid item xs={props.xs} style={{ backgroundColor: "red" }}>
        item 2
      </Grid>
      <Grid item xs={props.xs} style={{ backgroundColor: "green" }}>
        item 3
      </Grid>
    </Grid>
  )
}


function NewsGrid() {
  return (
    <Grid container>
      <Grid item xs={6}> this is news 1</Grid>
      <Grid item xs={6}> this is news 2</Grid>
    </Grid>
  )
}

function HeaderBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button>Nummirock</Button>
        <Button>Uutiset</Button>
        <Button>Ohjelma</Button>
        <Button>Info</Button>
      </Toolbar>
    </AppBar>
  );
}

function Content() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.wallPaperContainer}>
        <img src={NummiBigImg} className={classes.wallPaper} />
      </Grid>
      <BandGrid xs={6} />
      <NewsGrid />
    </Grid>
  )
}

// Left-right alignment
function Sections() {
  const classes = useStyles();
  return (
    <div>
      <HeaderBar />
      <Grid container direction="row">
        <Grid item xs={1} className={classes.leftAlign}>
        </Grid>
        <Grid item xs={10}>
          <Content />
        </Grid>
        <Grid item xs={1} className={classes.rightAlign}>
        </Grid>
      </Grid>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Sections />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
