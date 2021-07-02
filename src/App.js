import logo from './logo.svg';
import './App.css';

import { Grid, makeStyles } from '@material-ui/core';

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

function Content() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        header placeholder
      </Grid>
      <Grid item className={classes.wallPaperContainer}>
        <img src={NummiBigImg} className={classes.wallPaper} />
      </Grid>
      <Grid item>
        bands
      </Grid>
      <Grid item>
        news
      </Grid>
    </Grid>
  )
}

// Left-right alignment
function Sections() {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item xs={1} className={classes.leftAlign}>
      </Grid>
      <Grid item xs={10}>
        <Content />
      </Grid>
      <Grid item xs={1} className={classes.rightAlign}>
      </Grid>

    </Grid>
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
