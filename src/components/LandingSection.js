import { Grid, makeStyles } from "@material-ui/core";

const NummiBigImg = 'https://www.nummirock.fi/2017/images/Etusivu_tausta_2021_desktop-C.jpg';

const useStyles = makeStyles(({
    wallPaperContainer: {
        backgroundColor: "black",
        height: "100vh",
    },
    wallPaper: {
        animation: `$fadein 2s`,
        height: "100%",
        width: "100%",
        objectFit: "cover",
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
            <Grid item xs={0} md={1}></Grid>
            <Grid item container xs={12} md={10}>
                <img src={NummiBigImg} className={classes.wallPaper} alt="Nummirock" />
            </Grid>
            <Grid item xs={0} md={1}></Grid>
        </Grid >);
}

export default LandingSection;
