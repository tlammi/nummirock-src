import { Grid, makeStyles } from "@material-ui/core";

const NummiBigImg = 'https://www.nummirock.fi/2017/images/Etusivu_tausta_2021_desktop-C.jpg';

const useStyles = makeStyles(({
    wallPaperContainer: {
        backgroundColor: "black",
    },
    wallPaper: {
        animation: `$fadein 2s`,
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

function LandingSection() {
    const classes = useStyles();
    return (
        <Grid container item className={classes.wallPaperContainer}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <img src={NummiBigImg} className={classes.wallPaper} alt="Nummirock" />
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid >);
}

export default LandingSection;
