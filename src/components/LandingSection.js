import { makeStyles } from "@material-ui/core";
import Grid from '../util/Grid';
import Img from '../util/Img';

const NummiBigImg = 'https://www.nummirock.fi/2017/images/Etusivu_tausta_2021_desktop-C.jpg';
const NummiBigTxt = 'https://nummirock.fi/2017/images/otsikko-PVM-levea-2021C.png';

const useStyles = makeStyles(theme => ({
    wallPaperContainer: {
        height: "100vh",
        backgroundColor: theme.palette.background
    },
    wallPaper: {
        animation: `$fadein 2s`,
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    wallPaperText: {
        position: "absolute",
        bottom: "0",
        height: "40%",
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

function LandingSection() {
    const classes = useStyles();
    return (
        <Grid container item className={classes.wallPaperContainer}>
            <Grid item xs={false} md={1}></Grid>
            <Grid item container xs={12} md={10} direction="column" alignItems="center">
                <Img src={NummiBigImg} className={classes.wallPaper} alt="Nummirock" />
                <img src={NummiBigTxt} className={classes.wallPaperText} alt="" />
            </Grid>
            <Grid item xs={false} md={1}></Grid>
        </Grid >);
}

export default LandingSection;
