import './App.css';

import { AppBar, Button, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core';

import BandGrid from "./components/BandGrid.js";

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
    <Grid container direction="column" spacing={4}>
      <Grid item className={classes.wallPaperContainer}>
        <img src={NummiBigImg} className={classes.wallPaper} />
      </Grid>
      <BandGrid perLineXs={2} />
      <BandGrid perLineXs={3} />
      <BandGrid perLineXs={4} />
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
