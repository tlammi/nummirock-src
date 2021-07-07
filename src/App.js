import './App.css';

import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import BandGrid from "./components/BandGrid.js";
import ReactMarkdown from 'react-markdown';

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

function NewsGrid() {
  return (
    <Grid item container>
      <Grid item xs={6}>
        <ReactMarkdown>
          # Good News Everyone!
        </ReactMarkdown>
        <ReactMarkdown>
          Dacia Sandero will be available next September
    </ReactMarkdown>
      </Grid>
      <Grid item xs={6}>
        <ReactMarkdown>
          # Oh no!
        </ReactMarkdown>
        <ReactMarkdown>
          Dacia Sandero will be delayed till next year.
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

function Content() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.wallPaperContainer}>
        <img src={NummiBigImg} className={classes.wallPaper} />
      </Grid>
      <Grid item>
        <Typography align="center" variant="h1">Ohjelma</Typography>
      </Grid>
      <BandGrid perLineXs={2} />
      <BandGrid perLineXs={3} />
      <BandGrid perLineXs={4} />
      <Grid item>
        <Typography align="center" variant="h1">Uutiset</Typography>
      </Grid>
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
    <Sections />
  );
}

export default App;
